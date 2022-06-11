let express = require("express");
let ejs = require("ejs");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://Henihollar:Lagos%40nigeria2022@cluster0.piu1y.mongodb.net/clientFilesDB");

const detailsSchema = {  
    profile: Array,
  };
  
  const DetailsBook = mongoose.model("detailsBook", detailsSchema);
  const DetailsConfigure = mongoose.model("detailsConfigure", detailsSchema);
  const DetailsRegister= mongoose.model("detailsRegister", detailsSchema);
  const DetailsBecome= mongoose.model("detailsBecome", detailsSchema);

app.get("/", function(req, res){
res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.get("/Book", function(req, res){
    let bookRide = "BOOK A TEST RIDE";
    res.render("book", {pageTitle: bookRide, route: "/book"});
});
app.get("/Configure", function(req, res){
    let configureBike = "CONFIGURE YOUR BIKE";
    res.render("book", {pageTitle: configureBike, route: "/configure"});

});

app.get("/Register", function(req, res){
    let register = "REGISTER FOR THE COMPETITION";
    res.render("book", {pageTitle: register, route: "/register"});

});

app.get("/Become", function(req, res){
    let Become = "BECOME AN AGENT ";
    res.render("book", {pageTitle: Become, route: "/become"});
});

app.get("/about", function(req, res){
    res.render("about")
});

app.get("/services", function(req, res){
    res.render("services")
})


app.post("/book", function(req, res){

    let clientName = req.body.clientName;
    let clientLoc = req.body. clientLoc;
    let clientNum = req.body.clientNum;
    let clientMail = req.body. clientMail;
    let clientSchedule = req.body.clientSchedule;

    let clientDetails = [clientName, clientLoc, clientNum, clientMail, clientSchedule];

    const clientProfilesBook = new DetailsBook({
        profile: clientDetails    
    });
    clientProfilesBook.save();

    let messageBookReply = "Test Booking Successful, Check Your Mail For Your Entry Ticket"
    
    res.render("response", {responseText: messageBookReply});
});

app.post("/configure", function(req, res){

    let clientName = req.body.clientName;
    let clientLoc = req.body. clientLoc;
    let clientNum = req.body.clientNum;
    let clientMail = req.body. clientMail;
    let clientSchedule = req.body.clientSchedule;

    let clientDetails = [clientName, clientLoc, clientNum, clientMail, clientSchedule];

    const clientProfilesConfigure = new DetailsConfigure({
        profile: clientDetails
    });
    clientProfilesConfigure.save();
    
    let messageConfigureReply = "Details Saved, Check Your Mail For your Configuration Schedule Date"

    res.render("response", {responseText: messageConfigureReply});
});
app.post("/register", function(req, res){

    let clientName = req.body.clientName;
    let clientLoc = req.body. clientLoc;
    let clientNum = req.body.clientNum;
    let clientMail = req.body. clientMail;
    let clientSchedule = req.body.clientSchedule;

    let clientDetails = [clientName, clientLoc, clientNum, clientMail, clientSchedule];

    const clientProfilesRegister = new DetailsRegister({
        profile: clientDetails
    });
    clientProfilesRegister.save();
    
    let messageRegisterReply = "Details Saved Successfully, Further Modalities Shall Be Passed Across, Check Your Mail Constantly"

    res.render("response", {responseText: messageRegisterReply});
});
app.post("/become", function(req, res){

    let clientName = req.body.clientName;
    let clientLoc = req.body. clientLoc;
    let clientNum = req.body.clientNum;
    let clientMail = req.body. clientMail;
    let clientSchedule = req.body.clientSchedule;

    let clientDetails = [clientName, clientLoc, clientNum, clientMail, clientSchedule];
   
    const clientProfilesBecome = new DetailsBecome({
        profile: clientDetails
    });
    clientProfilesBecome.save();

    let messageBecomeReply = "Details Saved Successfully, Check Your Mail For Verification as Our Agent"

    res.render("response", {responseText: messageBecomeReply});
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});  