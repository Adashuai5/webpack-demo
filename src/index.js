import _ from "lodash";
import printMe from "./print";
import "./style.css";

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

let element = component();
document.body.appendChild(element);
if (module.hot) {
  module.hot.accept("./print.js", () => {
    console.log("接收 printMe 模块");
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  });
}
