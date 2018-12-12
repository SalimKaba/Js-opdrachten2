function testWhile() {
    let str = prompt("geef letter p in");
    let n = str.includes("p");
    while (n == false) {
    str = prompt("geef letter p in");
    n = str.includes("p");
    }
    alert("\"" + str + "\"");
}
