const User = require ('../models/users').model
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

exports.register = async (req , res , next) =>{
    try{

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(201).send("User has been created.")
    }
    catch(err){
        next(err);

    }
}

exports.login = async (req , res , next) =>{
    try{
    
        const user = await User.findOne({
           where:{
            email:req.body.email
        } 
        });
        if(!user) return next( "User not found")
        

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if(!isPasswordCorrect)
         return next( "Wrong password or username!");
      
        const token = jwt.sign({
            id:user.id,
            isAdmin:user.isAdmin
        },
        "Y2VlamF5cXVpYW1jbw");
 
        const { password , isAdmin , ...otherDetails} = user._previousDataValues;
        res.cookie("access-token", token , {
            httpOnly:true,
        })
        res.status(200).json({...otherDetails});
    }
    catch(err){
        next(err);

    }
};