const hiddenbutton = document.getElementById('hidden-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;
hiddenbutton.addEventListener('click', ()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }else{
        skills.style.display ='none'
    }
})