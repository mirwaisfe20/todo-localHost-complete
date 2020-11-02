/* select the elements from the DOM */
const taskForm = document.querySelector('.task-form');
const list = document.querySelector('.task-list')
const input = document.querySelector('.input');
const resetBtn = document.querySelector('.btn-reset');

/* Add and event listners on the selected element */



/* form event */
taskForm.addEventListener('submit', function(event){
    
    
    /* control flow: if else */
    if(input.value == ''){
        alert('you need a text to continue')
    } else{


    /* load the data from Local Storage */

    let todos;

    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'))
    } else {
        todos = [];
    }

    /* add task inside todos array */
    
    todos.push(input.value)

    /* save the data in local storage */
    localStorage.setItem('todos', JSON.stringify(todos));

   

    /* loop through the todos */
    
  
        
        const htmlCode =  `
    
        <li class="task-item">
            <p class="item-text">${input.value}</p>
            <span class="icons">
                <i class="far fa-check-circle"></i>
                <i class="far fa-edit"></i>
                <i class="far fa-times-circle"></i>
            </span>
        </li> 
        
                `;
    

        /* li code to add inside the ul */


        
                    /* we are not assigning
                       we want appendinng
                    */
                
        /* list.innerHTML += htmlCode; */
        list.innerHTML =   list.innerHTML + htmlCode;

        input.value = '';
    }

    





/* list event */

    list.addEventListener('click', function(event){
        console.log(event.target)
        if(event.target.classList.contains('fa-check-circle')){
            event.target.parentElement.previousElementSibling.classList.toggle('done')
        }

        if(event.target.classList.contains('fa-edit')){
            /* save the value of li */
            const text = event.target.parentElement.previousElementSibling.textContent;
            input.value = text;
            /* deleting the li from list */
            list.removeChild(event.target.parentElement.parentElement)
        }

        if(event.target.classList.contains('fa-times-circle')){
            console.log(event.target);

            /* deleting the li from list */
            list.removeChild(event.target.parentElement.parentElement)

        }
    })




    event.preventDefault();


})



/* deleting the code inside the ul */

resetBtn.addEventListener('click', function(){
    list.innerHTML = '';
})


document.addEventListener('DOMContentLoaded', function(){
    

    /* load the data from Local Storage */

    let todos;

    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'))
    } else {
        todos = [];
    }




    let htmlCode;

    /* loop through the todos */
    
    for(let i = 0; i < todos.length; i++){
        
        htmlCode = htmlCode + `
    
        <li class="task-item">
            <p class="item-text">${todos[i]}</p>
            <span class="icons">
                <i class="far fa-check-circle"></i>
                <i class="far fa-edit"></i>
                <i class="far fa-times-circle"></i>
            </span>
        </li> 
        
                `;
    }

    list.innerHTML = htmlCode
})



