


let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let username = document.getElementById("username")
let email = document.getElementById("email")
let gender = document.getElementById("gender")
let password = document.getElementById("password")


const submit_function = () => {
    let userObj = {
        firstname: fname.value,
        lastname: lname.value,
        username: username.value,
        email: email.value,
        gender: gender.value,
        password: password.value
    }

    sessionStorage.setItem("user", JSON.stringify(userObj))
    window.location.href = "../Pages/Login.html"
}
const reset_function = () => {
    fname.value = ""
    lname.value = ""
    username.value = ""
    email.value = ""
    gender.value = ""
    password.value = ""
}



document.getElementById("submit_button").addEventListener("click", submit_function)

document.getElementById("reset_button").addEventListener("click", reset_function)