fetch('http://localhost:3000/list')
.then(response => response.json())
.then(data => {
    const list = document.querySelector('#list');

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.text;
        li.setAttribute('data-number', item.id)

        if(item.done) li.classList.add('done')

        list.appendChild(li)
    })
})
.then(() => {
    const todoItems = document.querySelectorAll('li')

    todoItems.forEach(li => {
        li.addEventListener('click', () => {
            const desc = document.createElement('div')
            desc.className = 'desc'
            const id = li.getAttribute('data-number')

            if(li.querySelector('.desc')) return
            

        fetch(`http://localhost:3000/list/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    desc.textContent = data.description;
                    desc.style.backgroundColor = data.color;
                    
                    li.appendChild(desc);
                    return desc;

            })
        })
    })
})

