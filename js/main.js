let arr = ['Pepi', 'Clau','Daniela T','Maria Laura', 'Amanda', 'Alisa','Ana G','Ana L', 'Angie', 'Daniela R' , 'Eliana',
    'Flo', 'Gaby', 'Leo', 'Inga', 'Marta', 'Nicole', 'Olga', 'Yeraldine', 'Ranju', 'Rosangely','Sonia', 'Taiza', 'Yasmin'];

const spinner = document.getElementById("spin");

    function chooseName(){
        console.log(arr[Math.floor(Math.random() * arr.length)]);

    }
spinner.addEventListener("click", chooseName);