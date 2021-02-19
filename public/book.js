
$(document).ready(function(){

   alert("hello");
   var getReqURL =
      "https://www.googleapis.com/books/v1/volumes?q=From_Here_to_eternity&maxResults=1&key=AIzaSyCg_gMcW0yKtYA4T03lt2sWcBbAz5581rc";


   fetch(getReqURL)
   .then( (response)=>response.json())
   .then( (data)=>{
      alert(data.items[0].volumeInfo.description);
   })




});
