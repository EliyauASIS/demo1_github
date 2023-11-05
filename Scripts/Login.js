let users = JSON.parse(sessionStorage.getItem("user"))

function login_event(Username, password) {
    if (Username == users.username && password == users.password) {
        window.location.href = "../pages/Page.html"

    }
    else {
        alert("error")
    }

}