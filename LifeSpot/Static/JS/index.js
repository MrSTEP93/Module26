function handleSession() {
    let sess = new Map();
    sess.set('userAgent', window.navigator.userAgent);
    let userName = prompt('What is your name?');
    sess.set('userName', userName)
    let age = prompt("Пожалуйста, введите ваш возраст:");
    sess.set('age', age);
    let creationDate = Date().toLocaleString();
    sess.set('creationDate', creationDate);
    if (age >= 18) {
        alert("Приветствуем на LifeSpot! " + creationDate);
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены на google.com");
        window.location.href = "http://www.google.com"
    }
    return sess;
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

let inputParsefunction = function GetUserInput() {
    return document.getElementsByTagName('input')[0].value.toLowerCase()
}

var sessionLog = function (session) {
    for (let el of session) {
        console.log(el);
    }
}
/*
let firstName = 'Ivan';

let result = `${firstName} glad to see you!`;
console.log(result);

*/