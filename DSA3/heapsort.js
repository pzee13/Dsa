class Maxheap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        if(index==0){
            return 
        }
        let p = (index-1)/2
        if(this.heap[p]<this.heap[index]){
            this.swap(p,index)
            this.heapifyUp(p)
        }
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    shiftdown(index){
        let sindex = index
        let lcindex = 2*index+1
        let rcindex = 2*index+2
        if(lcindex<this.heap.length && this.heap[lcindex]>this.heap[sindex]){
         sindex = lcindex
        }
        if(rcindex<this.heap.length && this.heap[rcindex]>this.heap[sindex]){
         sindex = rcindex
        }
 
        if(sindex!=index){
         this.swap(sindex,index)
         this.shiftdown(sindex)
        }
     }

     remove(){
        if(this.heap.length==0){
            return null
        }
        let rvalue = this.heap[0]
        let lastValue = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=lastValue
            this.shiftdown(0)
        }
        return rvalue
     }

     buildArray(arr){
        this.heap = [...arr]
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.shiftdown(i)
        }
        return this.heap
    }

    heapsort(){
        let arr1=[]
        while(this.heap.length>0){
                let cur = this.remove()
                arr1.push(cur)
        }
        return arr1
    }
}

const heap = new Maxheap()

heap.insert(30)
heap.insert(20)
heap.insert(10)
heap.insert(21)

let arr = [3,1,5,4,8,6,9,7]
console.log(heap.heapsort(arr))