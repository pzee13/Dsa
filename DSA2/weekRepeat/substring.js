const st = (str) => (str.match(/bro/g) || []).length;

let str = 'abbrodefbropqrbro';

console.log(st(str));


