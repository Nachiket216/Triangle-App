const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

isTriangleBtn.addEventListener("click", () => {
  const angle1 = Number(inputs[0].value);
  const angle2 = Number(inputs[1].value);
  const angle3 = Number(inputs[2].value);
  sumOfAngles(angle1, angle2, angle3);
});

function sumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  if (sumOfAngles == 180) {
    outputE1.innerText = "Yay";
  } else {
    outputE1.innerText = "oh oh";
  }
}

function isTriangle() {}
