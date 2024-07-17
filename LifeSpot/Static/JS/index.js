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
    console.log('Func start!');
    let userInput = document.getElementsByTagName('input')[0].value;
    let videoCont = document.getElementsByClassName('video-container');
    for (let i = 0; i <= videoCont.length; i++) {
        //console.log(videoCont[i]);
        let children = videoCont[i];
        let videoDesc = children.getElementsByTagName('h3')[0];
        console.log(videoDesc.innerText);
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