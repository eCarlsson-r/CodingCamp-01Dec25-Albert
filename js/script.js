function welcomeMessage() {
    let userResponse = prompt("Welcome to Our Website! Input your name :");

    if (userResponse === null  || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerHTML = "Hi "+userResponse+", Welcome To Website";
}

document.getElementById("message_form").onsubmit = function(event) {
    event.preventDefault();
    let result = '\n\nCurrent time : ' + new Date().toString();
    result += '\n\n';
    result += 'Nama : ' + this.elements["nama"].value;
    result += '\nTanggal Lahir : ' + this.elements["tanggal_lahir"].value;
    result += '\nJenis Kelamin : ' + this.elements["kelamin"].value;
    result += '\nPesan : ' + this.elements["pesan"].value;
    document.getElementById("sent_message").value = result;
};

welcomeMessage();