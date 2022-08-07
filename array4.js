var elements = [1,2,3,4,5,6,7,8,9]
var count_odd_numbers=0;
var sum_odd_numbers=0;
var sum_even_numbers=0;
var count_even_numbers=0;
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i;
       count_even_numbers+=1;
   }
   else{
       sum_odd_numbers+=i;
       count_odd_numbers+=1;
   }
}
console.log(("sum of even & odd:-",sum_even_numbers+sum_odd_numbers)/2);
console.log("count odd no:-",count_odd_numbers);
console.log("count even no:-",count_even_numbers);
console.log("sum odd no:-",sum_odd_numbers);
console.log("sum even no:-",sum_even_numbers);