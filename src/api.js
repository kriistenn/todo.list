const endpoint = 'http://localhost:3000'

export const fetchGetTaskList = () => {
    return fetch(`${endpoint}/list`)
        .then(response => {
            if (!response.ok) throw new Error('Ошибка загрузки')
            return response.json()

        })
}
export const fetchEditTask = (id, body) => {
    return fetch(`${endpoint}/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        .then(response => {
            if (!response.ok) throw new Error('Ошибка редактирования')
        })
}
export const fetchDeleteTask = (id) => {
    return fetch(`${endpoint}/delete/${id}`, {
            method: 'DELETE',
        })

        .then(response => {
            if (!response.ok) throw new Error('Ошибка удаления')
        })
}
export const fetchAddTask = (body) => {
    return fetch(`${endpoint}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        .then(response => {
            if (!response.ok) throw new Error('Ошибка cоздания')
        })
}