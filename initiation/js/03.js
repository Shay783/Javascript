//alert(" Je suis shay");

// -- 1. Addition
// -- INFO -- Je peux déclarer plusieurs variables ànla suite 

//Je declare mes variables

var nb1, nb2, resultat;

//j'affiche des valeurs

nb1 = 10;
nb2 = 5;

//J'utilise mes variables avec un calcul

resultat = nb1 + nb2;

//J'affiche mon resultat dans la console
console.log(resultat);

// -- 2. Soustraction
//  -- Soustraction de nb1 - nb2 avec l'opérateur "-"

resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
// -- Multiplication de nb1 * nb2 avec l'opérateur "*"
resultat = nb1 * nb2;
console.log(resultat);

//4. Division
// -- Division avec l'opérateur "/"
resultat = nb1 / nb2;
console.log(resultat);

// 5.Modulo
// -- le modulo retourne le reste d'une Division 
// -- modulo d nb1 % nb2 avec l'opération "%"
resultat = nb1 % nb2;
console.log(resultat);

// -- et  maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de" + nb1 + "par" + nb2 + "Est égale a : 1" + resultat);

// -- 6. Ecritures simplifiées
nb1 = 15;
nb1 = nb1 + 5; // égal à 20

nb1 += 10; // nb1 lui-même + quelque chose (le = sert a donner le resultat directement)
console.log('Le résultat de "nb4 += 10;" est ' + nb1); // égal à 30, alternance de guillemet simples et doubles pour ne pas casser ma chaine de caractères

// Le raccourcis est le même avec les autres opérateurs +, -, /, *, %, 

//Si j'utilise un ' (apostrophe) dans une phrase concaténée, je peux échapper le caractère à l'aide d'un anti-slash \ (alt gr + 8)

// FIN