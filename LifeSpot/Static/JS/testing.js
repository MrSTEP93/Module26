function SaveInputText() {
    this.prevText = this.curText;
    this.curText = document.getElementsByTagName('input')[0].value;
    alert('Now you talk "' + this.curText + '"\n\nBut earlier you told "' + this.prevText + '"');
}