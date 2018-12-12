function sum() {
    alert("geef 3 getallen in");
    let y = 0;
    for (i = 1; i < 4; i++) {
      let x = parseInt(prompt("geef getal in"));
      y = y + x;
    }
    alert("som van de 3 getallen is " + y);
}
