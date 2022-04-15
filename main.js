function findUniq(arr) {
 let unique_values = [...new Set(arr)];
  
  
 function checkChar(arrNumber,num){
    let count = 0;
   for(let i = 0 ; i < arr.length ; i++ ){
    if(num === arr[i]){count = count + 1 }
   }
   return count
 }
  
  
  let result = [];
  for(let i = 0 ; i < unique_values.length ; i++ ){
  if(checkChar(arr , unique_values[i]) == 1 ){
    result.push(unique_values[i])
  }
    }
  return result.reduce((acc,c)=> acc+c,0)
  
}

