
function readslideshow() {
    slideCont = document.getElementById('slideshow-container');
}

function startdrag(e) {
    startDrag = e.clientX;
}

function dragging(e) {
    let dragPosition;
    if (e.clientX != 0) {
        dragPosition = startDrag - e.clientX;
    }
    if (dragPosition > 0) {
        dragAction = next;
    } else if (dragPosition < 0) {
        dragAction = prev;
    }
}

function enddrag() {
    dragAction();
}

let prev = function previmg() {
    images = slideCont.getElementsByTagName('img');
    show(document.getElementById('nextarrow'), 'inline');
    let i = 0;
    for (let img of images) {
        if (img.style.visibility == 'visible') {
            if (i == 0) {
                break;
            }
            hide(img, 'none');
            show(images[i - 1], 'block');
            if ((i - 1) == 0) {
                hide(document.getElementById('prevarrow'), 'inline');
            }
            break;
        }
        i++;
    }
}

let next = function nextimg() {
    images = slideCont.getElementsByTagName('img');
    show(document.getElementById('prevarrow'), 'inline');
    let i = 0;
    for (let img of images) {
        if (img.style.visibility == 'visible') {
            if (i == (images.length - 1)) {
                break;
            }
            hide(img, 'none');
            show(images[i + 1], 'block');
            if ((i + 1) == (images.length - 1)) {
                hide(document.getElementById('nextarrow'), 'inline');
            }
            break;
        }
        i++;
    }
}

function hide(element, display) {
    //console.log(element);
    //console.log(elementNum + ' is ' + curImg.style.visibility + ' now');
    element.style.visibility = 'hidden';
    element.style.display = display;
    //console.log(elementNum + ' is hidden now');
}

function show(element, display) {
    //console.log(element);
    element.style.visibility = 'visible';
    element.style.display = display;
}

let slideCont;
let images;

let startDrag;
let dragAction;