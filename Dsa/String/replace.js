function replaceAlphabets(str, n) {
    return str.split('').map(char => {
            if (/[a-zA-Z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                const newCharCode = (char.charCodeAt(0) - baseCharCode + n) % 26 + baseCharCode;
                return String.fromCharCode(newCharCode);
            } else {
                return char;
            }
        }).join('');
}

const originalString = 'Hai Aswin';
const replacedString = replaceAlphabets(originalString, 1);

console.log(`Original String: ${originalString}`);
console.log(`Replaced String: ${replacedString}`);
