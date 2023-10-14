const firstColor = document.getElementById('firstColor');
const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const fourthColor = document.getElementById('fourthColor');
const fivthColor = document.getElementById('fivthColor');
const animatedField = document.getElementById('animatedField');
const firstColorsContainer = document.getElementById('firstColorsContainer');
const secondColorsContainer = document.getElementById('secondColorsContainer');
const thirdColorsContainer = document.getElementById('thirdColorsContainer');
const fourthColorsContainer = document.getElementById('fourthColorsContainer');
const fivthColorsContainer = document.getElementById('fivthColorsContainer');

firstColor.addEventListener('click', function() {
    resetBorder([secondColorsContainer, thirdColorsContainer, fourthColorsContainer, fivthColorsContainer]);
    firstColorsContainer.style.border = '1px solid #06446b';
    animatedField.style.backgroundColor = '#057665';
});
secondColor.addEventListener('click', function() {
    resetBorder([firstColorsContainer, thirdColorsContainer, fourthColorsContainer, fivthColorsContainer]);
    secondColorsContainer.style.border = '1px solid #06446b';
    animatedField.style.backgroundColor = 'rgba(210, 168, 18, 0.949)';
});
thirdColor.addEventListener('click', function() {
    resetBorder([firstColorsContainer, secondColorsContainer, fourthColorsContainer, fivthColorsContainer]);
    thirdColorsContainer.style.border = '1px solid #06446b';
    animatedField.style.backgroundColor = '#cd0ccd';
});
fourthColor.addEventListener('click', function() {
    resetBorder([firstColorsContainer, secondColorsContainer, thirdColorsContainer, fivthColorsContainer]);
    fourthColorsContainer.style.border = '1px solid #06446b';
    animatedField.style.backgroundColor = '#ab07e2';
});
fivthColor.addEventListener('click', function() {
    resetBorder([firstColorsContainer, secondColorsContainer, thirdColorsContainer, fourthColorsContainer]);
    fivthColorsContainer.style.border = '1px solid #06446b';
    animatedField.style.backgroundColor = '#6140ad';
});

function resetBorder(elements) {
    for(let i = 0; i < elements.length; i++) {
        elements[i].style.border = '0px solid #1e0344';
    }
}