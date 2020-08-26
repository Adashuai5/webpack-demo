import _ from "lodash";
import "./style.css";
import Shape from "./shape.png";
import Data from "./data.xml";

function component() {
  const element = document.createElement("div");

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const pic = new Image();
  pic.src = Shape;
  element.appendChild(pic);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
