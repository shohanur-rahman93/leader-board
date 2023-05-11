const names = ['abul', 'babul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'babul', 'abul', 'abul'];

function removeDuplicates(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        console.log(name);
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicates(names);
