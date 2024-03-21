document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
});

document.getElementById('search').addEventListener('input', function(e) {
    const term = e.target.value;
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        if (task.textContent.includes(term)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});