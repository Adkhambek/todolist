let form = document.querySelector('.form')
let input = document.querySelector('.input')
let list = document.querySelector('.list')
let tasksNumber = document.querySelector('.tasks-number')
let clearAll = document.querySelector('.clear-all')
let count = document.querySelector('.count')
let arr = [];

form.addEventListener('submit', e=>{
    e.preventDefault()
    let liElement = document.createElement('li')
    liElement.classList.add('task');
    liElement.innerHTML = `<p>${input.value}</p>
    <div class="action">
        <button class="done"><span class="fas fa-check"></span></button>
        <button class="remove"><i class="fas fa-trash-alt"></i></button>
    </div>`
    arr.push(input.value)
    count.textContent = arr.length;
    list.prepend(liElement);
    let done = document.querySelector('.done')
    let remove = document.querySelector('.remove')

    done.addEventListener('click', ()=>{
        let selectingElment =  done.parentElement.parentElement;
        selectingElment.classList.add('line-through')
        done.remove();
      })

    remove.addEventListener('click', ()=>{
        let selectingElement =  done.parentElement.parentElement; 
        arr.forEach(value => {
            if (selectingElement.textContent == value) {
                console.log(value);
            }
        })
        
    })
   e.target.reset()
   

}) 





