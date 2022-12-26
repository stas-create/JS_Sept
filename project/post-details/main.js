let url = new URL(location.href);
let postId = url.searchParams.get('id');
let userId = url.searchParams.get('userid');


fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts?id=${postId}`)
    .then(response=>response.json())
    .then(postInfo=>{
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.classList.add('container');
        let h1 = document.createElement('h1');
        container.appendChild(h1);
        h1.innerText='Інформація про об\'єкт post на який клікнули';
        let infopost = document.createElement('div');
        infopost.classList.add('infopost');
        container.appendChild(infopost);
        for (const info of postInfo) {
            for (const key in info) {
                let p = document.createElement('p');
                infopost.appendChild(p);
                p.append(`${key} - ${info[key]}`);
            }
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response=>response.json())
    .then(comments=>{
        let main = document.createElement('div');
        main.classList.add('main');
        document.body.appendChild(main);

        let h1bot = document.createElement('h1');
        main.appendChild(h1bot);
        h1bot.innerText = 'Всі коментарі поточного поста';

        let bottom = document.createElement('div');
        bottom.classList.add('bottom');
        main.appendChild(bottom);

        for (const comment of comments) {
            let ulCom = document.createElement('ul');
            bottom.appendChild(ulCom);
            for (const commentKey in comment) {
                let liCom = document.createElement('li');
                ulCom.appendChild(liCom);
                liCom.append(`${commentKey} - ${comment[commentKey]}`);
            }

        }
    })

