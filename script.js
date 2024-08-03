const textArea = document.getElementById('textarea')
const list = document.getElementById('list')
const addWord = []

let words = ''

textArea.addEventListener('keyup', (e) =>{
    
    // Obtenemos el valor del textArea
    words = e.target.value.trim()
    list.innerHTML = words.split(',').map(word => `<li class='list-item'>${word}</li>`).join('')
})


