// // alert('Hi');

// // L'opérateur de comparaison == signifie 'egal à'
// //il permet de vérifier que les VALEURS de 2 variables sont identiques

// var nb1 = 123;
// var nb2 = "123";
// console.log(nb1 == nb2); // retourne TRUE

// //l'opérateur de comparaison === signifie "strictement égal à"
// // il permet de vérifier la VALEUR et le type
// console.log(nb1 === nb2); // retourne FALSE 

// // -- L'opérateur != signifie "différent de ... en VALEUR"
// console.log(nb1 != nb2); //retourne FALSE

// // -- L'opérateur !== signifie "strictement différent de .. en VALEUR et en TYPE"
// console.log(nb1 !== nb2); // retourne TRUE

// //--------------------------------------------------

// // EXERCICE
// /* J'arrive sur un espace sécurisé au moyen du prénom et de l'âge.
// Je dois saisir mon prénom et mon âge pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prénom et age.)
// En cas d'échec une alerte m'informe du problème.
// Si tout ce passe bien, un message de bienvenue m'accueillir

// -----------------------------------------------------*/

// var prenom, monAge;
// prenom = "Hafsa";
// monAge = 20;

// // 1 -- Demander son prénom à l'utilisateur avec un pompt

// var prenomLogin = prompt ("Quel est votre prénom ?");
// // 2 -- Je verifie si le prénom saisi (prenomLogin) correspond à celui de donnée (prenom)
// if(prenomLogin === prenom ){
//     // alert('test');
//     // 2a. Si tout est ok, je continue la vérification avec l'âge
//     // 2a1. Demande a mon utilisation son âge via un PROMPT
    
//     var ageLogin = parseInt(prompt("Votre âge ?"));
//     if(ageLogin === monAge){
//         alert("Bienvenue " + prenomLogin);
//     }else{
//         // 2a2. si les ages ne correspondent pas, je lance une ALERT.
//         alert("Erreur d'âge");
//     }
// }else{
//     // 2b. Sinon, les prénom ne correspondent pas, je lance une ALERT.
//     alert("Attention, prénom non reconnu");
// }

var prenom, monAge, mdp;
prenom = "Tom";
monAge = 28;
mdp = "bibi";

var prenomLogin = prompt("Quel est votre prénom ?");

if (prenomLogin === prenom){
    var ageLogin = parseInt(prompt("Votre âge ?"));

    if(ageLogin === monAge){
        var ageLogin = prompt("Le mot de passe ?")

        if (mdpLogin === mdp){
            alert("Bienvenue" + prenomLogin);
        }else{
            alert("pblm de mdp");
        }

    }else{
        alert("Erreur d'âge");
    }
}else{
    alert("Attention, prénom non reconnu");
}

