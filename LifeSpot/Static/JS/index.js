function CheckAge() {
    let age = prompt("Пожалуйста, введите ваш возраст:");
    if (age >= 18) {
        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены на google.com");
        window.location.href = "http://www.google.com"
    }
}

function FilterContent()
{
    console.log('gde vyvod, allo??');


    /*
    let userInput = document.getElementsByTagName('input')[0].value;
    let videoCont = document.getElementsByClassName('video-container');
    */
}
/*
let firstName = 'Ivan';

let result = `${firstName} glad to see you!`;
console.log(result);

*/