'use strict';

let getPlus = document.getElementById('getPlus');
let getNumber = 0;
let arr = [];

getPlus.addEventListener('click', function () {
    getNumber = +prompt('Число?', 0);
    arr.push(getNumber);
});

console.log(arr);  

let user = {};
//      Набор данных для ввода в обьекты    //

let nameInput = document.querySelector('#nameInput');
let nameCountry = document.querySelector('#nameCountry');
let randomId = document.querySelector('#randomId');
let pushValue = document.querySelector('#pushValue');

nameInput.addEventListener('input', function() {
    user.name = this.value;
});

nameCountry.addEventListener('input', function() {
    user.nameCountry = this.value;
});


// randomId.addEventListener('input', function() { //       Для id

//     randomId = Math.random();
//     user.randomId = this.value;

// });


pushValue.addEventListener('click', function(){
    console.log(user);
});

document.getElementById('pushValue').onclick = function () {
    document.getElementById('nameInput').value = '';
    document.getElementById('nameCountry').value = '';
}

document.getElementById('pushValue') 

// function checkRepeat(arr) {

//     if (arr.includes(, ))
// }

//      СДЕЛАТЬ ДОБОВЛЕНИЕ В ОБЬЕКТ     //