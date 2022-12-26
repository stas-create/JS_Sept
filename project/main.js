fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> {
        let father = document.createElement('div');
        father.classList.add('main');
        document.body.appendChild(father);
        for (const user of users) {
            let p = document.createElement('p');
            p.innerText = `${user.id} ${user.name}`;
            father.appendChild(p);

            let buttonElement = document.createElement('button');
            // buttonElement.innerText = 'User details';
            let a = document.createElement('a');
            a.href = `details/user-details.html?id=${user.id}`;
            a.innerText = 'User details';
            buttonElement.appendChild(a);

            p.appendChild(buttonElement);
        }
    })