/*jslint indent:4, devel:true, browser:true, vars: true*/
/*global chai, describe, it, factA, mirrorV, sortV*/

var assert = chai.assert;
var expect = chai.expect;

describe("01. factorial", function () {
    "use strict";

    // Dos test de prueba para la primera función del primer archivo (01)
    it("should return 1 if the number is 0", function () {
        var number = 0;
        assert.equal(factA(number), 1);
    });

    it("should return 120 if the number is 5", function () {
        var number = 5;
        assert.equal(factA(number), 120);
    });

});

describe("05. Vectores simétricos", function () {
    "use strict";

    it("Estos vectores NO son simétricos: [2, 4, 6], [2, 4, 6]", function () {
        var vector1 = [2, 4, 6];
        var vector2 = [2, 4, 6];
        assert.isFalse(mirrorV(vector1, vector2));
    });

    it("Estos vectores son simétricos: [2, 4, 6], [6, 4, 2]", function () {
        var vector1 = [2, 4, 6];
        var vector2 = [6, 4, 2];
        assert.isTrue(mirrorV(vector1, vector2));
    });

    it("Vectores de diferente tamaño NO son simétricos", function () {
        var vector1 = [2, 4];
        var vector2 = [2, 4, 6];
        assert.isFalse(mirrorV(vector1, vector2));
    });
});

describe("06. Ordenar array: Función sortV", function () {
    "use strict";

    it("should tomar un array y ordenarlo", function () {
        var testCases = [
            {
                input: [1, 3, 2, 4, 8, 1],
                expected: [ 1, 1, 2, 3, 4, 8 ]
            },
            {
                input: [2, 4, 6, 8, 3, 0],
                expected: [ 0, 2, 3, 4, 6, 8 ]
            },
            {
                input: [1, 2, 3, 4, 5, 6],
                expected: [ 1, 2, 3, 4, 5, 6 ]
            },
            {
                input: [6, 5, 4, 3, 2, 1],
                expected: [ 1, 2, 3, 4, 5, 6 ]
            }
        ];

        testCases.forEach(function (t) {
            var actual = sortV(t.input);
            expect(actual).to.equal(t.expected);
        });
    });

    // Pendiente de implementar
    it("should devolver array vacío");

});
