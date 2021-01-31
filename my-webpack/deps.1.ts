// 请确保你的 Node 版本大于等于 14
// 请先运行 yarn 或 npm i 来安装依赖
// 然后使用 node -r ts-node/register 文件路径 来运行，
// 如果需要调试，可以加一个选项 --inspect-brk，再打开 Chrome 开发者工具，点击 Node 图标即可调试
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import { readFileSync } from "fs";
import { resolve, relative, dirname } from "path";

const rootPath = resolve(__dirname, "project_1");
type DepRelation = { [key: string]: { deps: string[]; code: string } };
const depRelation: DepRelation = {};

const index = resolve(rootPath, "index.js");
const code = readFileSync(index).toString();

const getRelativePath = (fileName: string) => {
  return relative(rootPath, fileName);
};

const getDepRelation = (fileName: string) => {
  const ast = parse(code, { sourceType: "module" });
  const key = getRelativePath(fileName);
  depRelation[key] = { deps: [], code };

  traverse(ast, {
    enter: (item) => {
      if (item.node.type === "ImportDeclaration") {
        const importDep = resolve(dirname(index), item.node.source.value);

        depRelation[key].deps.push(getRelativePath(importDep));
      }
    },
  });
};

getDepRelation(index);

console.log("depRelation", depRelation);
