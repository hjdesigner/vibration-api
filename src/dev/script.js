import playlist from './playlist'

const buttons = document.querySelectorAll('button')
const textSupport = document.querySelector('p[data-js="support"]')

if ('vibrate' in navigator) {
    textSupport.innerHTML = 'You browser supports';

    for (button of buttons) {
      button.addEventListener('click', (e) => {
          console.log(playlist[e.target.dataset['js']])
        navigator.vibrate(playlist[e.target.dataset['js']])
      });
    }
} else {
    textSupport.innerHTML = 'You browser does not supports'
}
