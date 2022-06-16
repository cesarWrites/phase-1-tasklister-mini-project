document.addEventListener("DOMContentLoaded", () => {
    // your code here
    //get all DOM elements
    const taskForm = document.getElementById('create-task-form')
    const taskDescription = document.getElementById('new-task-description')
    taskForm.className = 'form-style';
    
    taskForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const newTask = document.createElement("li");
      newTask.innerText = taskDescription.value;

     function removeElement(){
      const btn = document.createElement('button')
      btn.innerText = ' X';
      btn.style.backgroundColor = 'grey';
      btn.className = 'btn-style';
      newTask.appendChild(btn);
      btn.addEventListener('click', (e) =>{
        newTask.remove()
      })
     }
      appendNewTask(newTask);
      removeElement();
      e.target.reset()
    })
  });
  
  const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  }