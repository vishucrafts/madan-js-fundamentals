// This will be added after 10 seconds to the macro task queue
// setTimeout(() => {
// 	console.log('1 second is up');
// }, 1000);

// This will be added immediately to the macro task queue
// setTimeout(() => {
// 	console.log('0 second is up');
// }, 0);

// setInterval
// setInterval(() => {
// 	console.log('setInterval');
// }, 1000);

// Step 1 - Create a promise

// const promise1 = new Promise((resolve, reject) => {
// });

// console.log(promise1) // Promise { <pending> }

// Step 2 - Resolve the promise

// const promise2 = new Promise((resolve, reject) => {
// 	resolve('This is my resolved data');
// });

// console.log(promise2) 

// Step 3 - Reject the promise
// const promise3 = new Promise((resolve, reject) => {
// 	reject('404 Not found');
// });

// console.log(promise3)

// Step 4 - Resolve after sometime

// const promise4 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data');
// 	}, 5000);
// });

// console.log(promise4)

// setTimeout(() => {
// 	console.log(promise4)
// }, 10000);

// Step 5 - Resolve a promise after sometime, let's use then this time
// const promise5 = new Promise((resolve, reject) => {
// 	setTimeout(() => { // This will be added to macro task queue
// 		resolve("This is my resolved data");
// 	}, 6000);
// });

// promise5.then((response) => { // This will be added to micro task queue
// 	console.log(response);
// });

// Important:
// 1. First my file is wrapped in a function
// 2. That function is called immediately
// 3. That function will placed on call stack
// 4. Then the promise is created
// 5. Node.js remembers that it should add the callback given to setTimeout after 6 seconds
// 6. Node.js remembers that it needs to add the callback given to then method to micro task queue when promise resolves 
// 7. File execution is complete
// 8. Call stack is empty
// 9. This entire process might have take few microseconds
// 10. In this situation callstack is empty, microtask empty, macrotask empty
// 11. Since call stack is empty and there is a callback in microtask queue, it will be added to call stack
// 12. Now the promise is resolved, so the callback given to then method will be added to microtask queue
// 13. Since call stack is empty and there is a callback in microtask queue, it will be added to call stack
// 14. Now the callback given to then method will be executed

// Step 6 - Reject a promise after sometime, let's use catch this time
// const promise6 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('404 NOT FOUND');
// 	}, 7000);
// });

// promise6.catch((error) => {
// 	console.log(error);
// });

// Step 7 - Resolve or Reject a promise on random with 50% chance and use then and catch
// const promise7 = new Promise((resolve, reject) => {
// 	const randomNumber = Math.random() * 100; // 1 - 100
// 	if (randomNumber < 50) {
// 		resolve('This is my resolved data: ');
// 	} else {
// 		reject('404 NOT FOUND');
// 	}
// });

// promise7.then((response) => {
// 	console.log(response);
// }).catch((error) => {
// 	console.log(error);
// });

// Step 8: Always return something from then callback so it's chainable

// const promise8 = new Promise((resolve, reject) => {
// 	const randomNumber = Math.random() * 100; // 1 - 100
// 	if (randomNumber < 50) {
// 		resolve('This is my resolved data: ');
// 	} else {
// 		reject('404 NOT FOUND');
// 	}
// });

// promise8.then((response) => {
// 	return response.toUpperCase();
// }).then((response) => {
// 	console.log(response);
// }).catch((error) => {
// 	console.log(error);
// });

// Step 9: Promise.all - Resolve all promises at once

// const promise9 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data 1');
// 	}, 10000);
// });

// const promise10 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data 2');
// 	}, 20000);
// });

// Promise.all([promise9, promise10]).then((response) => {
// 	console.log(response); // ['This is my resolved data 1', 'This is my resolved data 2']
// })

// Step 10: Promise.all - Reject all promises at once

// const promise11 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data 1');
// 	}, 10000);
// });

// const promise12 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('This is my rejected data 2');
// 	}, 20000);
// });

// Promise.all([promise11, promise12]).then((response) => {
// 	console.log(response); 
// }).catch((error) => {
// 	console.log(error); // This is my rejected data 2
// });

// Step 11: Race

// const promise13 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data 1');
// 	}, 10000);
// });

// const promise14 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('This is my rejected data 2');
// 	}, 20000);
// });

// Promise.race([promise13, promise14]).then((response) => {
// 	console.log(response); // This is my resolved data 1
// }).catch((error) => {
// 	console.log(error);
// });

// Step 13: Promise all setteled

// const promise15 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('This is my resolved data 1');
// 	}, 10000);
// });

// const promise16 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('This is my rejected data 2');
// 	}, 20000);
// });

// Promise.allSettled([promise15, promise16]).then((response) => {
// 	console.log(response); // [{status: 'fulfilled', value: 'This is my resolved data 1'}, {status: 'rejected', reason: 'This is my rejected data 2'}]
// })

// Step 14: Create an expensive promise

// const promise17 = new Promise((resolve, reject) => {
// 	let sum = 0;
// 	for (let i = 0; i < 100000000000; i++) {
// 		sum += i;
// 	}
// 	resolve(sum);
// });

// console.log("This is blocked");

// Step 15: Create an expensive promise but run it on next tick

const promise18 = new Promise((resolve, reject) => {
	resolve()
}).then(() => {
	let sum = 0;
	for (let i = 0; i < 100000000000; i++) {
		sum += i;
	}
	return sum;
});

// console.log("This is not blocked")

// Step 16: Create an expensive promise but run it on next tick and use Promise.resolve

// const promise19 = Promise.resolve().then(() => {
// 	let sum = 0;
// 	for (let i = 0; i < 100000000000; i++) {
// 		sum += i;
// 	}
// 	return sum;
// });
