function SaveSession() {
    let sess = new Map();
    sess.set('date', Date().toLocaleString());
    sess.set('userAgent', window.navigator.userAgent);
    let userName = prompt('What is your name?');
    sess.set('userName', userName)
    let age = CheckAge();
    sess.set('age', age);
    for (let el of sess) {
        console.log(el);
    }
}

function CheckAge() {
    let age = prompt("Пожалуйста, введите ваш возраст:");
    if (age >= 18) {
        alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены на google.com");
        window.location.href = "http://www.google.com"
    }
    return age;
}

function FilterContent()
{
    console.log('Func start!');
    let userInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    let videoCont = document.getElementsByClassName('video-container');
    for (let i = 0; i < videoCont.length; i++) {
        //console.log(videoCont[i]);
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

    /*
    videoCont.forEach(function(item, index, array) {
        console.log('div here');
        //;
    });
    */
}
/*
let firstName = 'Ivan';

let result = `${firstName} glad to see you!`;
console.log(result);

*/