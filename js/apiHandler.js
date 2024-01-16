
const url = "https://jsonplaceholder.typicode.com/users";
const answer = document.querySelector("#answer");

document.addEventListener("DOMContentLoaded", callApi);

function callApi(){
    fetch(url)
    .then(data => data.json())
    .then(data => showHTML(data))
}

function showHTML(data){
    data.forEach(element => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${element.name}</td>
        <td>${element.website}</td>
        <td>${element.phone}</td>
        <td>Mangas ${element.company.name}</td>
        `
        answer.appendChild(row);
    });
}