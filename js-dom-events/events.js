console.log('This is separate JS file');

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick =
    function makeBlueButton() {
        document.body.style.backgroundColor = 'blue';
    }


// option 3 another
const purpleMake = document.getElementById('make-purple');
purpleMake.onclick =
    function purpleMake() {
        document.body.style.backgroundColor = 'purple';
    }

// option 4
const pickButton = document.getElementById('make-pink');
pickButton.addEventListener('click, ')

function make-pink(){
    document.body.style.backgroundColor = 'pink'
}



document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})