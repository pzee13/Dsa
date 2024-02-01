function recfib(n){
    if(n<=2)
    {
        return [0,1]
    }
    let fib = recfib(n-1)
        fib.push(fib[fib.length-1] + fib[fib.length-2])
        return fib
}
 console.log(recfib(8));


//Big-O = O(n)

