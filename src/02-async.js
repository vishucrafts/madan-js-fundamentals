// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data 1');
// 	}, 10000);
// });

// const response = await promise1;

// console.log(response)

// Step 2: Randomnlly reject or resolve
// const promise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (Math.random() > 0.5) {
// 			resolve('This is my resolved data 2');
// 		} else {
// 			reject('This is my rejected data 2');
// 		}
// 	}, 2000);
// });

// async function main() {
// 	try {
// 		const response = await promise2;
// 		console.log(response, "try");
// 	} catch (error) {
// 		console.log(error, "catch");
// 	}
// }

// main()


// fetch("https://jsonplaceholder.typicode.com/todos/1")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((json) => console.log(json));


// async function main() {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// 	const json = await response.json();
// 	console.log(json);
// }
// main()

async function main() {
	const todo1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const todo2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");

	const tod1Json = await todo1.json();
	const todo2Json = await todo2.json();
	
	return [tod1Json, todo2Json];

	// return Promise.resolve().then(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/todos/1").then((response1) => {
	// 		fetch("https://jsonplaceholder.typicode.com/todos/2").then((response2) => {
	// 			const todo1Json = response1.json();
	// 			const todo2Json = response2.json();
	// 			return [todo1Json, todo2Json];
	// 		})
	// 	}).then((json) => console.log(json));
	// })
}	

main()

async function main() {

	const todo1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
	const todo2 = fetch("https://jsonplaceholder.typicode.com/todos/2");

	const [todo1Json, todo2Json] = await Promise.all([todo1, todo2]);

	console.log(todo1Json, todo2Json);

	// return Promise.resolve().then(() => {
	// 	const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then((response1) => {
	// 	}).then((json) => console.log(json));
	// 	const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then((response2) => {
			
	// 	})

	// 	Promise.all([promise1, promise2]).then((json) => console.log(json))
	// })

}
