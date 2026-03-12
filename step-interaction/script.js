// Texte à afficher pour chaque étape
const texts = {
  1: {
    title: 'Étape 1',
    text: "Description de l'étape 1. Explique ici la première notion."
  },
  2: {
    title: 'Étape 2',
    text: "Description de l'étape 2. Explique ici la deuxième notion."
  },
  3: {
    title: 'Étape 3',
    text: "Description de l'étape 3. Explique ici la troisième notion."
  },
  4: {
    title: 'Étape 4',
    text: "Description de l'étape 4. Explique ici la quatrième notion."
  }
}

// Sélection des éléments du DOM
const buttons = document.querySelectorAll('.btn')
const panel = document.getElementById('panel')
const scene = document.getElementById('scene')
const title = document.getElementById('step-title')
const text = document.getElementById('step-text')
const closeBtn = document.getElementById('close-btn')

// Ferme le panneau et remet l'image en place
closeBtn.addEventListener('click', () => {
  panel.classList.remove('visible')
  scene.classList.remove('offset')
})

// Écoute du clic sur chaque bouton
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const step = btn.dataset.step // récupère "1", "2", "3" ou "4"
    
    // Met à jour le texte du panneau
    title.textContent = texts[step].title
    text.textContent = texts[step].text

    // Affiche le panneau et décale l'image
    panel.classList.add('visible')
    scene.classList.add('offset')
  })
})
