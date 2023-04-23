let str="madam"
let N=5

let a=""
  for(let i=N-1;i>0;i--){
      a=a+str[i];
     
  }
  if (str==a){
      console.log("Yes");
  }
  else{
      console.log("No")
  }
}