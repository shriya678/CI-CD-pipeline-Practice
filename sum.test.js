import sum from './sum.js'

describe("test for sum fnx",()=>{
    test("adds 2+2 equals 4", ()=>{
    expect(sum(2,2)).toBe(4);

});
   test("adds 2-2 equals 4", ()=>{
    expect(sum(2,2)).toBe(0);

});

})
