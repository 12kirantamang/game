// challage 1: you age in days
 function ageInDays() {
    var birthYear = prompt('what year were you born....Good friend?');
    var ageInDays = (2020 - birthYear) *365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ageInDays + 'days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result-box').appendChild(h1);
    
   }