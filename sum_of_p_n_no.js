// how much posetive and nagetive number in this array.
// var array=[1,2,4,-6,7,-9,6]
// i=0
// c=0
// positive=0
// nagetive=0
// while(i<array.length){
//     if(array[i]>0){
//         positive++
//     }
//     else{
//         nagetive++
//     }
//     i++
// }
// console.log(positive)
// console.log(nagetive)

// sum of posetive and nagetive numbers in this array.
var array=[1,2,4,-6,7,-9,6]
i=0
c=0
sum_positive=0
sum_nagetive=0
while(i<array.length){
    if(array[i]>0){
        sum_positive=array[i]+sum_positive
    }
    else{
        sum_nagetive=array[i]+sum_nagetive
    }
    i++
}
console.log("sum of total posetive no:-",sum_positive)
console.log("sum of total nagetive no:-",sum_nagetive)