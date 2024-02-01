function czero(n){
    if(n===0){
        return 1
    }else if(n<10){
        return 0
    }else{
        return (n%10===0?1:0) + czero(Math.floor(n/10))
    }
}


console.log(czero(1010100))