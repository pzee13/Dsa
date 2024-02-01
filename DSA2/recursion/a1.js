function sum(n){
    if(n<10){
        return n
    }else{
        return n%10 + sum(Math.floor(n/10))
    }
}

let s = sum(220)

console.log(s)