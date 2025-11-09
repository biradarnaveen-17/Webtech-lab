function press(d) {
    document.getElementById('res').value += d;
}

function calculate() {
    let res = document.getElementById('res').value;
    if(res != "") {
        document.getElementById('res').value = eval(res);
    }
}

function clearRes() {
    document.getElementById('res').value = "";
}

function toggleSign() {
    let res = document.getElementById('res').value;
    if(res != "") {
        if(res.startsWith('-')) {
            document.getElementById('res').value = res.substring(1);
        } else {
            document.getElementById('res').value = '-' + res;
        }
    }
}
