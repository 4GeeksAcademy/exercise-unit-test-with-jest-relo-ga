// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 156.5 yen", function(){
    const {fromDollarToYen} = require('./app.js');
    const dollars = 1;
    const yenes = fromDollarToYen(1);
    const expectedToYenes = dollars * oneEuroIs["JPY"]/oneEuroIs["USD"];

    expect(fromDollarToYen(dollars)).toBe(expectedToYenes);
})

test("One yen should be 0.87 pound", function(){
    const {fromYenToPound} = require('./app.js');
    const yen = 1;
    //const pound = fromYenToPound(1);
    const expectedToPound = yen * oneEuroIs["GBP"]/oneEuroIs["JPY"];

    expect(fromYenToPound(yen)).toBe(expectedToPound);
})