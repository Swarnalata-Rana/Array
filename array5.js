var elements = [1,2,3,4,5,6,7,8,9];
var sum_even_number=0;
var sum_odd_number=0;
for (var i of elements){
    if (i%2===0){
        sum_even_number+=i;
    }
    else{
        sum_odd_number+=i;
    }
}
console.log("even no:-",sum_even_number);
console.log("even no:-",sum_odd_number);