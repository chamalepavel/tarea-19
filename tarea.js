// Objeto cabra

const cabra = {
    tipoDieta: 'herbívoro',
    sonido() {
        console.log('baaa');
    }
};

cabra.sonido(); // Output: 'baaa'


// Objeto cabra1 (con error de acceso)

const cabra1 = {
    tipoDieta: 'herbívoro',
    sonido() {
        console.log('baaa');
    },
    mostrarDieta() {
        console.log(tipoDieta); // no tiene acceso directo sin this
    }
};

// Descomentar para ver el error
// cabra1.mostrarDieta(); // Output: ReferenceError


// Objeto cabra2 (corregido con this)

const cabra2 = {
    tipoDieta: 'herbívoro',
    sonido() {
        console.log('baaa');
    },
    mostrarDieta() {
        console.log(this.tipoDieta); // this referencia al objeto actual
    }
};

cabra2.mostrarDieta(); // Output: 'herbívoro'


// Objeto androide

const androide = {
    modelo: 'B-4MI',
    nivelEnergia: 100,
    info() {
        console.log(`Soy el modelo ${this.modelo} y tengo ${this.nivelEnergia} de energía.`);
    }
};

androide.info(); // Output: Soy el modelo B-4MI y tengo 100 de energía.
