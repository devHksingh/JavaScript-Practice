// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // if (element === 5) console.log("Number is 5");
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner Loop ${j}`);
        
    }
    
}

let myArray = ["flash","batman","superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//Keyword

// break and continue

for (let index = 0; index <= 20; index++) {
    if (index === 5) {
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`value of i is ${index}`);
    
}
for (let index = 0; index <= 20; index++) {
    if (index === 5) {
        // console.log(`Detected 5`);
        continue;
    }
    // console.log(`value of i is ${index}`);
    
}


// while & do while

let index = 0
while(index <= 10){
    // console.log(index);
    index +=2
}
// let myArray = ["flash","batman","superman"]

let arr = 0 
while (arr<myArray.length) {
    // console.log(myArray[arr]);
    arr+=1

}

// do while

let score =11

do {
    // console.log(`Score is ${score}`);
    score +=1
} while (score<=10);

// Array loops


// 1. for of

const arr1 = [1,2,3,4,5,6]

for (const num of arr1) {
    // console.log(num);
}

const greeting = "Hello world"

for (const word of greeting) {
    // console.log(`Each char is ${word}`);
    
}

// Maps

const map =new Map()

map.set('IN','India')
map.set('USA','America')
map.set('fr','france')

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":-",value)
    
}

const myObj = {
    game1:'NFS',
    game2:'Spiderman'
}

// for (const [key,value] of myObj) {
//     console.log(key,":-",value)
// } IN Object forOf loop not work . but For in  loop work

const mylang ={
    js:'Javascript',
    cpp:'C++',
    RB:'rubby',
    swift:'swift by apple',
}

for (const key in mylang) {
    // console.log(mylang[key]);
    // console.log(`key ${key} : - ${mylang[key]}`);
}

//for in 
const programming = ['js','python','c++']

for (const key in programming) {
    // console.log(key); // It return index value not value
}

// FOR in loop in map

// const map =new Map()

// map.set('IN','India')
// map.set('USA','America')
// map.set('fr','france')

for (const key in map) {
    console.log(key);
} // map is not ittreable

// for each
const cooding = ['js','c++','rubby','java']

// cooding.forEach( function (lang) {
//     console.log(lang);
// } )

// cooding.forEach((lang)=>{
//     console.log(lang);
// })

function printMe(item){
    console.log(item);
}

// cooding.forEach(printMe)

cooding.forEach((item,index,Array)=>{
    //    console.log(item,index,Array);
})

// [{},{},{},...]

const myCoding = [
    {
        languageName :'Javascript',
        languageFileName:"JS"
    },
    {
        languageName :'Java',
        languageFileName:"JAVA"
    },
    {
        languageName :'PYTHON',
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
        // console.log(item);
        console.log(item.languageName);
})