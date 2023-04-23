let str="madam"
let a=""
  for(let i=str.length-1;i>=0;i--){
      a=a+str[i];  
  }
  if (str==a){
      console.log("Yes");
  }
  else{
      console.log("No")
  }
