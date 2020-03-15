import { checkMathes, creationOfString, flatten, calc } from "./tasks-for-interview";

function writeRow(text) {
  delemiterInsert();
  document.querySelector(".errors").append(text);
}

function testCaller(testName, fn, expect, ...params) {
  writeRow(`${testName} test: `);
  const start = performance.now();
  const result = fn(...params);
  JSON.stringify(expect) !== JSON.stringify(result) ? errorLog() : successLog();
  const end = performance.now();
  writeRow(`total time: ${end - start}`);
}

function successLog() {
  const element = document.createElement("span");
  element.className = "success";
  element.append(`success`);
  document.querySelector(".errors").appendChild(element);
}

function errorLog() {
  const element = document.createElement("span");
  element.className = "error";
  element.append(`failed`);
  document.querySelector(".errors").appendChild(element);
}

function delemiterInsert() {
  const element = document.createElement("div");
  element.className = "delemiter";
  document.querySelector(".errors").appendChild(element);
}

export function testForCheckMatches() {
  writeRow("checkMathes");
  testCaller("Case 1", checkMathes, true, [1, 2, 3, 4, 5], [4, 5, 6, 7, 8]);
  testCaller("Case 2", checkMathes, false, [1, 2, 3, 4, 5], [7, 8, 9, 10, 11]);

  const source = new Array(10000).fill(0);
  const left = source.map((_, i) => i * i);
  const right = source.map((_, i) => i * 2);

  testCaller("checkMathes performance", checkMathes, true, left, right);
}

export function testForCreationOfString() {
  writeRow("creationOfString");
  testCaller("Case 1", creationOfString, true, "молоко", "кол");
  testCaller("Case 2", creationOfString, false, "молоко", "моно");
}

export function testForFlatten() {
  writeRow("flatten");
  testCaller(
    "Case 1",
    flatten,
    [1, 2, 3, 3, 4, 5, 12, 13],
    [[[1, 2, 3], [3, 4, 5]], [12, 13]]
  );

  testCaller(
    "Case 2",
    flatten,
    [1, 4, 2, 3, 3, 4, 5, 13, 12],
    [1, [4, 2, 3], [3, 4, 5], [[13], 12]]
  );
}

export function testForCalc() {
  writeRow("calc test: ");
  try {
    if (
      calc(2)(2)(3)((x, y) => x + y) === 7 &&
      calc(1)(5)(2)((x, y) => x * y) === 10 &&
      calc(16)(8)((x, y) => x / y) === 2
    ) {
      successLog();
      return;
    }
    errorLog();
  } catch (e) {
    errorLog();
  }
}
