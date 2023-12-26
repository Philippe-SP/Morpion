// CROIX = &#10006;      CERCLE = &#11096;

//Grille du morpion
const grid = document.getElementById('grid')

//Message indiquant le tour et le résultat
const message = document.getElementById('message')

// Cases du morpion
const case1 = document.getElementById('D1')
const case2 = document.getElementById('D2')
const case3 = document.getElementById('D3')
const case4 = document.getElementById('D4')
const case5 = document.getElementById('D5')
const case6 = document.getElementById('D6')
const case7 = document.getElementById('D7')
const case8 = document.getElementById('D8')
const case9 = document.getElementById('D9')

//Span où afficher le symbole
const symbol1 = document.getElementById('S1')
const symbol2 = document.getElementById('S2')
const symbol3 = document.getElementById('S3')
const symbol4 = document.getElementById('S4')
const symbol5 = document.getElementById('S5')
const symbol6 = document.getElementById('S6')
const symbol7 = document.getElementById('S7')
const symbol8 = document.getElementById('S8')
const symbol9 = document.getElementById('S9')

//Variables vérifiant si le joueur 1 ou 2 a cocher la case
let J1_check1 = false
let J1_check2 = false
let J1_check3 = false
let J1_check4 = false
let J1_check5 = false
let J1_check6 = false
let J1_check7 = false
let J1_check8 = false
let J1_check9 = false

let J2_check1 = false
let J2_check2 = false
let J2_check3 = false
let J2_check4 = false
let J2_check5 = false
let J2_check6 = false
let J2_check7 = false
let J2_check8 = false
let J2_check9 = false

//Variable du bouton play
const play = document.getElementById('play')

//Joueurs (TRUE=joueur1, FALSE=joueur2)
let joueurActif = true

//Fonction qui affiche au tour de quel joueur il s'agis
function afficheTour() {
    if(joueurActif === false) {
        message.innerHTML = "Au tour du joueur 2 maintenant."
    } else if(joueurActif === true) {
        message.innerHTML = "Au tour du joueur 1 maintenant."
    }
}

//Fonction pour reset le tableau pour une nouvelle partie
function reset() {
    //Remets au tour du joueur 1
    joueurActif = true
    //enleve les croix et ronds des cases
    symbol1.innerHTML = ""
    symbol2.innerHTML = ""
    symbol3.innerHTML = ""
    symbol4.innerHTML = ""
    symbol5.innerHTML = ""
    symbol6.innerHTML = ""
    symbol7.innerHTML = ""
    symbol8.innerHTML = ""
    symbol9.innerHTML = ""
    //remets les cases comme "non coché"
    J1_check1 = false
    J1_check2 = false
    J1_check3 = false
    J1_check4 = false
    J1_check5 = false
    J1_check6 = false
    J1_check7 = false
    J1_check8 = false
    J1_check9 = false

    J2_check1 = false
    J2_check2 = false
    J2_check3 = false
    J2_check4 = false
    J2_check5 = false
    J2_check6 = false
    J2_check7 = false
    J2_check8 = false
    J2_check9 = false
    
    //Remets les cases vertes en bleu
    case1.style.backgroundColor = "transparent"
    case2.style.backgroundColor = "transparent"
    case3.style.backgroundColor = "transparent"
    case4.style.backgroundColor = "transparent"
    case5.style.backgroundColor = "transparent"
    case6.style.backgroundColor = "transparent"
    case7.style.backgroundColor = "transparent"
    case8.style.backgroundColor = "transparent"
    case9.style.backgroundColor = "transparent"
}


