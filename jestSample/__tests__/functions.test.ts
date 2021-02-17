// todo: ここに単体テストを書いてみましょう！
import { sumOfArray, asyncSumOfArray } from "../functions";
import { NameApiService } from "../nameApiService";

jest.mock("../util/index");
jest.mock("../nameApiService");


// asyncSumOfArraySometimesZero,
// getFirstNameThrowIfLong,
// const sum1 = require('./functions.ts');

describe('sumOfArray OK', () => {
  test('1+1=2', () => {
    expect(sumOfArray([1,1])).toBe(2);
  });
});
describe('sumOfArray empty NG', () => {
  test('empty', () => {
    expect(sumOfArray([])).toThrow('NGです');
  });
});
// describe('sumOfArray strinh NG', () => {
//   test('string', () => {
//     expect(sumOfArray(["abc"])).toThrow();
//   });
// });
describe('asyncSumOfArray OK', () => {
  test('1+1=2', () => {
    expect(asyncSumOfArray([1,1])).toBe(2);
  });
});
// describe('asyncSumOfArray OK', () => {
//   test('OK', () => {
//     var list: Array<number> = new Array(3);
//     list[0] = [1, 1];
//     list[1] = [2, 2];
//     //let listB: Array<number> = {[1, 1],[2, 2]};
//     expect(asyncSumOfArray(list)).toBe([2, 4]);
//   });
// });
