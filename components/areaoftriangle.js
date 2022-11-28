const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

calculate.addEventListener("click", () => {
  const area = calculateArea(Number(base.value), Number(height.value));
  output.innerText = "Area of Triangle is : " + area;
});

function calculateArea(base, height) {
  const area = 0.5 * (base * height);
  return area;
}
