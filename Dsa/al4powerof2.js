function power2(n){
    if(n<1)
    {
        return false
    }
    while(n>1) {
        if(n%2!==0){

            return false        // in this power of we change the input by 2 because we want check whether the 
                                // the the given number is a power of 2
        }
        n=n/2
    }
    return true
}

// console.log(power2(32))


//Big-O = O(log(n))


///bit wise power of 2


function powerof2bit(n){
    if(n<1)
    {
        return false
    }
    return (n & (n-1))===0      // big-O = O(1)   constant
}

console.log(powerof2bit(3))