console.log('app.js')

function main () {
    console.log('main')
    const submit = document.getElementById('submit');
    submit.addEventListener('click',add);
}

function getInput () {
    const text = document.getElementById("text").value;
    return text;
}

function add(e){
    e.preventDefault();
    console.log('test');
    text = getInput();
    const out = document.getElementById('output');
    const newItem = document.createElement('div');
    newItem.append(document.createTextNode(text));
    out.appendChild(newItem);
}

window.onload = main;