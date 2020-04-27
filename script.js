const list = document.querySelector('#list');

const renderTask = (task) => {
    const li = document.createElement('li')

    li.textContent = task.textContent
    li.setAttribute('data-numbers', task.id)

    if(task.done) li.classList.add('done')
    list.appendChild(li)
}
fetch('http://localhost:3000/list')
.then(response => {
    return response.json()
})
.then(taskList => {
    taskList.forEach(renderTask)
})












