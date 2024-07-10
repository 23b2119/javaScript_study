/*
if (条件) {
  Trueの操作
}
*/


// 文字列に一致しているか判定する
let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let greeting = lines[0];

if (greeting == "Hello"){
    console.log("こんにちは")
} else if (greeting == "Good morning"){
    console.log("おはよう")
} else {
    console.log("はじめまして")
}
