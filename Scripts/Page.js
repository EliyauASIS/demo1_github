let user = JSON.parse(sessionStorage.getItem("user"))

let title = document.getElementById("title2")

title.innerHTML += user.firstname + " " + user.lastname



let xhr = new XMLHttpRequest();
xhr.open("Get","https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function () {
  let response = JSON.parse(this.responseText);
  console.log(response);
  
};

xhr.send();

