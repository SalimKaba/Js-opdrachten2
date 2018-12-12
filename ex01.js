function surfaceRectagle() {
  let x = parseInt(prompt("geef breedte"));
  let y = parseInt(prompt("geef lengte"));
  document.write("oppervlakte van de rechthoek is " + (x * y));
}

function perimeterRectangle() {
  let x = parseInt(prompt("geef breedte"));
  let y = parseInt(prompt("geef lengte"));
  document.write("omtrek van de rechthoek is " + ((x + y) * 2));
}
