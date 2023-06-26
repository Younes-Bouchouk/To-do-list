let list = document.getElementById('list');


function addTask() {
    var input = document.getElementById('input').value
    

    if (input == "") {
        document.getElementById('error').style.display ='block'
    }

    else{
        document.getElementById('error').style.display ='none'

        // Création de la div parent
        var newDiv = document.createElement('div')
        list.appendChild(newDiv)

        // Création de la checkbox
        var newCheck = document.createElement("img");
        newDiv.appendChild(newCheck)
        newCheck.src = 'img/unchecked.png'
        

        // Création du paragraphe contenant la tâche 
        var newTask = document.createElement('p')
        newDiv.appendChild(newTask)
        newTask.innerHTML = input

        if (color) {
            newTask.style.color = color
        }

        // Création de la fonction qui barre une tâche lorsqu'on coche la checkbox 
        var status = 'unchecked'
        newCheck.addEventListener('click', function() {

            if (status == 'unchecked') {
                status = 'checked'
                newTask.classList.add('checked')
            } else {
                status = 'unchecked'
                newTask.classList.remove('checked')
            }

            newCheck.src = `img/${status}.png`
            
        })

        // Création de la croix pour supprimer une tâche 
        var newSupr = document.createElement('p')
        newDiv.appendChild(newSupr)
        newSupr.innerHTML = 'x'

        // Création de la fonction pour supprimer une tâche 
        newSupr.addEventListener('click',function(){
            newDiv.remove()
        })

        // Suppression du texte dans l'input text 
        document.getElementById('input').value = ''

        }

    }
