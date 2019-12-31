const actions = {
  modal() {
    const cards = document.querySelectorAll('.card')
    const modalOverlay = document.querySelector('.modal-overlay')
    const closeModal = document.querySelector('.close-modal a')
    const modal = document.querySelector('.modal')
  
    for (let card of cards) {
      card.querySelector('img').addEventListener('click', () => {
        modal.querySelector('img').src = card.querySelector('img').src
        modal.querySelector('h3').innerHTML = card.querySelector('h6').innerHTML
        modal.querySelector('p').innerHTML = card.querySelector('p').innerHTML
  
        modalOverlay.classList.add('active')
      })
    }
  
    closeModal.addEventListener('click', () => modalOverlay.classList.remove('active'))
  },
  currentPage() {
    const currentPage = location.pathname
    const navItems = document.querySelectorAll('.nav-grid a')

    for (item of navItems) {
      if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
      }
    }

    if (currentPage.includes(item.getAttribute('href')) == '/recipes'.includes(item.getAttribute('href'))) {
      actions.modal()
    }
  }
}

actions.currentPage()