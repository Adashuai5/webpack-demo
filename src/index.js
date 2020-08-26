import _ from "lodash";
import printMe from "./print";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  const btn = document.createElement("button");

  btn.innerHTML = "点击查看 log";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
