const textArea = document.getElementById('textarea')
const list = document.getElementById('list')
const resetButton = document.getElementById('resetButton')
const addWord = []
let words = ''

textArea.addEventListener('keyup', (e) =>{

    words = e.target.value.trim()
    
    list.innerHTML = words.split(',') //Al momento del usario escribir una , creara el split
    .filter(item => item) //filtramos para eviar que la colocar ',' no se haga el espacio ('')empty, solo devuelve elementos que su longitud > 1
    .map(word => `<li class='list-item'>${word}</li>`) //con map estamos creando los tag para luego renderizar.
    .join('')// eliminando las comas ',' del array, next time i will type this in english sorry.
 })

const randomNumber = (length) => {
    // console.log(length,'Esto es el numero de la longitud del array con los list-item, debe coincidir con la linea 23');
    return Math.floor(Math.random() * length)
}

const showColors = () => {

    const interval = setInterval(changeBackground,50) //every 50ms it will call changebackground.
    
    setTimeout(() => {
        clearInterval(interval) // clean the interval 
    }, 3000);
    
}
const changeBackground = () =>{
    const listItem = document.querySelectorAll('.list-item') // getting all tags with .list-item class.
    
    listItem.forEach(item => item.classList.remove('background-blue')) //removing class whether it has it or not.
    
    const random = randomNumber(listItem.length) //getting random number
    
    listItem[random].classList.add('background-blue') //adding .list-item class. According random number given.
}
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') showColors() // if enter key was pressed, it triggers showColors() function. 
})


resetButton.addEventListener('click', () => {
    location.reload() // when button is pressed, it reloads navigator(chrome,mazilla,expolorer, etc.). 
})

