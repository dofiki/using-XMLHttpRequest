let mid = document.querySelector('.mid');
let paragraph = mid.querySelector('.paragraph');

const request = new XMLHttpRequest();
request.open('GET', 'https://meowfacts.herokuapp.com/');
request.send();

request.addEventListener('load', function(){
    let catFact = JSON.parse(this.responseText);
    paragraph.innerText = catFact.data[0];
})