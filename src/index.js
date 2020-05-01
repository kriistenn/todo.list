import {fetchGetTaskList, fetchEditTask, fetchDeleteTask, fetchAddTask} from './api'

import{renderTask} from './logicButtoms'

const createEl = (tag, text, attrs = {}) => {
    const el = document.createElement(tag)
    el.textContent = text
    Object.keys(attrs).forEach((key) => {
        el.setAttribute(key, attrs[key])
    })
    return el
}


const renderTaskList = () => {
    const list = createEl('ul', null, { id: 'list' })
    document.body.appendChild(list)

    fetchGetTaskList()
        .then(taskList => taskList.forEach((item) => renderTask(item, list)))
        .catch((err) => {
        const errDiv = createEl('div', err.message, { class: 'error' })
        list.appendChild(errDiv)
        })
}

renderTaskList()

const input = document.querySelector('input[name="todo-text"]')
const textarea = document.querySelector('textarea[name="todo-description"]')
const createBtn = document.getElementById('create')
const createErr = document.getElementById('create-error')

createBtn.addEventListener('click', () => {
    fetchAddTask({ text: input.value, textarea: input.value })
    .then(taskList => taskList.forEach((item) => renderTask(item, list)))
        .catch((err) => {
        createErr.textContent = err.message
        })
})

