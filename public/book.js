
$(document).ready(function(){

var getReqURL =
   "https://www.googleapis.com/books/v1/volumes?q=From_Here_to_eternity&maxResults=2&key=AIzaSyCg_gMcW0yKtYA4T03lt2sWcBbAz5581rc";


fetch(getReqURL)
.then( (response)=>response.json())
.then( (data)=>{
     // alert(data.items[0].volumeInfo.description);
     addBookTitle(data);
     addCoverImg(data);
     addAuthor(data);
     addDescription(data);
     addPublishedDate(data);
});


function addBookTitle(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML ="<em>" + jsonObj.items[0].volumeInfo.title + "</em>";
   // document.getElementById('bookContent').appendChild(newP);
   $(newP).insertBefore(".bcButton");

}

function addCoverImg(jsonObj) {
   let newImg = document.createElement("img");
   newImg.src = jsonObj.items[0].volumeInfo.imageLinks.thumbnail;
   // document.getElementById('bookContent').appendChild(newImg);

   $(newImg).insertBefore(".bcButton");
}

function addAuthor(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML ="<strong>" + jsonObj.items[0].volumeInfo.authors + "</strong>";
   // document.getElementById('bookContent').appendChild(newP);
   $(newP).insertBefore(".bcButton");

}

function addDescription(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML = jsonObj.items[0].volumeInfo.description;
   // document.getElementById('bookContent').appendChild(newP);
   $(newP).insertBefore(".bcButton");

}

function addPublishedDate(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML = jsonObj.items[0].volumeInfo.publishedDate;
   // document.getElementById('bookContent').appendChild(newP);
   $(newP).insertBefore(".bcButton");

}



});

//data.items[0].volumeInfo.description
