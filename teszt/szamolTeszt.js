QUnit.module('szamolas', (hook) => {
    hook.before(() => {
        this.szamol = new Szamol();
    });

    //alap vizsgálatok
    QUnit.test('Létezik-e?', assert => {
      assert.ok(szamol.szamolas);
    });

    QUnit.test('Függvény-e?', assert => {
        assert.ok(typeof(szamol.szamolas === "function"));
    });

    //alap esetek
    QUnit.test('Pozitív egész számok', assert => {
        kapott = szamol.szamolas(3, 5);
        vart = 8;
        assert.equal(kapott, vart);
    });

    QUnit.test('Negatív egész számok', assert => {
        assert.equal(szamol.szamolas(-3, -5), -8);
    });

    QUnit.test('Vegyes előjelű egész számok', assert => {
        assert.equal(szamol.szamolas(-3, 5), 2);
    });

    QUnit.test('Tört számok', assert => {
        assert.equal(szamol.szamolas(3.2, 1.5), 4.7);
    });

    //speciális esetek
    QUnit.test('Egész szám szövegként megadva', assert => {
        assert.equal(szamol.szamolas(3, "2"), 5);
    });

    QUnit.test('Szövegként az egyik paraméter', assert => {
        assert.equal(szamol.szamolas(3, "kutyus"), "Szám legyen mindkét paraméter!");
    });

    QUnit.test('Logikai az egyik paraméter', assert => {
        assert.equal(szamol.szamolas(3, false), 3);
    });

    QUnit.test('Speciális karakter az egyik paraméter', assert => {
        assert.equal(szamol.szamolas('!', false), "Szám legyen mindkét paraméter!");
    });

    QUnit.test('PI az egyik paraméter', assert => {
        assert.equal(szamol.szamolas(Math.PI, 2), Math.PI + 2);
    });

    QUnit.test('Egy paraméter van megadva', assert => {
        assert.equal(szamol.szamolas(2), "Két paraméter megadása szükséges!");
    });

    QUnit.test('0 paraméter van megadva', assert => {
        assert.equal(szamol.szamolas(), "Két paraméter megadása szükséges!");
    });

    QUnit.test('3 vagy több paraméter van megadva', assert => {
        assert.equal(szamol.szamolas(), "Két paraméter megadása szükséges!");
    });
    QUnit.test('Túlcsordulás', assert => {
        assert.equal(szamol.szamolas(2.444e+555, 3555e+333), "Túlcsordulás!");
    });
  });