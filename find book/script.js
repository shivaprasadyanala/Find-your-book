
// console.log(book_name);

// console.log(body);
var len = 0;
var search_btn = document.getElementsByClassName("search-btn")[0];
var input = document.getElementsByClassName("text")[0];


console.log("The start len"+len);
if(1){
     console.log("hi")
   divElement = document.getElementsByClassName('books')[0]
  //  load = document.getElementsByClassName("loading")[0];
  //  load.classList.remove("loading");
   // divElement.removeChild(divElement.childNodes[8])
   // divElement.innerHTML="";
   // console.log(divElement.childNodes)
   // for(let i = 0;i<len-1;i++){
   //     divElement.removeChild(divElement.childNodes[i])
   //  console.log("hi")
   // }

}

search_btn.addEventListener("click", () => {
  if(input.value==="") alert("enter the book name")
  else{
    var book_name = document.getElementsByClassName("text")[0].value;
    const request = `https://www.googleapis.com/books/v1/volumes?q=${book_name}&key=AIzaSyC6b5MziyNVwE6c0is4Q8-wsMairjXzONQ`

      load = document.getElementById("p");
      console.log(load);
      load.className = 'loading';
      // setTimeout(() => {
      //   load = document.getElementsByClassName("loading")[0];
      //   console.log(load);
      //  load.classList.remove("loading");
      // console.log("hello");
      // }, 1700);

     divElement = document.getElementsByClassName('books')[0]
     divElement.innerHTML="";
    fetch(request)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      .then(response => {
        load = document.getElementsByClassName("loading")[0];
        console.log(load);
        load.classList.remove("loading");
        console.log(response);
         len = response.items.length;
         console.log("the length is :"+len)
        for (let i = 0; i < 10; i++) {
          title = (response.items[i].volumeInfo.title);

          author = response.items[i].volumeInfo.authors[0]
          try {
            price = response.items[i].saleInfo.retailPrice.amount
          } catch (err) {
            price = "not for sale"
          }

          preview = response.items[i].volumeInfo.infoLink;
          purchase_link = response.items[i].saleInfo.buyLink;
          // if (!purchase_link) purchase_link = "not for sale";
          img = response.items[i].volumeInfo.imageLinks.thumbnail;
          description = response.items[i].volumeInfo.description;
          pages = response.items[i].volumeInfo.pageCount;
          // console.log(title);
          // console.log(author);
          // console.log(price);
          // console.log(preview);
          // console.log(purchase_link);
          // console.log(img);
          // console.log(description);
          // console.log(`No of pages ${pages}`);

          books(title, author, pages, img,description);
        }
        // ...
      }).catch(error => {
        console.error(error);
      });
  }

})



function books(title, author, pages, img,description) {
  path = img;
  body = document.getElementsByTagName('body');
  // divElement = document.createElement('div');
  // divElement.className = 'books';
  divElement = document.getElementsByClassName('books')[0]
  // console.log(divElement);
  innerDiv = document.createElement('div');
  innerDiv.className = 'book';
  imgEle = document.createElement('img')
  imgEle.setAttribute('src', path);
  infoDiv = document.createElement('div')
  infoDiv.className = 'info';
  h3 = document.createElement('h3')
  h3.innerHTML = `${title}`
  h4 = document.createElement('h4')
  h4.innerHTML = `${author}`
  para = document.createElement('h5')
  para.innerHTML = `no of pages:${pages}`
  desc = document.createElement('p')
  description = description.substr(0,200);
  desc.innerHTML = `${description}`
  infoDiv.appendChild(h3)

  infoDiv.appendChild(h4)

  infoDiv.appendChild(para)

  infoDiv.appendChild(desc)

  innerDiv.appendChild(imgEle)
  innerDiv.appendChild(infoDiv);
  divElement.appendChild(innerDiv);
  document.body.appendChild(divElement)



  // console.log(title, author, pages);

  // console.log(innerDiv);
  // console.log(h3);
  // console.log(h4);
  // console.log(para);



}
// console.log(book_name);
