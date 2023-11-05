let input = document.getElementById('input');
let button = document.getElementById('addNote');

let todos = [];
let todoJson = JSON.stringify(todos);

localStorage.setItem('todos', todoJson);
console.log(localStorage);
let alltodo = localStorage.getItem('todos');
console.log(alltodo);
function showTodo() {
  document.getElementById('todobox').innerHTML = todos
    .map(
      (todo) =>
        `
<div class="singletodo">
<input  type="checkbox" />
<p>${todo.content}</p>
</div>

`
    )
    .join('');
}

showTodo();

function addTodo() {
  button.addEventListener('click', function () {
    todos.push({
      content: this.value,
      isCompleted: false,
    });
    console.log(this.value)
  });
  return todos;
}
console.log(addTodo());
