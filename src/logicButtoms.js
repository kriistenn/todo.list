export const renderTask = (task, list) => {
    const li = createEl('li', null)
    const text = createEl('div', task.text, { class: task.done ? 'text done' : 'text' })
    const btnWrapper = createEl('div', null, { class: 'btn-wrapper' })

    const doneBtnText = !task.done ? 'Сделано' : 'Не сделано'
    const doneBtn = createEl('button', doneBtnText)
    const editBtn = createEl('button', ' Редактировать')
    const deleteBtn = createEl('button', 'Удалить')
    const errDiv = createEl('div', null, { class: 'error' })
    
    deleteBtn.addEventListener('click', () => {
    fetchDeleteTask(task.id)
        .then(() => {
            document.body.removeChild(list)
            renderTaskList()
        })
        .catch((err) => {
            errDiv.textContent = err.message
        })
    })

    editBtn.addEventListener('click', () => {
        const input = createEl('input', { class: 'edit-input' })
        input.type = 'text'
        input.value = task.text
        editBtn.disabled = true
        li.insertBefore(input, text)
        li.removeChild(text)

        input.addEventListener('blur', () => {
        fetchEditTask(task.id, { text: input.value })
            .then(() => {
            document.body.removeChild(list)
            renderTaskList()
            })
            .catch((err) => {
            errDiv.textContent = err.message
            })
        })
    })

    doneBtn.addEventListener('click', () => {
        fetchEditTask(task.id, { done: !task.done })
        .then(() => {
            document.body.removeChild(list)
            renderTaskList()
        })
        .catch((err) => {
            errDiv.textContent = err.message
        })
    })

    li.appendChild(text)
    li.appendChild(btnWrapper)
    li.appendChild(errDiv)
    btnWrapper.appendChild(doneBtn)
    btnWrapper.appendChild(editBtn)
    btnWrapper.appendChild(deleteBtn)
    list.appendChild(li)
}