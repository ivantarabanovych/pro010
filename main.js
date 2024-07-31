const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isSuccess = true; //true or false
        if (isSuccess) {
            resolve('Promise resolved!');
        } else {
            reject('Promise rejected!');
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    });