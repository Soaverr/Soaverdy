
var password = document.getElementById('password');
var username = document.getElementById('username');
var usernameError = document.getElementById('usernameError');
var passwordError = document.getElementById('passwordEror');
function showPassword () {
    if (password.type == 'password') {
        password.type = "text";
    }else {
        password.type = "password";
    }
}

function showPage(pageId) {
    // // Hide all pages // លាក់ទំព័រទាំងអស់។
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page បង្ហាញទំព័រដែលបានជ្រើសរើស
    document.getElementById(pageId).classList.add('active');
}

function ifram () {
    var ifa = document.getElementById('ifa');
    if (ifa) {
        alert("Page lern HTML Element");
    }
}

function not () {
    var none = document.getElementById('none');
    if (none) {
        alert ("is not drop in web");
    }
}