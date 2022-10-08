const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todoze => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todoze}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    
    `;

    list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    // This code will pick the value from the text field and 
    // remove all spaces between and after the text
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
   
});
//delete todos
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete'))  {
        //the remove method is used to remove an element from dom
        e.target.parentElement.remove();
    }
});

const filterTodos = (terma) => {
    // console.log(terma);
    //converting an html collection into an array
    Array.from(list.children)   
        .filter((todo) => !git o.textContent.toLowerCase().includes(terma))   // includes is used to compare string values, filtering an array with a condition of the ones that are not
        .forEach((todo) => todo.classList.add('filtered'));

        //This used to now capture only the array element that contains the text because by now all the other array element
        // that has any character of the text would have been filtered
    Array.from(list.children) 
        .filter((todo) => todo.textContent.toLowerCase().includes(terma))   
        .forEach((todo) => todo.classList.remove('filtered'));

    };   

// using the search form above
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    // console.log(term);
    filterTodos(term);
});



