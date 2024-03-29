const express = require('express')
const app = express()
const {sequelize , connectToDb} = require ('./db')
const cors = require ('cors')
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const authRouter = require ('./routes/auth')
app.use("/auth", authRouter)

const organizationRouter = require("./routes/organization");
app.use("/organization", organizationRouter);

const participantRouter = require("./routes/participant");
app.use("/participants", participantRouter);

const superadminRouter = require("./routes/superadmin");
app.use("/superadmin", superadminRouter);

const PORT = 3001;
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello World"})
})

// app.use(express.json());
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));



app.listen(PORT, async ()=>{
    console.log(`Server is running on PORT:${PORT}`)
    await connectToDb();
})