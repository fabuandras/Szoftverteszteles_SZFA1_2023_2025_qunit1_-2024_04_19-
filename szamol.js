class Szamol {
    
    constructor() {}

    szamolas(a, b) {
        if (a === undefined || b === undefined || arguments.length > 2)
            {return "Két paraméter megadása szükséges!";}
        if (isNaN(a) || isNaN (b))
            {return "Szám legyen mindkét paraméter!";}
        if (
            !(
                isFinite(Number(a)) &&
                isFinite(Number(b)) &&
                isFinite(eval(Number(a) + Number (b)).toFixed(8))
            )
        )
            {return "Túlcsordulás!";}
        return Number(a) + Number(b);
    }
}