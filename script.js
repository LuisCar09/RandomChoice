const textArea = document.getElementById('textarea')
const list = document.getElementById('list')
const resetButton = document.getElementById('resetButton')
const addWord = []
let words = ''

textArea.addEventListener('keyup', (e) =>{

    words = e.target.value.trim()
    
    list.innerHTML = words.split(',') //The user writes a word. One word is separated from the other when the user writes a comma. The comma creates a split of the array
    .filter(item => item) // We filter to avoid empty spaces that can appear because of the comma.The elements(items)that appear(are returned) are only the ones whose length > 1.
    .map(word => `<li class='list-item'>${word}</li>`) //We use map in order to create tags that can be rendered later on
    .join('')//  We eliminate the commas from the array
 })

const randomNumber = (length) => {
    // console.log(length,'This is the number of the length of the array that contains list-items');
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
    
    listItem[random].classList.add('background-blue') //adding .list-item class. According to the random number given.
}
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') showColors() // if enter key was pressed, it triggers showColors() function. 
})


resetButton.addEventListener('click', () => {
    location.reload() // when button is pressed, it reloads navigator(chrome,mozilla,expolorer, etc.). 
})

