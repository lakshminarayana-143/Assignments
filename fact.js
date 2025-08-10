let arr=[1,2,3,4,5]
function my(acc,cur){

     
     return acc*cur;
     
}
let finalValue=arr.reduce(my);
console.log(finalValue)
