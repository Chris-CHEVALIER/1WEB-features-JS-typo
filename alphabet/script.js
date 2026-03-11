// On récupère tous les <span> dans la grille
const caracters = document.querySelectorAll('#grid span')

// On récupère la zone d'affichage à droite
const displayBlock = document.getElementById('affichage')

// On parcourt chaque case
caracters.forEach(caracter => {
  // Au clic, on affiche la lettre dans le conteneur de droite
  caracter.addEventListener('click', () => {
    displayBlock.textContent = caracter.textContent
  })
})
