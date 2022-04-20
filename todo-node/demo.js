console.log(`taking command line arg for node js program`);
process.argv.forEach((ele,index,arr)=>{
    console.log(`${ele}--->${index}`);
})
const arg=process.argv.slice(3);
console.log(arg)