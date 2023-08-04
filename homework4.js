// Implement following methods
// string - includes, indexOf, replace, replaceAll
// array - includes, indexOf, slice

// 1. str includes 

 function includes(str, value) {
    for (let i = 0; i < str.length; i++) {
       if (str[i] === value) {
        return true
       }
    }
    return false
}

console.log(includes('abcd', 's'))



//2. str indexOf

function indexOf(str, element, from) {
    for (let i = from; i < str.length; i++) {
        if (str[i] === element) {
            return i 
        }
        
    }
    return -1
}

console.log(indexOf('abcdaer', 'a', 1))



// 3. arr includes

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === value) {
        return true
       }
    }
    return false
}

console.log(includes([1,2,3,4,5,6,8], 7))



// 4. arr indexOf

function indexOf(arr, element, from) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === element) {
            return i 
        }
        
    }
    return -1
}

console.log(indexOf([1,2,3,4,1,5,6], 1, 1))

// 5. replace

function strReplace(str,str1,str2){
    let res =""
    let res1=""
    let res2=""
   let index= str.indexOf(str1)
    for(let i=0;i<index;i++){
        res1+=str[i]
    }
    for(let i=(index+str1.length);i<str.length;i++){
        res2+=str[i]
    }
   return res=res1+str2+" "+res2
}
console.log(strReplace("how is your dad, and how is your mom","how","who"))


// 6. replaceAll
function strReplaceAll(str,str1,str2){
    return str.split(str1).join(str2)
}
console.log(strReplaceAll("what are you doing, are you reading?","you","we"))


// 7. slice
function arrSlice(arr,from,before){
    let res =[]
    for(let i=from;i<before;i++){
        res.push(arr[i])
    }
    return res
}
console.log(arrSlice([2, 5, 8, 6, 4, 3, 9],2,6))



