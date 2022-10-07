let who = ['El perro', 'Mi Abuela', 'Messi', 'Su primo', 'Su gato', 'Un avión']

let what = ['se enfermó', 'se cayó', 'se quebró', 'se perdió', 'se durmió', 'desapareció' ]

let when = ['durante la cena', 'en el tren', 'mientras yo estudiaba', 'en el supermercado', 'justo cuando terminé', 'durante su cumpleaños']

function excuseGenerator(who, what, when){
    numWho = Math.floor(Math.random() * who.length);
    numWhat = Math.floor(Math.random() * what.length);
    numWhen = Math.floor(Math.random() * when.length);
    return who[numWho] + " " + what[numWhat] + " "  + " " + when[numWhen];
}

function onLoad (){
    let excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when)

}

window.onload = onLoad;