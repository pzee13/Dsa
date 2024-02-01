

function mergesort(arr){
    if(arr.length<2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergesort(left),mergesort(right))

    function merge(left,right){
        sort=[]
        while(left.length && right.length){
            if(left[0]<right[0]){
                sort.push(left.shift())
            }else{
                sort.push(right.shift())
            }
        }
        return [...sort,...left,...right]
    }
}

let arr = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14]

console.log(mergesort(arr))


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class stack{
//     constructor(value){
//         const node = new node(value)
//         this.top = node
//         this.length = 1
//     }

//     push(value){
//         const node = new node(value)
//         if(this.length===0){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//         this.length++
//     }

//     reverse(){
//         const stack1 = new stack
//         return stack1.reverse()
//     }
// }


// const stack2 = new stack()