let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Aboa", lastName: "Bella", job: "mesterlövész"},
    {firstName: "Cing", lastName: "Luma", job: "katona"},
    {firstName: "Abert", lastName: "Kurma", job: "kém"},
];

function megjelenit(){
    let elem = document.getElementById("hosok");
    let tartalom = "";
    for (let i = 0; i < heroes.length; i++){
        tartalom += `<div class="hero-card">${heroes[i].firstName} ${heroes[i].lastName}: ${heroes[i].job}</div><br>`;
    }
    
    elem.innerHTML = tartalom;
}

document.addEventListener("DOMContentLoaded", megjelenit);