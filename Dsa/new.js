function recur(t){
    return search()
}

function search(t,l,r){
    let arr = [1,2,3,4,5]
    l=0
    r=arr.length-1

    let m = Math.floor((l+r)/2)

    if(t>m)
    {
        l = m+1
    }else{
        r=m-1
    }

    return search(arr,t,l,m)
}


console.log(recur(4))


   insertValueindex(value,index)
   {
    if(index<0||index>size){
        return 
    }
    if(index===0){
        this.head.value = value
    }
    else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++)
        {
            prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        size++
    }
   }