function power(n,e){
    if(e===0){
        return 1
    }else{
        return n * power(n,e-1)
    }
}

let s = power(2,4)

console.log(s)