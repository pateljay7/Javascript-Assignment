var exp = "";
function my(a) {
    if(exp=="0"){exp="";}
    exp += a;
    document.getElementById('dis').value = exp;
}

function result() {
    x = exp[exp.length - 1];
    window.alert(x);
}

function clear_display() {
    exp = "0";
    //document.getElementById('dis').value=exp;
    document.getElementById('dis').value = exp;

}
function clear_last_digit() {
    exp = exp.slice(0, exp.length - 1);
    document.getElementById('dis').value = exp;
}

function result() {
    final_answer = eval(exp);
    document.getElementById('dis').value = eval(final_answer);
    exp = final_answer.toString();
}