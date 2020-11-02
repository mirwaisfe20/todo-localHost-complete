/***************** DOM Elements ******************/
const taskForm = document.querySelector('.task-form');
const input = document.querySelector('.input');
const list = document.querySelector('.task-list');
const btnReset = document.querySelector('.btn-reset');

/* last thing */
loadEventListeners();

/***************** Utilities ******************/

/* create Li inside ul */
function createLIElement(element){
    const code = `
    <li class="task-item">
        <p class="item-text">${element}</p>
        <span class="icons">
            <i class="far fa-check-circle toggle-done"></i>
            <i class="far fa-edit edit"></i>
            <i class="far fa-times-circle delete"></i>
        </span>
    </li> 
    `;
    /* give me back whatever inside code variable */
    return code;
}


function loadDataFromLocalStorage(){

        /* * * * * * * *  DATA*/
    /* initializng the data structure */
    let data;
    
    /* check to see if there is a key full with data */
    if(localStorage.getItem('todos')){
        
        /* converting from string to javascript object */
        data = JSON.parse(localStorage.getItem('todos'));
    } else {
        data = [];
    }

    return data;

}


/***************** Events ******************/
function loadEventListeners(){
    taskForm.addEventListener('submit', addTodo);
    list.addEventListener('click', changeTodo);
    btnReset.addEventListener('click', clearTasks);
    document.addEventListener('DOMContentLoaded', paintTheUI);
}



/***************** Functions ******************/

/* add todo to the UI */
function addTodo(event){
/* loading the data from database */
    const data = loadDataFromLocalStorage()
    /* add the task in the data struture */
    data.push(input.value)

    /* save data back to local storage */
    localStorage.setItem('todos', JSON.stringify(data))


    /* dont do like what you are doing all the time(Default) */
    event.preventDefault();

    /* check if the input is empty */
    if(input.value == ''){
        alert('input field is required!');
    } else {
    /* initialing the li element out */
    let htmlCode = createLIElement(input.value);

    /* add li inside ul */
    list.innerHTML = list.innerHTML + htmlCode;
    }

    
    /* clear the input box */
    input.value = '';


}


/* change todo in the UI */

function changeTodo(event){
    /* check if  my target that i am clicking is the toggle-done */
    if(event.target.classList.contains('toggle-done')){
        event.target.parentElement.previousElementSibling.classList.toggle('done')
    }

     /* check if  my target that i am clicking is the edit */
     if(event.target.classList.contains('edit')){
         /* id for specific task */
        const idForItem = event.target.parentElement.parentElement;

        /* save the text value of li insdie a variable before deleting the whole li */
        const text = event.target.parentElement.previousElementSibling.textContent;

        input.value = text;

         /* call the parent to remove a child from it */
         list.removeChild(idForItem)
    }

    /* check if my target that i am clicking has class of delete */
    if(event.target.classList.contains('delete')){

        /********************************DELETING FROM DOM  */
        /* id for specific task */
        const idForItem = event.target.parentElement.parentElement;
          /* call the parent to remove a child from it */
         list.removeChild(idForItem)

         /********************************DELETING FROM lOCALSTORAGE  */
        
         /* initializng the data structure */
         /* loading the data from database */
            const data = loadDataFromLocalStorage()
            
            const searchKey = event.target.parentElement.previousElementSibling.textContent;

            /* looping thought data to search for element */
            for(let i = 0; i < data.length; i++){
                if(data[i] === searchKey){
                    console.log(data[i]);
                    /* call splice method on the data structure */
                    data.splice(i, 1)
                }
            }

            /* Save the changes to localstorage */
            localStorage.setItem('todos', JSON.stringify(data));
    }


}


/* clear the task */

function clearTasks(){
    /* delete alll the li from ul In The DOM */
    list.innerHTML = '';
}


/* paint the element into DOM */

function paintTheUI(){

    /* initializng the data structure */
    /* loading the data from database */
    const data = loadDataFromLocalStorage()

    /* * * * * * * *  UI*/

    let result = '';
    /* loop over the data to decide and paint the tasks in DOM */
    for(let i = 0; i < data.length; i++){
    
        /* htmlCode += createLIElement(data[i]) */
        result = result + createLIElement(data[i])
    }

    list.innerHTML = result;


    /* append the generated html code inside the ul */

}


