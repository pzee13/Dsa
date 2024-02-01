function palind(str){
    if(str.length<=1){
        return true
    }else if(str[0]===str[str.length-1]){
        return palind(str.slice(1,-1))
    }else{
        return false
    }
}

let str = 'jaaj'

console.log(palind(str))