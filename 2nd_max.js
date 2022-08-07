var numbers=[20,55,64,33,60,95]
max=0
max2=0
i=0
while(i<numbers.length){
    if(numbers[i]>max){
        max2=max
        max=numbers[i]

    }
    else if(max>numbers[i]>max2){
        max2=numbers[i]
    }
    i++
}
console.log(max)
console.log(max2)