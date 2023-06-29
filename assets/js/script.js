const mode = document.getElementById('mode_icon');


mode.addEventListener('click', () => { 
    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')) { //if have moon icon
    mode.classList.remove('fa-moon'); //remove moon icon
    mode.classList.add('fa-sun'); // add sun icon
    form.classList.add('dark'); // add dark effect
    return;    

}
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
    mode.classList.add('fa-moon');
    
});




