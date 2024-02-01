class Minheap{
    constructor(){
        this.heap =[]
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        if(index==0){
            return 
        }
        let p = Math.floor((index-1)/2)
        if(this.heap[p]>this.heap[index]){
            this.swap(p,index)
            index = p
        }
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    remove(){
        if(this.heap.length ==0){
            return null
        }
        let removedValue = this.heap[0]
        let lastValue = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=lastValue
            this.shiftDown(0)
        }
        return removedValue
    }

    shiftDown(index){
        let sindex = index
        let lcindex = 2*index+1
        let rcindex = 2*index+2
        if(lcindex<this.heap.length && this.heap[lcindex]<this.heap[sindex]){
            sindex = lcindex
        }
        if(rcindex<this.heap.length && this.heap[rcindex]<this.heap[sindex]){
            sindex = rcindex
        }

        if(sindex!=index){
            this.swap(sindex,index)
            this.shiftDown(sindex)
        }
    }

    heapSort(arr){
      
        this.heap = [...arr]
       
        for(let i=Math.floor(this.heap.length/2)+1;i>=0;i--)
        {
            this.shiftDown(i)
        }
        return this.heap
    }
    

}

const heap = new Minheap()

heap.insert(5)
heap.insert(25)
heap.insert(1)
heap.insert(15)


console.log(heap)

console.log(heap.heapSort([4,2,1,6,7,33,12]))