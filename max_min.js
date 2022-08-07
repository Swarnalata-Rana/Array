// HOW TO PRINT MAXIMUM AND MINIMUM NUMBER IN ARRAY ..........

// var numbers=[30,49,76,22,25,90,54,32]
// var max=0
// // var max2=0
// var min=a[i]
// for (var i=0; i<numbers.length; i++){
//     if (numbers[i]>max){
//         // max2=max
//         max=numbers[i];
//     }
   
//     if min>numbers[i]
//     }
    
// }
// console.log(max)
// console.log(min)




var a=[30,49,76,22,25,90,54,32]
i=0
min=a[i]
max=0
while (i<a.length){
    if (a[i]>max){
        max=a[i]
    }
    if (a[i]<min){
        min=a[i]
    }
    i++
}
console.log(max)
console.log(min)