//Unary Oprator 
//1.Post Increment
//2.Pre Incremet

// 1. Post-increment
let originalValuePostIncrement: number = 1;
console.log(`Post-increment. Original Value (Addition): ${originalValuePostIncrement++}`);
console.log(`Post-increment. Updated Value (Addition): ${originalValuePostIncrement}`);

let originalValuePostDecrement: number = 10;
console.log(`Post-increment. Original Value (Subtraction): ${originalValuePostDecrement--}`);
console.log(`Post-increment. Updated Value (Subtraction): ${originalValuePostDecrement}`);

// 2. Pre-increment
let updatedValuePreIncrement: number = 5;
console.log(`Pre-increment. Updated Value (Addition): ${++updatedValuePreIncrement}`);
console.log(`Pre-increment. Updated Value Again Print (Addition): ${updatedValuePreIncrement}`);

let updatedValuePreDecrement: number = 20;
console.log(`Pre-increment. Updated Value (Subtraction): ${--updatedValuePreDecrement}`);
console.log(`Pre-increment. Updated Value Again Print (Subtraction): ${updatedValuePreDecrement}`);