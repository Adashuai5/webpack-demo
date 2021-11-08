import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // lodash 是由当前 script 脚本 import 进来的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
