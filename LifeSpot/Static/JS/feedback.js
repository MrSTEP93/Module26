function GetReview() {
    let comment = {};
    var userName = window.sessionStorage.getItem('userName');
    if (userName == null) {
        comment["userName"] = prompt("What is your name? ");
    } else {
        comment["userName"] = userName;
    }

    comment["text"] = prompt(comment["userName"] + ", write your comment: ");
    if (comment["text"] == null) {
        return
    }
    comment["date"] = new Date().toLocaleString();
    if (confirm("Do you want people to rate your comment?")) {
        let review = Object.create(comment);
        review.rate = 0;
        PrintComment(review);
    } else {
        PrintComment(comment);
    }

    //console.log('Data collected:');
    //console.log('\t' + review["userName"]);
    //console.log('\t' + review["comment"]);
    //console.log('\t' + review["date"]);
}

const PrintComment = (review) => {
    //console.log('Data received:');
    //console.log('\t' + review["userName"]);
    //console.log('\t' + review["comment"]);
    //console.log('\t' + review["date"]);

     let newReview = '<p class="review-name"> <b>' + review["userName"] + '</b> </p> ' +
        '<p class="review-date"> ' + review["date"] + ' </p>' +
        '<div class="review-content"> ' + review["text"] + '</div><br />';
    if (review.hasOwnProperty('rate')) {
        newReview += '<div class="review-rating"> <a>-</a> <b>' + review["rate"] + '</b> <a>+</a> </div> <br />';
    }
    document.getElementsByClassName('reviews')[0].innerHTML += newReview;
};