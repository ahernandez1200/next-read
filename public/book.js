
$(document).ready(function(){

alert($("#nbtNonFiction").text());

/*we will append elements containing book-related info to the div with this
  ID*/
const divID = "bookDetails";

let natFicBooks = ["Interior_Chinatown"];

let dfltBookReqUrl =
      "https://www.googleapis.com/books/v1/volumes?q=The_Shield_of_Achilles&maxResults=1&key=AIzaSyCg_gMcW0yKtYA4T03lt2sWcBbAz5581rc";

let bookReqUrl =
            "https://www.googleapis.com/books/v1/volumes?q=BOOK_TITLE&maxResults=1&key=AIzaSyCg_gMcW0yKtYA4T03lt2sWcBbAz5581rc";

/*this var is updated whenever the user selects a category from the drop-down
  menu. The id of the selected dropdown-item is recorded in this var.*/
let currentCategory = "";

//displaying the book info of the default book.
displayBookAndInfo(dfltBookReqUrl);

//adding click event to the book categories
$(".dropdown-item").click(function(){
   //recording the id of the selected category
   currentCategory = $(this).attr('id');
   newBookReqUrl();
});

function newBookReqUrl() {
   let bookTitle = "";
   let tempCurrentCategory = currentCategory;

   if(currentCategory = "NAT1") {
      bookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      alert(bookTitle);
      bookReqUrl = bookReqUrl.replace("BOOK_TITLE", bookTitle);
   }
   // else if(currentCategory = "NAT2") {
   //    bookTitle =
   //       natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
   //    alert(bookTitle);
   //    bookReqUrl = bookReqUrl.replace("BOOK_TITLE", bookTitle);
   // }
   // else if(currentCategory = "NAT3") {
   //    bookTitle =
   //       natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
   //    alert(bookTitle);
   //    bookReqUrl = bookReqUrl.replace("BOOK_TITLE", bookTitle);
   // }
   // else if(currentCategory = "PUL1") {
   //    bookTitle =
   //       natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
   //    alert(bookTitle);
   //    bookReqUrl = bookReqUrl.replace("BOOK_TITLE", bookTitle);
   // }
   // else if(currentCategory = "PUL2") {
   //    bookTitle =
   //       natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
   //    alert(bookTitle);
   //    bookReqUrl = bookReqUrl.replace("BOOK_TITLE", bookTitle);
   // }
   // else if(currentCategory = "PUL3") {
   //    bookTitle =
   //       natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
   //    alert(bookTitle);
   //    bookReqUrl = bookReqUrl.replace("BOOK_TITLE", bookTitle);
   // }
}

$(".bcButton").click(function(){
   alert(bookReqUrl);
   $( "#" + divID ).remove();
   displayBookAndInfo(bookReqUrl);
});


function displayBookAndInfo(bookGetReq) {
   fetch(bookGetReq)
   .then( (response)=>response.json())
   .then( (data)=>{
        // alert(data.items[0].volumeInfo.description);
        addDiv();
        addBookTitle(data);
        addCoverImg(data);
        addAuthor(data);
        addDescription(data);
        addPublishedDate(data);
   });
}

/*Elements that contain book-related information will be appended as children
  the div created in this function. The reason why we add this div in the
  first place is so that when we want to display the info of a new book,
   we can delete this div and that in turn will delete all the info
   related to the previous book that was displayed.
*/
function addDiv(){
   let newDiv = document.createElement("div");
   newDiv.id = divID;
   $(newDiv).insertBefore(".bcButton");

}


function addBookTitle(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML ="<em>" + jsonObj.items[0].volumeInfo.title + "</em>";
   // document.getElementById('bookContent').appendChild(newP);
   // $(newP).insertBefore(".bcButton");
   document.getElementById(divID).appendChild(newP);


}

function addCoverImg(jsonObj) {
   let newImg = document.createElement("img");
   newImg.src = jsonObj.items[0].volumeInfo.imageLinks.thumbnail;
   // document.getElementById('bookContent').appendChild(newImg);
   // $(newImg).insertBefore(".bcButton");
   document.getElementById(divID).appendChild(newImg);

}

function addAuthor(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML ="<strong>" + jsonObj.items[0].volumeInfo.authors + "</strong>";
   // document.getElementById('bookContent').appendChild(newP);
   // $(newP).insertBefore(".bcButton");
   document.getElementById(divID).appendChild(newP);

}

function addDescription(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML = jsonObj.items[0].volumeInfo.description;
   // document.getElementById('bookContent').appendChild(newP);
   // $(newP).insertBefore(".bcButton");
   document.getElementById(divID).appendChild(newP);


}

function addPublishedDate(jsonObj) {
   let newP = document.createElement("p");
   newP.innerHTML = jsonObj.items[0].volumeInfo.publishedDate;
   // document.getElementById('bookContent').appendChild(newP);
   // $(newP).insertBefore(".bcButton");
   document.getElementById(divID).appendChild(newP);


}



});

//data.items[0].volumeInfo.description
