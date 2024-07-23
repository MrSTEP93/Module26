
function Comment() {
    this.isEmpty = false;
    this.userName = window.sessionStorage.getItem('userName');
    if ((this.userName == 'null')) {
        this.userName = prompt("What is your name? ");
        if (this.userName == null) { 
            this.isEmpty = true;
            return
        }
    }

    this.text = prompt(this.userName + ", write your comment: ");
    if (this.text == null) {
        this.isEmpty = true;
        return
    }

    this.date = new Date().toLocaleString();
}

function getReview() {
    let comment = new Comment();

    if (!comment.isEmpty) {
        if (confirm("Do you want people to rate your comment?")) {
            let review = Object.create(comment);
            review.rate = 0;
            review.id = Math.floor(Math.random() * 1000);
            PrintComment(review);
        } else {
            PrintComment(comment);
        }
    }
}

function rate(rate, id) {
    let sign = '';
    if (rate == 1) {
        sign = '+';
    }
    let searchingId = id;
    let element = document.getElementById(searchingId);
    let arr = element.innerText.split(' ');
    let score = parseInt(arr[arr.length - 1], 10);
    score += rate;
    arr[arr.length - 1] = sign + score;
    element.innerText = arr.join(' ');
    //document.getElementById(id).innerText = ' 👍 +' + rate;
}

const PrintComment = (review) => {
    //console.log('Data received:');
    //console.log('\t' + review["userName"]);
    //console.log('\t' + review["comment"]);
    //console.log('\t' + review["date"]);

     let newReview = '<p class="review-name"> <b>' + review["userName"] + '</b> </p> ' +
        '<p class="review-date"> ' + review["date"] + ' </p>' +
        '<div class="review-content"> ' + review["text"] + '</div>';
    if (review.hasOwnProperty('rate')) {
        //newReview += '<br /><div class="review-rating"> <a>-</a> <b>' + review["rate"] + '</b> <a>+</a> </div> <br />';
        newReview += `<br />
        <button id="dislike-${review["id"]}" onClick="rate(-1, this.id)"> 💩 -${review["rate"]} </button>
        <button id="like-${review["id"]}" onClick="rate(+1, this.id)"> 👍 +${review["rate"]} </button><br />`;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += newReview;
};