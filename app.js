"use strict";
const kanaal = document.querySelector("#kanaal");
const marla = document.querySelector("#marla");
const share = document.querySelector("#share");
const output = document.querySelector(".check");
const solution = document.querySelector(".solution");
output.addEventListener("click", function () {
  console.log(kanaal.value);
  console.log(marla.value);
  //   gajjChanger();
  shareChecker();
});

// farad changer into gajj////

const gajjChanger = function () {
  const kanaalValue = Number(kanaal.value);
  const marlaValue = Number(marla.value);
  const gajj = (kanaalValue * 20 + marlaValue) * 30.25;
  return gajj;
};

// share checker
function shareChecker() {
  gajjChanger();
  const shareNum = Number(share.value.slice(0, share.value.indexOf("/")));
  const shareDen = Number(share.value.slice(share.value.indexOf("/") + 1));
  console.log(shareNum);
  console.log(shareDen);
  const gajj = gajjChanger();
  let finalkanaal;
  let finalMarla;
  const marlaChanger = function (gajj) {
    const gajjIntoMarla = gajj / 30.25;
    finalkanaal= gajjIntoMarla / 20;
    finalMarla = gajjIntoMarla % 20;
  };
  console.log(gajj);
  const shareValue = (gajj * shareNum) / shareDen;
  console.log(shareValue);
  solution.innerHTML = shareValue + " Gajj or " finalkanaal+ " kanal "+finalMarla+" marla";
}
