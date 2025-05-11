const p = Promise.reject(new Error('reason to rejection...'));
p.catch(error => console.log(error.message))
