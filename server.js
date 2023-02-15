const express = require("express")
const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const organizationRouter = require("./routes/organization");
app.use("/organization", organizationRouter);
const participantRouter = require("./routes/participant");
app.use("/participants", participantRouter);
const superadminRouter = require("./routes/superadmin");
app.use("/superadmin", superadminRouter);


app.listen(3000)