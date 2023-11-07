let user = JSON.parse(sessionStorage.getItem("user"))

let title = document.getElementById("title2")

title.innerHTML += user.firstname + " " + user.lastname

postArr = "";

let xhr = new XMLHttpRequest();
xhr.open("Get", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onload = function () {
    let response = JSON.parse(this.responseText);
    console.log(response);
    postArr = response;
    showPost()
};
xhr.send();

let container = document.getElementById("container2"); 

const showPost = () => {
    for (let x in postArr) {
        let div = document.createElement("div");
        div.className = "post";
        container.appendChild(div);
        let post = postArr[x]
        div.innerHTML = `<ul>
        <li>userId: ${post.userId}</li>
        <li>id: ${post.id}</li>
        <li>title: ${post.title}</li>
        <li>body: ${post.body}</li>
        </ul>`
        
    } 
}  
