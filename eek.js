let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup' , () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-regular fa-circle-check"></p>
            <i class="fa-solid fa-delete-left"></p>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task')
    }
})

tasks.appendChild('click', (e) => {
    if (e.target.classList.contains('fa-delete-left')) {
        e.target.parentElement.parentElement.remove();
    }
})

tasks.appendChild('click', function (){
    paragraph.style.textDecoration = "line-through";
})
