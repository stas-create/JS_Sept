let url = new URL(location.href);
let userid = url.searchParams.get('id');


fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then(resp => resp.json())
    .then(users => {
        let div = document.createElement('div');
        div.classList.add('head');
        let h1 = document.createElement('h1');
        h1.innerText='Інформацію про об\'єкт user'
        div.appendChild(h1)
        let info = document.createElement('div');
        info.classList.add('userinfo');
        div.appendChild(info)
        document.body.appendChild(div);
        function recursion(item) {
            for (const itemKey in item) {
                if (typeof item[itemKey] !== 'object') {
                    let p = document.createElement('p');
                    p.append(`${itemKey} - ${item[itemKey]}`);
                    info.appendChild(p)

                }else {
                    recursion(item[itemKey]);
                }
                
            }
            
        }

        recursion(users);
    });



fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
    .then(info=>info.json())
    .then(posts=> {
        let btn = document.createElement('button');
        btn.classList.add('postof');
        btn.innerText='Post of current user'
        document.body.appendChild(btn);
        let divbut = document.createElement('div');
        divbut.classList.add('divbut');
        document.body.appendChild(divbut);

        btn.onclick = function () {
            for (const post of posts) {
                let div = document.createElement('div');
                div.classList.add('divpost');
                div.innerText = `Tittle - ''${post.title}''`;
                divbut.appendChild(div);

                let btnpost = document.createElement('button');
                btnpost.classList.add('btnpost');
                div.appendChild(btnpost);
                let a = document.createElement('a');
                a.innerText = 'post details';
                a.href = `../post-details/post-details.html?id=${post.id}&userid=${userid}`;
                btnpost.appendChild(a);
            }
        };
    }
)



