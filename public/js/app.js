console.log('client side js')

const tryButtonForm = document.querySelector('form')

tryButtonForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log('u clicked on the button')
})