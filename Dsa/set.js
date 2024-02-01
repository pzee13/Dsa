const set = new Set([1,3,4])
set.add(5)
console.log(set.has(5))
for(let item of set)
{
    console.log(item)
}