let a=25
let count=1
for(let i=0;i<a.length;i++){
if(a%i==0){
count++
}
}
if(count==2){
console.log("prime")
}
else{
console.log("false")
}

