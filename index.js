//Function #1: Array Slice

const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood=foods.slice(1,4)
document.write(modifiedFood+"<br>")



//Function #2: Array Splice

const foods1 = ["pizza", "burger", "fingerchips", "donuts", "springroll"]
foods1.splice(2, 0, "apple", "banana");
document.write(foods1+"<br>");


// Function #3: Filter


const arr= [12,324,213,4,2,3,45,4234];
let a=arr.filter((value)=>{
    if(value%2==0)
    return value;
})
document.write(a+"<br>")



// Function #4: Reject

let arr2 = [12,324,213,4,2,3,45,4234]

function isNotEven(data){
    let count = 0
    for(let i=2;i<data;i++){
        if(data%i==0){
            return true
        }
    }
    return false
}

let notprime = arr2.filter(isNotEven)

document.write(notprime+"<br><br>")




// Function #5: Map

const arr = [11, 34, 20, 5, 53, 16];
let a=arr.map((value,index,Array)=>{
    return value*value
})
document.write(a+"<br>")


// Function #6: Reduce

let arr=[2,3,5,10]
let ans=arr.reduce((x,y)=>{
    return x*y
})
document.write(ans)
