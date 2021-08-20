var visible = true;
function fun1() {
    if(visible) {
        document.getElementById('menuNav').style.display = 'none';
        visible = false;
    } else {
        document.getElementById('menuNav').style.display = 'inline-block';
        visible = true;
    }
}

