let counter = 1;

const button = document.getElementById("addButton");
button.addEventListener("click", createNewTask);

function createNewTask() {
  const container = document.createElement("div");

  const checkbox = document.createElement("input");

  const label = document.createElement("label");

  const trashIcon = document.createElement("ion-icon");

  let taskName = document.getElementById("addTask").value;

  checkbox.type = "checkbox";
  checkbox.addEventListener("click", (e) => {
    checkbox.checked = !checkbox.checked;
  });
  checkbox.name = `task-${counter}`;
  checkbox.classList.add('check')

  label.innerText = `${taskName}`;

  container.classList.add('taskContainer')
  container.addEventListener("click", () => {
    container.classList.toggle("completed");
    checkbox.checked = !checkbox.checked;
  });

  trashIcon.addEventListener('click', () => {
    container.remove()
  })
 

  trashIcon.name = 'trash-outline'

  document.querySelector("main").appendChild(container);
  container.appendChild(checkbox);
  container.appendChild(label);
  container.appendChild(trashIcon)

  document.getElementById('addTask').value = ''
  counter++
}

const headerLink = document.querySelector('button')
headerLink.addEventListener('click', () => document.querySelector('header').style.display = 'none')
