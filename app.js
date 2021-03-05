
// require('dotenv').config();

//creating principal applications
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const fetch = require("node-fetch");
const fs = require('fs');
const app = express();


//reading the contents of the .txt files within bookScrapper/ into variables
const nbtFiction = fs.readFileSync("bookScrapper/natBookTitlesFiction.txt",'utf8');
const nbtNonFiction = fs.readFileSync("bookScrapper/natBookTitlesNonFiction.txt",'utf8');
const nbtPoetry = fs.readFileSync("bookScrapper/natBookTitlesPoetry.txt",'utf8');
const pptFiction = fs.readFileSync("bookScrapper/pulPrizeTitlesFiction.txt",'utf8');
const pptNonFiction = fs.readFileSync("bookScrapper/pulPrizeTitlesNonFiction.txt",'utf8');
const pptPoetry = fs.readFileSync("bookScrapper/pulPrizeTitlesPoetry.txt",'utf8');



//specifies the directory from which to serve static files
app.use(express.static("public"));
//enabling the use of static template files
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

//starting the server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

//home directory
app.get("/", (req, res)=>{
   res.render("home",
      {  nbtFiction: nbtFiction,
         nbtNonFiction: nbtNonFiction,
         nbtPoetry: nbtPoetry,
         pptFiction: pptFiction,
         pptNonFiction: pptNonFiction,
         pptPoetry: pptPoetry
      }

   );
});


// function convertFileContentToString(path) {
//
//    someVar = fs.readFileSync(path,'utf8');
//    console.log(someVar);
//
//    //asychrnouns
//    // fs.readFile(path, 'utf8', function(err, data) {
//    //     if (err) throw err;
//    //     var content = data.toString();
//    //     setSomeVar(content);
//    // }) ;
//
// }




// var currentGetRequest =
//    "https://www.googleapis.com/books/v1/volumes?q=From_Here_to_eternity&maxResults=1&key=AIzaSyCg_gMcW0yKtYA4T03lt2sWcBbAz5581rc";


// function temp() {
// fetch(currentGetRequest)
//   .then(response => response.json())
//   .then(data => {
//      // console.log(data.items[0].volumeInfo.title);
//      addBookChild(data);
//      // throw new Error('Exiting function.');
//   });
//   // .catch(error=> console.log("exit."));
// }
//
//   function addBookChild(googleRetObj) {
//
   //   $(document).ready(function(){
   //      const newImg = $(document).createElement("img");
   //      const brk = document.createElement("br");
   //      newImg.src = googleRetObj.items[0].volumeInfo.imageLinks.smallThumbnail;
   //      document.getElementById('body').appendChild(newImg);
   //      document.getElementById('body').appendChild(brk);
   // });
//
//
//  };

// $(document).ready(function(){
//    alert("hello");
// }
