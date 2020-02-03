
//data??

let dieren = [
    'Zebra', 'Eenhoorn', 'Aap', 'Docent [zeldzaam]'
];


let titel = document.createElement('h1');
titel.innerText = "DOM Manipulatie";

let dierentuin = document.createElement('div');
dierentuin.classList = "dierentuin";

let template = `
<div class='contact'>
    <h2>Welkom ${naam} bij de dierentuin.</h2>

    <p>Je mag hier een vraag stellen.</p>

    <form>
    <textarea></textarea>
    <input type="submit" value="vraag versturen">
    </form>


</div>


`;


dieren.forEach((d) => {
    let dier = document.createElement('div');
    dier.className = "dier";
    dier.innerText = d;
    dierentuin.appendChild(dier);
});


document.body.appendChild(titel);
document.body.append(dierentuin);
