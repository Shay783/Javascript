// alert('shaymae est la')

// -- structure de base IF

// if (true){// par defaut la condition à vérifier le IF vérifie  si elle est vraie
//     /*........code.........*/
// }

var nb1 = 10;
if (nb1 > 18){
    console.log("nb1 est bien inférieur à 50");
}

 if (true){
    //   code si VRAI
 }else{
      //code si FAUX
}

if(nb1 > 50){
    console.log("nb1 est bien supérieur à 50");
}else{
    console.log("nb1 n'est pas supérieur à 50");
}

// EXERCICE
// On utilise le IF pour verifierl'âge de l'internaute.
// => s'il est majeur je lui souahaite la bienvenue
// => s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site

// 1 -- Je declare la majorité legale
var MajoriteFR = 18;

// 2 -- demander l'âge en s'assurant que nous avons un number
var age = parseInt(prompt("Indiquez votre âge ?"));

// 3. -- Je verifie di mon internaute est majeur
if(age >= MajoriteFR){//bienvenue si vrai
    alert("BIENVENUE, MEC T MAJEUR");
}else{
    //s'il est mineur je lui signale
    alert("Allez voir un autre super site...");
    // et ensuite je redirige vers W3school
    document.location.href = "https://www.w3schools.com/js/js_if_else.asp"
}

//FIN

