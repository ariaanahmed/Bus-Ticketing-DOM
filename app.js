function toggle() {
    const smnav = document.getElementById('sm-nav-ul');

    if(smnav.classList.contains('hidden')) {
        smnav.classList.remove('hidden');
    } else {
        smnav.classList.add('hidden');
    }
}