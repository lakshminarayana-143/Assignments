let arr =[0,1,2,3,4,5,6,7,8,9,]
console.log(arr)
let eve=arr.filter((a)=>{
    return a%2==0;
})
console.log(eve);
let p =eve.map((a)=>{
    return(a!=0 &&(a&a-1)==0)? "PT" :"NPT";
})
console.log(p)