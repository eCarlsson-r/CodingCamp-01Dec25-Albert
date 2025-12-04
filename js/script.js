window.onload = function() {
    document.getElementById("name").innerText = "Harfi";

    Array.from(document.getElementsByTagName("a")).forEach(function(link){
        link.addEventListener("click", function(event){
            event.preventDefault();
            let location = event.target.getAttribute("href");
            let elements = document.getElementsByClassName("page");
            for (let i = 0; i < elements.length; i++) {
                if (!('hidden' in elements[i].classList)) elements[i].classList.add('hidden');
            }
            if (location.includes("#")) {
                let locations = location.split("#");
                document.getElementById(locations[0]).classList.remove('hidden');
                document.getElementById(locations[1]).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                document.getElementById(location).classList.remove('hidden');
                window.scrollTo(0, 0);
            }
        });
    });

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
};