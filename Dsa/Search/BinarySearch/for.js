const arr = [1,4,5,6,7,8,9]
let t=8

let r = arr.length
let l =0

let m = Math.floor(arr.length/2)

if(t>m)
{
    l= m+1
}else{
    r=m-1
}

for(let i=l;i<r;i++)
{
    if(arr[i]==t)
    console.log(i)
}

