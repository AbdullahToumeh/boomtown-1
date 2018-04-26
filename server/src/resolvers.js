import fetch from 'node-fetch';

const resolveFunctions = {
    Query: {
        items(root) {
            return fetch('http://localhost:3000/items')
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        users(root) {
            return fetch('http://localhost:3000/users')
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        item(root, { id }) {
            return fetch(`http://localhost:3000/items/${id}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        user(root, { id }) {
            return fetch(`http://localhost:3000/users/${id}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        }
    },
    Item: {
        borrower({ borrower }) {
            return fetch(`http://localhost:3000/users/${borrower}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        itemowner({ itemowner }) {
            return fetch(`http://localhost:3000/users/${itemowner}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        }
    },
    User: {
        borroweditems({ id }) {
            return fetch(`http://localhost:3000/items/?borrower=${id}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        },
        owneditems({ id }) {
            return fetch(`http://localhost:3000/items/?itemowner=${id}`)
                .then(response => response.json())
                .catch(err => console.log(err));
        }
    }
};

export default resolveFunctions;
