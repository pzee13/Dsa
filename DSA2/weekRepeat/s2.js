function occur(str,t){
    let s = []
    let i = str.indexOf(t)

    while(i!==-1){
        s.push(i)
        i = str.indexOf(t,i+1)
    }
    return s

}

let str = 'iamaswiasinassayas'
let t ='as'

console.log(occur(str,t).length)