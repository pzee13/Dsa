function recfact(n){
    if( n === 0)
    {
        return 1
    }
    return n*recfact(n-1)
}

console.log(recfact(5))


//Big O = O(n) linear