// function komplex() {
//     var x = document.getElementById('ubah').innerHTML;
//     if (x == 'Hello World') {
//         console.log(x);
//         // tambahContent();
//     }
//     gantiContent();
// }

function tambahContent() {
    var tittle = document.createElement("h1");
    tittle.textContent = "Hello World";
    document.getElementById('ubah').appendChild(tittle);
}

function gantiContent() {
    var tittle = document.createElement("h1");
    var angkaKu = Math.round(21.4);
    tittle.textContent = "Hello World";
    document.getElementById("ubah").textContent = angkaKu;
}