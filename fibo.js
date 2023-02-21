let number = 11;
if(number < 0){
    throw new Error('The Parameter');
}
else if (!Number.isInteger(number)) {
    throw new Error('The Parameter must be an Integer!');
}
else{
let n1 = 0, n2 = 1, nextCohort;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextCohort = n1 + n2;
    n1 = n2;
    n2 = nextCohort;
}
}
