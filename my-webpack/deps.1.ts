// 请确保你的 Node 版本大于等于 14
// 请先运行 yarn 或 npm i 来安装依赖
// 然后使用 node -r ts-node/register 文件路径 来运行，
// 如果需要调试，可以加一个选项 --inspect-brk，再打开 Chrome 开发者工具，点击 Node 图标即可调试
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import { readFileSync } from 'fs'
import { resolve, relative, dirname } from 'path'

const rootPath = resolve(__dirname, 'project_3')
type DepRelation = { [key: string]: { deps: string[]; code: string } }
const depRelation: DepRelation = {}

const getRelativePath = (fileName: string) => {
  return relative(rootPath, fileName)
}

const getDepRelation = (fileName: string) => {
  const key = getRelativePath(fileName)

  if (Object.keys(depRelation).includes(key)) {
    console.warn(`duplicated dependency: ${key}`) // 注意，重复依赖不一定是循环依赖
    return
  }

  const filePath = resolve(rootPath, fileName)
  const code = readFileSync(filePath).toString()
  const ast = parse(code, { sourceType: 'module' })
  depRelation[key] = { deps: [], code }

  traverse(ast, {
    enter: (item) => {
      if (item.node.type === 'ImportDeclaration') {
        const importDep = resolve(dirname(filePath), item.node.source.value)

        depRelation[key].deps.push(getRelativePath(importDep))
        getDepRelation(importDep)
      }
    },
  })
}

getDepRelation('index.js')

console.log('depRelation', depRelation)
