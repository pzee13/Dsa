class Maxheap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    shiftUp(index){
        if(index==0){
            return
        }
        let p = Math.floor((index-1)/2)
        if(this.heap[p]<this.heap[index]){
            this.swap(p,index)
            index = p
        }
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
        this.shiftdown(0)
       }
    }

    remove(){
        if(this.length===0){
            return null
        }
        let removedValue = this.heap[0]
        let lastvalue = this.heap.pop()
        if(this.length>0){
            this.heap[0]=lastvalue
            this.shiftdown(0)
        }
        return removedValue
    }

    buildArray(arr){
        this.heap = [...arr]
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.shiftdown(i)
        }
    }

}

const l = new Maxheap()

l.insert(5)
l.insert(1)
l.insert(3)
l.insert(4)
l.remove()
console.log(l)