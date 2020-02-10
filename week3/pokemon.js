
//:( - skuzi
let promise = fetch('https://pokeapi.co/api/v2/pokemons');

console.log(promise);

promise.then((response) => {
    console.log(response);
    // response.json().then(data => {
    //     console.log(data.results);
    // })
})


promise.catch(err => {
    console.log(err);
}) 

//: (( - STill Skuzi
let my_promise = new Promise((resolve, reject) => {

    //setTimeout(() => resolve('Yay! :D'), 1000);

    setTimeout(() => reject('Neej! D:'), 1000);

})

my_promise.then(data => {
    console.log(`Data: ${data}`);
});

my_promise.catch(err => {
    console.log(`Error: ${err}`);
});