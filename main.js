const firstnameInput = document.querySelector('#Firstname');
const lastnameInput = document.querySelector('#Lastname');
const groupInput = document.querySelector('#group');
const workInput = document.querySelector('#exampleCheck1');
const submit = document.querySelector('#submit');
const form = document.querySelector('#formOne');
const tbody = document.querySelector('#tbody');

document.addEventListener('DOMContentLoaded', () => {
    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];
    rows.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = row;
        tbody.appendChild(tr);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ism = firstnameInput.value;
    let familiya = lastnameInput.value;
    let gurux = groupInput.value;
    let ish = workInput.checked ? 'Yes' : 'No';
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${ism}</td>
    <td>${familiya}</td>
    <td>${gurux}</td>
    <td>${ish}</td>
    <td class="dell"><button class="del" onclick='deleteRow(event)'>Delete</button></td>
    `;
    tbody.appendChild(tr);
    firstnameInput.value = '';
    lastnameInput.value = '';
    groupInput.value = '';
    workInput.checked = false;
    

    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];
    rows.push(tr.innerHTML);
    localStorage.setItem('tableRows', JSON.stringify(rows));
});

function deleteRow(e) {
    const row = e.target.parentElement.parentElement;
    row.remove();


    let rows = JSON.parse(localStorage.getItem('tableRows')) || [];
    rows = rows.filter(r => r !== row.innerHTML);
    localStorage.setItem('tableRows', JSON.stringify(rows));
}
