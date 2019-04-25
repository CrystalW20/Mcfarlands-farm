let selection = document.querySelectorAll('.selection')[0];



function playSound(button) {
    document.getElementById(button).play();
    return button;
}

selection.addEventListener('click', event => {
        return playSound(event.target.textContent);

});



