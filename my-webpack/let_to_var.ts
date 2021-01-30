import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";

const code = `let a = 'let';var b = 2;`;
const ast = parse(code, { sourceType: "module" });

console.log("ast", ast);
