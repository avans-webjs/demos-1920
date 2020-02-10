
class DoggoService
{
    counter = 0;

    GetRandomDoggo(){
        return new Promise((resolve, reject) => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json().then(data => {
                    if(data.status == 'success')
                        resolve(data.message);
                    else
                        reject(data);
                }))
                .catch(err => reject(err))
                .finally(() => {
                    this.counter++;
                });
        }); 
    }

    GetRandomDoggoBetter(){
   
        return fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json()) //wat denk jij dat dit doet?
            .then(data => {
                if(data.status != 'success')
                    return Promise.reject(data.status); //en dit?

                return data.message;  
            })
            //.catch(err => reject(err)) <-- deze hebben we niet meer nodig!
            .finally(() => {
                this.counter++;
            });
        
    }
}


class DoggoController
{
    doggoService = new DoggoService();

    constructor(){

        //optie 1 - met then
        // this.doggoService.GetRandomDoggo().then(doggo => {
        //     document.querySelector('.doggo').src = doggo;
        // })

        //optie 2 - met async en await
        //Moet helaas in een andere functie vanwege async
        this.getDogo();
      
        document.querySelector('button').addEventListener('click', () => {
            this.getDogo();
        })
    }

    async getDogo(){
         
        try {
          let doggo = await this.doggoService.GetRandomDoggoBetter();
          document.querySelector('.doggo').src = doggo;
          document.querySelector('#counter').innerText = this.doggoService.counter;
        }
        catch(err){
            console.log(`Ow noes, cannot get doggo: status = ${err}` )
        }
    }
}



let doggoController = new DoggoController();
























// var fetch_promise = fetch('https://dog.ceo/api/breeds/image/random');

// setTimeout(() => {
//     fetch_promise.then(response => response.json().then(dogo => {
//         document.querySelector('.dog').src = dogo.message;
//     }))
// }, 3000)


// var my_promise = new Promise(function(resolve, reject) {

//     //setTimeout(() => resolve("yay :D"), 2000);

//     setTimeout(() => reject("Neey :("), 2000);
// });

// my_promise
//     .then(data => {
//         console.log(`Then 1: ${data}`);
//         return data;
//     })
//     .then(data => {
//         console.log(`Then 2: ${data}`);
//         return data;
//     })
//     .catch(error => {
//         console.log(`Error 1: ${error}`);
//         return error;
//     })
//     .catch(error => {
//         console.log(`Error 2: ${error}`);
//         return error;
//     })
//     .finally(data => {
//         console.log(`Final: ${data}`);
//     })
//     .then((data) => {
//         console.log(`Then 3: ${data}`);
//         return data;
//     }) //gaat niet!
