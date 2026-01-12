function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const error = document.getElementById('error');
    
    if((username == "estilla") && (password == "072106")) {
        error.innerHTML = "Login succesful";
        error.style.color= "#155724";
        error.style.background = '#d4edda';
        error.style.visibility = 'visible';
    }

    else {
        error.innerHTML = "Invalid Credentials";
        error.style.color= "#721c24";
         error.style.background = '#f8d7da';
        error.style.visibility = "visible";
        error.style.borderLeft = "5px solid #dc3545";
        error.style.borderRight = "5px solid #dc3545";
    }
}