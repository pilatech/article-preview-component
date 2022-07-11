const activateShare = document.getElementById('activate-share')
const deactivateShare = document.getElementById('deactivate-share')

const shareWidget = document.getElementById('share-widget')

activateShare.addEventListener('click', () => {
 shareWidget.classList.add('active')
 deactivateShare.style.visibility = 'visible'
 activateShare.style.visibility = 'hidden'
})

deactivateShare.addEventListener('click', () => {
 shareWidget.classList.remove('active')
 deactivateShare.style.visibility = 'hidden'
 activateShare.style.visibility = 'visible'
})