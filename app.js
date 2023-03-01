var list = document.getElementById('list')
var boucle = 0

function addTask() {
    var input = document.getElementById('inputTask')

    if ( input.value != "") {
        var newP = document.createElement('p')
    }

    newP.innerText = input.value

    list.appendChild(newP)

    newP.addEventListener('click',function(){

        if (newP.className == 'paragraph_click') {
            newP.classList.add('para')}
        
        if (newP.className == 'para') {
            newP.classList.add('paragraph_click')
        } 

        else {
            newP.classList.add('paragraph_click')
        } 
    })

    newP.addEventListener('dblclick',function(){
        newP.remove()
    })


    input = document.getElementById('inputTask').value = ''

}

function editTask(newP) {

    
    if (newP.classList === 'paragraph_click') {
        newP.classList.add('p')}
    }


