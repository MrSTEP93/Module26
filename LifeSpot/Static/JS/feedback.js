﻿function GetReview() {
    let review = {};

    review["userName"] = prompt("What is your name? ");
    if (review["userName"] == null) {
        return
    }

    review["comment"] = prompt("Type your comment: ");
    if (review["comment"] == null) {
        return
    }

    review["date"] = new Date().toLocaleString();
    //console.log('Data collected:');
    //console.log('\t' + review["userName"]);
    //console.log('\t' + review["comment"]);
    //console.log('\t' + review["date"]);
    PrintComment(review);
}

const PrintComment = (review) => {
    //console.log('Data received:');
    //console.log('\t' + review["userName"]);
    //console.log('\t' + review["comment"]);
    //console.log('\t' + review["date"]);

    document.getElementsByClassName('reviews')[0].innerHTML += '<p class="review-name"> <b>' + review["userName"] + '</b> </p> ' +
        '<p class="review-date"> ' + review["date"] + ' </p>' +
        '<div class="review-content"> ' + review["comment"] + '</div><br />';
};