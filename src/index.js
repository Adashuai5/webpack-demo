import _ from 'lodash'
import './index.less'

function component() {
  const element = document.createElement('div')
  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())

//index.js
class Animal {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

const dog = new Animal('dog')
console.log('aaa')
