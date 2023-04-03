function solved() {
    let a = document.getElementById("a").value;
    console.log(a);
    let b = document.getElementById("b").value;
    console.log(b);
    let c = document.getElementById("c").value;
    console.log(c);
    let s = a*b*c/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    let answer = document.querySelector("#answer");
        answer.value = area;
    console.log(answer.value);
          console.log(area)   
        console.log(answer.value);

}

solved();