const sides = document.querySelectorAll(".side-input");
const hypotenuseBth = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

hypotenuseBth.addEventListener("click", () => {
  var a = Number(sides[0].value);
  var b = Number(sides[1].value);
  const sumOfSquares = calculateSumOfSquares(a, b);
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse
});

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
