const button = document.getElementById("spin");
const resultext = document.getElementById("result");
let names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];

function selectName(){
    let winner = names[Math.floor(Math.random() * names.length)];
    document.getElementById("spin").innerHTML="Spin";
    message = winner;
    resultext.innerHTML = message;
}
button.addEventListener("click",selectName)
let spinner = document.getElementById("spin");


function noRepetida(winner) {


    function nameSelector() {
        spinner = arr [Math.floor(Math.random() * arr.length)];
        message = "La seleccionada es:  ";

    }

    document.getElementById("spinner").innerHTML = message;
}