
$(document).ready(function(){

$(".cat-alert-1").hide().fadeIn(1000).fadeOut(1000);

$("#nbtNonFiction").text();

/*we will append elements containing book-related info to the div with this
  ID*/
const divID = "bookDetails";
const dfltBook="The_Shield_of_Achilles";

let natFicBooks = $("#nbtFiction").text().split("|||");
let natNonFicBooks =  $("#nbtNonFiction").text().split("|||");
let natPoetryBooks =  $("#nbtPoetry").text().split("|||");
let pulFicBooks =  $("#pptFiction").text().split("|||");
let pulNonFicBooks =  $("#pptNonFiction").text().split("|||");
let pulPoetryBooks =  $("#pptPoetry").text().split("|||");

let previousBookTitle="";
let currentBookTitle = dfltBook;

// let dfltBookReqUrl =
//       "https://www.googleapis.com/books/v1/volumes?q=The_Shield_of_Achilles&maxResults=1&key=API_KEY";

var bookReqUrl =
            "https://www.googleapis.com/books/v1/volumes?q=" +currentBookTitle+ "&maxResults=1&key=API_KEY";

/*this var is updated whenever the user selects a category from the drop-down
  menu. The id of the selected dropdown-item is recorded in this var.*/
let currentCategory = "";

let tempCurrentCategory = "";


//displaying the book info of the default book.
displayBookAndInfo(bookReqUrl);

//adding click event to the book categories
$(".dropdown-item").click(function(){
   // $("#categoryAlert").fadeIn(1500).fadeOut(1500);
   $(".cat-alert-2").hide().fadeIn(750).fadeOut(750);


   //recording the id of the selected category
   currentCategory = $(this).attr('id');
   newBookReqUrl();
});

function newBookReqUrl() {
   let bookTitle = "";
   tempCurrentCategory = currentCategory;

   if(tempCurrentCategory == "NAT" || tempCurrentCategory == "PUL") {
      tempCurrentCategory = tempCurrentCategory +
         (1 + (Math.floor(Math.random()*100) % 3) ).toString();
      // alert("current category: " + currentCategory);
      // alert("in any category: " + tempCurrentCategory);
   }
   // alert("in newBookReqUrl(), tempCurrentCategory: " + tempCurrentCategory);
   if(tempCurrentCategory == "NAT1") {
      previousBookTitle = currentBookTitle
      currentBookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      // alert("book req url: " + bookReqUrl);
      // alert(previousBookTitle);
      // alert(currentBookTitle);
      bookReqUrl = bookReqUrl.replace(previousBookTitle, currentBookTitle);
   }
   else if(tempCurrentCategory == "NAT2") {
      previousBookTitle = currentBookTitle
      currentBookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      // alert("book req url: " + bookReqUrl);
      // alert(previousBookTitle);
      // alert(currentBookTitle);
      bookReqUrl = bookReqUrl.replace(previousBookTitle, currentBookTitle);
   }
   else if(tempCurrentCategory == "NAT3") {
      previousBookTitle = currentBookTitle
      currentBookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      // alert("book req url: " + bookReqUrl);
      // alert(previousBookTitle);
      // alert(currentBookTitle);
      bookReqUrl = bookReqUrl.replace(previousBookTitle, currentBookTitle);
   }
   else if(tempCurrentCategory == "PUL1") {
      previousBookTitle = currentBookTitle
      currentBookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      // alert("book req url: " + bookReqUrl);
      // alert(previousBookTitle);
      // alert(currentBookTitle);
      bookReqUrl = bookReqUrl.replace(previousBookTitle, currentBookTitle);
   }
   else if(tempCurrentCategory == "PUL2") {
      previousBookTitle = currentBookTitle
      currentBookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      // alert("book req url: " + bookReqUrl);
      // alert(previousBookTitle);
      // alert(currentBookTitle);
      bookReqUrl = bookReqUrl.replace(previousBookTitle, currentBookTitle);
   }
   else if(tempCurrentCategory == "PUL3") {
      previousBookTitle = currentBookTitle
      currentBookTitle =
         natFicBooks[ Math.floor(Math.random()*100) % natFicBooks.length];
      // alert("book req url: " + bookReqUrl);
      // alert(previousBookTitle);
      // alert(currentBookTitle);
      bookReqUrl = bookReqUrl.replace(previousBookTitle, currentBookTitle);
   }
}

$(".bcButton").click(function(){
   // alert(bookReqUrl);

   $( "#" + divID ).remove();
   newBookReqUrl();
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
        addCategory();
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

function addCategory() {
   let newPAward = document.createElement("p");
   let newPCategory = document.createElement("p");
   newPCategory.innerHTML="";

   // alert("in add category..tempCurrentCategory: " + tempCurrentCategory);
   if(tempCurrentCategory == "NAT1") {
      newPAward.innerHTML = "National Book Award";
      newPCategory.innerHTML = "Fiction";
   }
   else if(tempCurrentCategory == "NAT2") {
      newPAward.innerHTML = "National Book Award";
      newPCategory.innerHTML = "Non-Fiction";
   }
   else if(tempCurrentCategory == "NAT3") {
      newPAward.innerHTML = "National Book Award";
      newPCategory.innerHTML = "Poetry";
   }
   else if(tempCurrentCategory == "PUL1") {
      newPAward.innerHTML = "Pulitzer Prize";
      newPCategory.innerHTML = "Fiction";
   }
   else if(tempCurrentCategory == "PUL2") {
      newPAward.innerHTML = "Pulitzer Prize";
      newPCategory.innerHTML = "General Non-Fiction";
   }
   else  {
      newPAward.innerHTML = "Pulitzer Prize";
      newPCategory.innerHTML = "Poetry";
   }

   document.getElementById(divID).appendChild(newPAward);

   if(newPCategory.innerHTML != "")
      document.getElementById(divID).appendChild(newPCategory);
}

function addCoverImg(jsonObj) {
   let newImg = document.createElement("img");
   newImg.src = jsonObj.items[0].volumeInfo.imageLinks.thumbnail;
   // document.getElementById('bookContent').appendChild(newImg);S
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
   newP.innerHTML = jsonObj.items[0].volumeInfo.description.substring(0, 550);

   if(newP.innerHTML.length >= 550)
      newP.innerHTML += " . . . ";

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
