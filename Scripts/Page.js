let user = JSON.parse(sessionStorage.getItem("user"))

let title = document.getElementById("title2")

title.innerHTML += user.firstname + " " + user.lastname