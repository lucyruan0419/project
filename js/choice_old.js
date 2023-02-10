
let my_block = document.getElementsByClassName("btn_choice");
for (let i = 0; i < my_block.length; i++) {
    my_block[i].addEventListener("click", function onClick(e) {
        //e.stopPropagation();
        for (let i = 0; i < my_block.length; i++) {
            my_block[i].style.backgroundColor = "#999";
        }
        this.style.backgroundColor = "#D3442D";
    })

};






function left01() {
    document.getElementById('right01').style.display = 'block';
    document.getElementById('right02').style.display = 'none';
    document.getElementById('right03').style.display = 'none';
    document.getElementById('right04').style.display = 'none';
    document.getElementById('right05').style.display = 'none';
}

function left02() {
    document.getElementById('right02').style.display = 'block';
    document.getElementById('right01').style.display = 'none';
    document.getElementById('right03').style.display = 'none';
    document.getElementById('right04').style.display = 'none';
    document.getElementById('right05').style.display = 'none';
}
function left03() {
    document.getElementById('right03').style.display = 'block';
    document.getElementById('right01').style.display = 'none';
    document.getElementById('right02').style.display = 'none';
    document.getElementById('right04').style.display = 'none';
    document.getElementById('right05').style.display = 'none';
}
function left04() {
    document.getElementById('right04').style.display = 'block';
    document.getElementById('right01').style.display = 'none';
    document.getElementById('right02').style.display = 'none';
    document.getElementById('right03').style.display = 'none';
    document.getElementById('right05').style.display = 'none';
}
function left05() {
    document.getElementById('right05').style.display = 'block';
    document.getElementById('right01').style.display = 'none';
    document.getElementById('right02').style.display = 'none';
    document.getElementById('right03').style.display = 'none';
    document.getElementById('right04').style.display = 'none';
}
