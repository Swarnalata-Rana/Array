var array=[1,2,4,6,7]
let i=0
let even=0
var odd=0
while(i<array.length){
    if(array[i]%2==0){
        even=array[i]+even  
    }
    else{
        odd=array[i]+odd
    }
    i++
}
console.log("sum of even no:- ",even)
console.log("um of odd no",odd)
 
    