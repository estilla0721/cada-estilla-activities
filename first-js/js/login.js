function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const full_name = document.getElementById('full_name').value;
    
    if((username == "") || (password == "") || (confirm_password == "") || (full_name == "")){
        alert("kargaam amin");
    }

    else if( password !== confirm_password) {
        alert("password mismatch");
    }
    else {
        alert("register successfully");
    }
}