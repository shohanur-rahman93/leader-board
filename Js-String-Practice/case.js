const userName = 'BlackPink';
const userInput = 'Blackpink';
console.log(userName.toLowerCase());
console.log(userInput.toLowerCase())
console.log(userName.toLocaleLowerCase())
if(userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()){
    console.log('valid user')
}
else{
    console.log('invalid user')
}