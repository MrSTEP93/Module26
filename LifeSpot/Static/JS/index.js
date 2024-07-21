
let session = new Map();

function handleSession() {
    session.set('creationDate', Date().toLocaleString());
    session.set('userAgent', window.navigator.userAgent);
    let userName = prompt('What is your name?');
    session.set('userName', userName)
}

function CheckAge() {
    let age = prompt("Пожалуйста, введите ваш возраст:");
    if (age >= 18) {
        session.set('age', age);
        alert("Приветствуем на LifeSpot! " + Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены на google.com");
        window.location.href = "http://www.google.com"
    }
}

function FilterContent()
{
    console.log('Func start!');
    //let userInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    let userInput = inputParsefunction();
    let videoCont = document.getElementsByClassName('video-container');
    for (let i = 0; i < videoCont.length; i++) {
        let children = videoCont[i];
        let videoDesc = children.getElementsByTagName('h3')[0].innerText.toLowerCase();
        console.log(videoDesc + ' includes ' + userInput + '??');
        if (videoDesc.includes(userInput)) {
            console.log('yes');
            videoCont[i].style.display = 'inline-block';
        } else {
            videoCont[i].style.display = 'none';
        }
    }
    console.log('Func end.');
}

function InviteToTgChannel()
{
    setTimeout(() =>
        alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Telegram-канал: @lifespot777"),
        10000);
}

let inputParsefunction = function GetUserInput() {
    return document.getElementsByTagName('input')[0].value.toLowerCase()
}

var sessionLog = function() {
    for (let el of session) {
        console.log(el);
    }
}
/*
let firstName = 'Ivan';

let result = `${firstName} glad to see you!`;
console.log(result);

*/