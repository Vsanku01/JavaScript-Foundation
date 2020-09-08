var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = xhttp.responseText;
    } else{
        throw new console.error("Network error");;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();