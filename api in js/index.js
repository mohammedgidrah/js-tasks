// // task 1


// fetch('https://jsonplaceholder.typicode.com/posts')

//     .then(response => {
//         return response.json();
//     })
// .then((data) => {
//     const dataContainer = document.getElementById('task1');
//     data.forEach(element => {
//         const divcontent = document.createElement('div');
//         divcontent.className = 'item';
//         divcontent.innerHTML = `
//                     <h3> titel : ${element.title}</h3>
//                     <p> body : ${element.body}</p>

//                     `;
//         dataContainer.appendChild(divcontent);
//     })
// })
// .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
// });
// // task 2

// fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {
//         const dataContainer = document.getElementById('task2');
//         data.forEach(element => {
//             const divcontent = document.createElement('div');
//             // divcontent.className = 'item';
//             divcontent.innerHTML = `
//             <h4> name  : ${element.name}</h4>
//             <p> email : ${element.email}</p>
//             <p> body : ${element.body}</p>

//             `;
//             dataContainer.appendChild(divcontent);
//         })
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// // task 3

// fetch(`https://jsonplaceholder.typicode.com/albums?userId=1`)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {
//         const dataContainer = document.getElementById('task3');
//         data.forEach(element => {
//             const divcontent = document.createElement('div');
//             divcontent.className = 'item';
//             divcontent.innerHTML = `
//             <h3> title : ${element.title}</h3>`;
//             dataContainer.appendChild(divcontent);
//         })
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// // task 4

// fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1 `)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {
//         const dataContainer = document.getElementById('task4');
//         data.forEach(element => {
//             const divcontent = document.createElement('div');
//             divcontent.className = 'item';
//             divcontent.innerHTML = `
//             <img src=${element.url} width=100px higth=100px>
//             <h3> title : ${element.title}</h3>
//             <h3> thumbnailUrl : ${element.thumbnailUrl}</h3>
//             `;
//             dataContainer.appendChild(divcontent);
//         })
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// // task 5
// fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1 `)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {
//         const dataContainer = document.getElementById('task5');
//         data.forEach(element => {
//             const divcontent = document.createElement('div');
//             divcontent.className = 'item';
//             divcontent.innerHTML = `
//             <h4> title : ${element.title}</h4>
//             <input type="checkbox">completed
//             `;
//             dataContainer.appendChild(divcontent);
//         })
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });
// // task 6

// fetch(`https://jsonplaceholder.typicode.com/users `)
//     .then(response => {
//         return response.json();
//     })
//     .then((data) => {
//         const dataContainer = document.getElementById('task6');
//         data.forEach(element => {
//             const divcontent = document.createElement('div');
//             divcontent.className = 'item';
//             divcontent.innerHTML = `
//             <div> name : ${element.name}</div>
//             <h3> username : ${element.username}</h3>
//             <p> email : ${element.email}</p>
//             <p> address : ${element.address.city} , ${element.address.suite}, ${element.address.city}, ${element.address.zipcode}</p>
//             `;
//             dataContainer.appendChild(divcontent);
//         })
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });



// bonus task

// const post = fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json());
// const comments = fetch(`https://jsonplaceholder.typicode.com/comments`).then(response => response.json());
// const users = fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json());

// Promise.all([post, comments, users])
//     .then(([data1, data2, data3]) => {
//         // console.log(data1)
//         // console.log(data2)
//         // console.log(data3)
//         return data1, data2, data3;
//     })


//     .then((data1 ,data2 ) => {
//         document.getElementById("fetchData").addEventListener("click", () => {

//             const dataContainer = document.getElementById('post_content');
//             data1.forEach(element => {
//                 const divcontent = document.createElement('div');
//                 divcontent.className = 'item';
//                 divcontent.innerHTML = `
//                 <h3> username : ${element.username}</h3>
//                 <p> email : ${element.email}</p>
//                 <p> address : ${element.address.city} , ${element.address.suite}, ${element.address.city}, ${element.address.zipcode}</p>
//                 `;
//                 dataContainer.appendChild(divcontent);
//             })
//         });

//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

// using async and await

// async function getJson1() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json()
//     data.forEach(element => {
//         const contaner = document.getElementById('task1')
//         const divcontent = document.createElement('div');
//         divcontent.innerHTML = `
//         <h1>title: ${element.title}</h1>
//         `;
//         contaner.appendChild(divcontent);
//     })


// }
// getJson1();





