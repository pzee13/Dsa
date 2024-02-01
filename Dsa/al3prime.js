function prime(n){
    if(n<2)
        {
            return false
        }
        
    for(let i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
            {
                return false           // when we change n to Math.sqrt(n) then time 
                                        //complexity change from O(n)=>O(sqrt(n))
            }else{
                return true
            }
        }
    }


console.log(prime(19))

//Big-O - O(sqrt(n))