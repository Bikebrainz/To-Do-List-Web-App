function addTask() {
    let input = document.getElementById('task-input');
    let task = input.value;
    if (task) {
        let listItem = document.createElement('li');
        listItem.textContent = task;
        document.getElementById('tasks-list').appendChild(listItem);
        input.value = '';
    }
}
