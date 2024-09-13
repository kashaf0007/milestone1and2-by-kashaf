var hiddenbutton = document.getElementById('hidden-skills');
var skills = document.getElementById('skills');
hiddenbutton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
