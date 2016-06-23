// Function Design II. Immersion [30 min]


// 01. Diseña una función recursiva [mirror] para determinar
// si un número entero n es simétrico a otro número entero m
// Construye a partir de aquí la función [palindrome] que 
// indica si un número es simétrico respecto a sí mismo.

(function (/* 01. mirror (n, m) */) {

    // Mi versión: concatenando los números en forma de cadena de caracteres y devolviendo la conversión de la cadena a número
    var reverse = function (n) {
        return n < 10 ?
            n :
            Number.parseInt(n % 10 + "" + reverse(Math.floor(n/10)));
    }

    var mirror = function (n, m) {
        return n === reverse(m);
    };
    var palindrome = function (n) {
        return n === reverse(n);
    };
    
    console.log (
        mirror (1, 7),          // false
        mirror (0, 0),          // true
        mirror (123, 321),      // true
        mirror (123, 123),      // false
        mirror (123, 132),      // false
        palindrome (123),       // false
        palindrome (12321),     // true
        palindrome (1221)       // true
    ); 
    
});


// 02. Diseña una función recursiva [addV] que dado un
// vector v calcule la suma de todos sus elementos.
// Por ejemplo, addV ([1,2,3]) = 1 + 2 + 3 = 6.

(function (/* 02. addV (v) */) {
    
    // Mi versión (Samuel): Emula la funcionalidad que suelen tener los lenguajes funcionales por la que existe una referencia al primer elemento de una lista y al resto (Haskel)
    var addVA = function (v) {
        return v.length === 0 ?
            0 :
            v[0] + addVA(v.slice(1));
    };

    // Versión del curso (usando una función auxiliar)
    var addVB = function (v) {
        return addVBFrom(v, 0);
    };

    var addVBFrom = function (n, m) {
        return m > n.length - 1 ?
            0 :
            addVBFrom(n, m + 1) + n[m];
    };
    
    console.log (
        addVA ([1,2,3,4,5]), // 15
        addVB ([1,2,3,4,5])  // 15
    );
    
});


// 03. Diseña una función recursiva [hasV] para determinar  
// si un elemento e está contendido dentro de un vector v.
// No pueden utilizarse funciones auxiliares disponibles
// dentro del prototipo Array.

(function (/* 03. hasV (v, e) */) {
    
    var hasV = function (v, e) {
        return hasVFrom(v, e, 0);
    };

    var hasVFrom = function (v, e, i) {
        return i > v.length - 1 ?
            false :
            v[i] === e || hasVFrom(v, e, i + 1);
    }
  
    console.log (
        hasV ([1,2,3,4,5], 4), // true
        hasV ([1,2,3,4,5], 6)  // false
    );
    
});


// 04. Diseña una función recursiva [repeatV] para 
// determinar si  un dentro de un vector v se encuentran
// al menos un  elemento repetido. No pueden utilizarse 
// funcionesauxiliares disponibles dentro del prototipo Array.

(function (/* 04. repeatV (v) */) {
    
    var repeatV = function (v) {
        return repeatVFrom(v, 0);
    };
    
    var repeatVFrom = function (v, i) {
        return i === v.length - 1 ?
            false :
            hasVFrom(v, v[i], i + 1) || repeatVFrom(v, i + 1);
    };

    var hasVFrom = function (v, e, i) {
        return i > v.length - 1 ?
            false :
            v[i] === e || hasVFrom(v, e, i + 1);
    }

    console.log (
        repeatV ([1,2,3,4,5]),   // false
        repeatV ([1,2,3,4,5,3])  // true
    );
    
});


// 05. Diseña una función recursiva [mirrorV] que determine si
// dos vectores son simétricos el uno con respecto al otro.
// Por ejemplo, [1,2,3] es simétrico a [3,2,1]. No pueden utilizarse
// funciones auxiliares disponibles dentro del prototipo Array.

