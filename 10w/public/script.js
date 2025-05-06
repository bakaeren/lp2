const list = document.getElementById('taskList');

function loadTasks() {
    fetch('/tasks')
        .then(res => res.json())
        .then(tasks => {
            list.innerHTML = '';
            tasks.forEach(t => {
                const li = document.createElement('li');
                li.textContent = t.text;
                const btn = document.createElement('button');
                btn.textContent = 'Delete';
                btn.onclick = () => deleteTask(t.id);  //IMP
                li.appendChild(btn);
                list.appendChild(li);
            });
        });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value;
    if (!text) return;
    fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    }).then(() => {
        input.value = '';
        loadTasks();
    });
}

function deleteTask(id) {
    fetch('/tasks/' + id, { method: 'DELETE' }).then(loadTasks);  //IMP
}

loadTasks(); // Initial load