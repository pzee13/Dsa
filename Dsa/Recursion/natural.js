function nature(n){
    if(n<1)
    {
        return 0
    }
    else{
        return n + nature(n-1)
    }
}


console.log(nature(5))