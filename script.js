const input = document.querySelector("#main-input");
const outputp = document.querySelector("#output");

const capitaliseEntry = function (el) {
  return el
    .replaceAll("-", " ")
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
};

input.addEventListener("keyup", () => {
  console.log("test");
  let newText = capitaliseEntry(input.value);
  outputp.innerHTML = newText;
});