//(function (/* 05. mirrorV (v, w) */) {
    
    var mirrorV = function (v, w) {
        return v.length != w.length ?
            false :
            mirrorVFrom(v, w, 0, v.length - 1);
    };
    
    var mirrorVFrom = function (v, w, i, j) {
        return i === v.length - 1 ?
            v[i] === w[j] :
            v[i] === w[j] && mirrorVFrom(v, w, i + 1, j - 1);
    };

    /*console.log (
        mirrorV ([2, 4, 6], []),            // false
        mirrorV ([2, 4, 6], [2, 4, 6]),     // false
        mirrorV ([2, 4, 6], [6, 4]),        // false
        mirrorV ([2, 4, 6], [6, 4, 2]),     // true
        mirrorV ([2, 4, 6], [6, 4, 2, 7])   // false
    );*/
    
//});


// 06. Diseña una función recursiva [sortV] que ordene un vector v.
// Puedes utilizar la técnica de ordenación por inserción. Primero
// resuelve el problema de insertar un elemento en orden dentro de un
// array que se asume previamente ordenado. Diseña para ello la función
// [insertV]. Después, utilizando esa función, resuelve la función
// de ordenación.

//(function (/* 06. sortV (v) */) {
    
    var insertV = function (v, e) {
        return v.length === 0 ?
            [e] :
            insertVAux(v, e, 0, []);
    };

    var insertVAux = function (v, e, i, ac) {
        return i === v.length ?
            ac :
            v[i] <= e ?
                insertVAux(v, e, i + 1, ac.concat([v[i]])) :
                insertVAux(v, e, i + 1, ac.concat([e].concat([v[i]])));
    };

    var sortV = function (v) {

    };
    
    /*console.log (
        sortV ([1, 3, 2, 4, 8, 1]), // [ 1, 1, 2, 3, 4, 8 ]
        sortV ([2, 4, 6, 8, 3, 0]), // [ 0, 2, 3, 4, 6, 8 ]
        sortV ([1, 2, 3, 4, 5, 6]), // [ 1, 2, 3, 4, 5, 6 ] 
        sortV ([6, 5, 4, 3, 2, 1])  // [ 1, 2, 3, 4, 5, 6 ]
    );*/
    
//});


// Bonus 01. Diseña una función recursiva [containsV] que determine
// si un vector w está contenido dentro de otro vector mayor v.
// No pueden utilizarse funciones auxiliares disponibles dentro
// del prototipo Array.

(function (/* Bonus 01. containsV (v, w) */) {
    
    var containsV = function (v, w) {

    };

    
    console.log (
        containsV ([],        []),
        containsV ([],        [1]),
        containsV ([],        [1,2]),
        containsV ([1],       [1]),
        containsV ([1],       [2]),
        containsV ([1,2],     []),
        containsV ([1,2],     [1]),
        containsV ([1,2],     [2]),
        containsV ([1,2],     [3]),
        containsV ([1,2],     [1,2]),
        containsV ([1,2],     [2,3]),
        containsV ([1,2],     [1,2,3]),
        containsV ([1,2,3],   [1,2]),
        containsV ([1,2,3],   [2,3]),
        containsV ([1,2,3,4], [1,2]),
        containsV ([1,2,3,4], [2,3]),
        containsV ([1,2,3,4], [3,4]),
        containsV ([1,2,3,4], [1,3])
    ); // T F F T F T T T F T F F T T T T T F
});


// Bonus 02. Diseña una función recursiva [parts] que calcule las partes de
// un conjunto. Las Partes de un conjunto S se definen como el conjunto
// de todos los subconjuntos de S. Por ejemplo Partes de [1,2,3] = [
// [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]. Como se muestra en el ejemplo
// deben utilizarse Arrays de Arrays para representar el resultado. El orden
// en el que aparezcan los elementos dentro del array exterior e interiores
// no es relevante. Es decir a todos los efectos [1,2] y [2,1] representan el
// mismo subconjunto.

(function (/* Bonus 02. parts (v) */) {
    
    var parts = function (v) {

    };

    console.log (
        parts ([1, 2, 3]) // [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
    );
    
});