//Fonction pour verifier si le tableau est remplis, si oui -> vérification du vainqueur
function gridFull() {
        //Vérification du vainqueur
        //cas de figure 1,2,3 
        if(J1_check1 === true && J1_check2 === true && J1_check3 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case1.style.backgroundColor = "darkgreen"
            case2.style.backgroundColor = "darkgreen"
            case3.style.backgroundColor = "darkgreen"
        } else if(J2_check1 === true && J2_check2 === true && J2_check3 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case1.style.backgroundColor = "darkgreen"
            case2.style.backgroundColor = "darkgreen"
            case3.style.backgroundColor = "darkgreen"
        }

        //cas de figure 4,5,6 
        if(J1_check4 === true && J1_check5 === true && J1_check6 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case4.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case6.style.backgroundColor = "darkgreen"
        } else if(J2_check4 === true && J2_check5 === true && J2_check6 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case4.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case6.style.backgroundColor = "darkgreen"
        }

        //cas de figure 7,8,9 
        if(J1_check7 === true && J1_check8 === true && J1_check9 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case7.style.backgroundColor = "darkgreen"
            case8.style.backgroundColor = "darkgreen"
            case9.style.backgroundColor = "darkgreen"
        } else if(J2_check7 === true && J2_check8 === true && J2_check9 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case7.style.backgroundColor = "darkgreen"
            case8.style.backgroundColor = "darkgreen"
            case9.style.backgroundColor = "darkgreen"
        }

        //cas de figure 1,4,7 
        if(J1_check1 === true && J1_check4 === true && J1_check7 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case1.style.backgroundColor = "darkgreen"
            case4.style.backgroundColor = "darkgreen"
            case7.style.backgroundColor = "darkgreen"
        } else if(J2_check1 === true && J2_check4 === true && J2_check7 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case1.style.backgroundColor = "darkgreen"
            case4.style.backgroundColor = "darkgreen"
            case7.style.backgroundColor = "darkgreen"
        }

        //cas de figure 2,5,8 
        if(J1_check2 === true && J1_check5 === true && J1_check8 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case2.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case8.style.backgroundColor = "darkgreen"
        } else if(J2_check2 === true && J2_check5 === true && J2_check8 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case2.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case8.style.backgroundColor = "darkgreen"
        }

        //cas de figure 3,6,9 
        if(J1_check3 === true && J1_check6 === true && J1_check9 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case3.style.backgroundColor = "darkgreen"
            case6.style.backgroundColor = "darkgreen"
            case9.style.backgroundColor = "darkgreen"
        } else if(J2_check3 === true && J2_check6 === true && J2_check9 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case3.style.backgroundColor = "darkgreen"
            case6.style.backgroundColor = "darkgreen"
            case9.style.backgroundColor = "darkgreen"
        }

        //cas de figure 1,5,9 
        if(J1_check1 === true && J1_check5 === true && J1_check9 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case1.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case9.style.backgroundColor = "darkgreen"
        } else if(J2_check1 === true && J2_check5 === true && J2_check9 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case1.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case9.style.backgroundColor = "darkgreen"
        }

        //cas de figure 7,5,3 
        if(J1_check7 === true && J1_check5 === true && J1_check3 === true){
            message.innerHTML = "Le joueur 1 a gagné!"
            case7.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case3.style.backgroundColor = "darkgreen"
        } else if(J2_check7 === true && J2_check5 === true && J2_check3 === true) {
            message.innerHTML = "Le joueur 2 a gagné!"
            case7.style.backgroundColor = "darkgreen"
            case5.style.backgroundColor = "darkgreen"
            case3.style.backgroundColor = "darkgreen"
        } else if(//Si la grille est full et aucun vainqueur
            symbol1.innerHTML.length != 0 &&
            symbol2.innerHTML.length != 0 &&
            symbol3.innerHTML.length != 0 &&
            symbol4.innerHTML.length != 0 &&
            symbol5.innerHTML.length != 0 &&
            symbol6.innerHTML.length != 0 &&
            symbol7.innerHTML.length != 0 &&
            symbol8.innerHTML.length != 0 &&
            symbol9.innerHTML.length != 0 
        ) {
            message.innerHTML = "Egalité..."
        }

        
        
}

/* Fonctionnement du click sur les cases selon le joueur
   Affiche une croix pour le J1 et un rond pour le J2 
   + switch de joueur a chaque click
   + Verification si c'est la fin de la partie et qui est le vainqueur vainqueur grace à gridFull() */
play.addEventListener('click', () => {
    //Appel de la fonction pour avoir un tableau vide pret a jouer
    reset()
    //message pour indiquer que c'est au J1 de commencer
    message.innerHTML = "Joueur 1, ouvrez le bal."

    //Evenements appelés lors du click sur les cases du morpion
    case1.addEventListener('click', () => {
        if(symbol1.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol1.innerHTML = "&#10006;"
                J1_check1 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol1.innerHTML = "&#11096;"
                J2_check1 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case2.addEventListener('click', () => {
        if(symbol2.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol2.innerHTML = "&#10006;"
                J1_check2 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol2.innerHTML = "&#11096;"
                J2_check2 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case3.addEventListener('click', () => {
        if(symbol3.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol3.innerHTML = "&#10006;"
                J1_check3 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol3.innerHTML = "&#11096;"
                J2_check3 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case4.addEventListener('click', () => {
        if(symbol4.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol4.innerHTML = "&#10006;"
                J1_check4 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol4.innerHTML = "&#11096;"
                J2_check4 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case5.addEventListener('click', () => {
        if(symbol5.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol5.innerHTML = "&#10006;"
                J1_check5 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol5.innerHTML = "&#11096;"
                J2_check5 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case6.addEventListener('click', () => {
        if(symbol6.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol6.innerHTML = "&#10006;"
                J1_check6 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol6.innerHTML = "&#11096;"
                J2_check6 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case7.addEventListener('click', () => {
        if(symbol7.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol7.innerHTML = "&#10006;"
                J1_check7 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol7.innerHTML = "&#11096;"
                J2_check7 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case8.addEventListener('click', () => {
        if(symbol8.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol8.innerHTML = "&#10006;"
                J1_check8 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol8.innerHTML = "&#11096;"
                J2_check8 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    })
    
    case9.addEventListener('click', () => {
        if(symbol9.innerHTML.length === 0) {
            if(joueurActif === true) {
                symbol9.innerHTML = "&#10006;"
                J1_check9 = true
                joueurActif = false
                afficheTour()
                gridFull()
            } else if(joueurActif === false) {
                symbol9.innerHTML = "&#11096;"
                J2_check9 = true
                joueurActif = true
                afficheTour()
                gridFull()
            }
        }
    }) 
})





