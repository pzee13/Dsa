function factor(n){
    let res =1
    for(i=2;i<=n;i++)
    {
        res = res*i      //O(n+2)  so linear
    }
    return res
}

console.log(factor(5))

//Big -O = O(n)