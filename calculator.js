function display(num) {
    document.getElementById("result").value += num;
}

function Ac(){
    document.getElementById("result").value = "";
}

function Solve(){
   let x = document.getElementById("result").value ;
   let y = eval(x);
    document.getElementById("result").value = y;
}
