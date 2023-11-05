let users = JSON.parse(sessionStorage.getItem("User"))

function login_event(Username, password) {
    if (Username == users.UserName && password == users.Password){
window.location.href = "../pages/Page.html"

    }
else{
    alert ("error")
}
    
}