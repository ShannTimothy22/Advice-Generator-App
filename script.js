const api_url = "https://api.adviceslip.com/advice";

const counter = document.getElementById("counter");
const advices = document.getElementById("advice");
const dice = document.querySelector(".advice-dice");

dice.addEventListener("click", function () {
  async function getAdvice() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { id, advice } = data.slip;
    // console.log(id);
    // console.log(advice);
    counter.innerHTML = `${id}`;
    advices.innerHTML = `"${advice}"`;
  }
  getAdvice();
});
