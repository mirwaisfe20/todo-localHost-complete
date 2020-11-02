
const taskForm = document.querySelector('.task-form');
const list = document.querySelector('.task-list')
const input = document.querySelector('.input');
/* invoking the event method */

taskForm.addEventListener('submit', function(event){
/* stop the form sending the information out of the chrome window */
     event.preventDefault(); 

    
     const inputValue = input.value;

    /* checking the input is not emty */
    if(inputValue !== ''){
       
        /* create li */
        const li = document.createElement('li');
        li.classList.add('task-item')

        /* create p */
        const p = document.createElement('p');
        p.classList.add('item-text');

        p.textContent = inputValue;
      /*   p.innerText = inputValue;
        p.appendChild(document.createTextNode(inputValue)) */

        li.appendChild(p)

        /* create span */
        const span = document.createElement('span');
        span.classList.add('icons')

        li.appendChild(span)

        /* create i */
        const iFirst = document.createElement('i');
        iFirst.classList.add('far', 'fa-check-circle');

        const iSecond = document.createElement('i');
        iSecond.classList.add('far', 'fa-edit');

        const ithird = document.createElement('i');
        ithird.classList.add('far', 'fa-times-circle');


  /*   wrong    span.textContent = iFirst;
        span.textContent = iSecond;
        span.textContent = ithird; */

        span.appendChild(iFirst);
        span.appendChild(iSecond);
        span.appendChild(ithird);


        list.appendChild(li);

        input.value = '';
        

        /*  */
    } else {
        const error = document.querySelector('.error');
        error.style.display = 'flex';


        setTimeout(function(){
            error.style.display = 'none';
            const body = document.querySelector('body');

        }, 3000)
    }

    
    console.log('working')    
    
});


list.addEventListener('click', function(event){
    
    if(event.target.classList.contains('fa-check-circle')){
        event.target.parentElement.previousElementSibling.classList.toggle('done')
    } 

    if(event.target.classList.contains('fa-edit')){
        /* catch the task value from the li p element */
        const valueOfTask = event.target.parentElement.previousElementSibling.textContent;

        /* set the textcontent of input to catched value */
        input.value = valueOfTask;

        const idForItem = event.target.parentElement.parentElement;

        list.removeChild(idForItem);
        console.log(valueOfTask)
        
    }


    if(event.target.classList.contains('fa-times-circle')){
        
                const idForItem = event.target.parentElement.parentElement;
        
                list.removeChild(idForItem);
    }
})

