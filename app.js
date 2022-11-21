// On selectionne les boutons
const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

// Responsive JS
if(window.matchMedia("(min-width: 850px)").matches){
// pour chaque click sur miniature, on affiche l'image correspondante en grand
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
            modaleEquipement.classList.add('active-modale');
        })
    })
// au click on active ou désactive la modale
    modaleEquipement.addEventListener('click', () => {
        modaleEquipement.classList.remove('active-modale');
    })
}

// Animation Navbar

const nav = document.querySelector('.anim-nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 30){
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})