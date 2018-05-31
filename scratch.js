'use strict';
// head is a single value 


// username:
// passwrd:
// head: 1,
// points: ,
// // change head value to 1
// questions: [ 
//     {
//         "name" : "Hydrogen",
//         "symbol" : "H",
//         "atomic weight" : 1.008,
//         "number" : 1,
//         "next": 3,
//         "m" : 2
//     }, 
//     {
//         "name" : "Helium",
//         "symbol" : "He",
//         "atomic weight" : 4.003,
//         "number" : 2,
//         "next" : 2,
//         "m" : 2
//     }, 
//     {
//         "name" : "Lithium",
//         "symbol" : "Li",
//         "atomic weight" : 6.941,
//         "number" : 3,
//         "next" : 0,
//         "m" : 1
//     }, 
//     {
//         "name" : "Beryllium",
//         "symbol" : "Be",
//         "atomic weight" : 9.012,
//         "number" : 4,
//         "next" : 1,
//         "m" : 1
//     }, 
//     {
//         "name" : "Boron",
//         "symbol" : "B",
//         "atomic weight" : 10.811,
//         "number" : 5,
//         "next" : 5,
//         "m" : 1
//     }, 
//     {
//         "name" : "Carbon",
//         "symbol" : "C",
//         "atomic weight" : 12.011,
//         "number" : 6,
//         "next" : 6,
//         "m" : 1
//     }, 
//     {
//         "name" : "Nitrogen",
//         "symbol" : "N",
//         "atomic weight" : 14.007,
//         "number" : 7,
//         "next" : 7,
//         "m" : 1
//     }, 
//     {
//         "name" : "Oxygen",
//         "symbol" : "O",
//         "atomic weight" : 15.999,
//         "number" : 8,
//         "next" : 8,
//         "m" : 1
//     }, 
//     {
//         "name" : "Fluorine",
//         "symbol" : "F",
//         "atomic weight" : 18.998,
//         "number" : 9,
//         "next" : 9,
//         "m" : 1
//     }, 
//     {
//         "name" : "Neon",
//         "symbol" : "Ne",
//         "atomic weight" : 20.18,
//         "number" : 10,
//         "next" : null,
//         "m" : 1
//     }
// ],

const arr = [
    {
      "name": "Sodium",
      "symbol": "Na",
      "atomicWeight": 22.989769282,
      "number": 11,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Magnesium",
      "symbol": "Mg",
      "atomicWeight": 24.305,
      "number": 12,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Aluminium",
      "symbol": "Al",
      "atomicWeight": 26.98153857,
      "number": 13,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Silicon",
      "symbol": "Si",
      "atomicWeight": 28.085,
      "number": 14,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Phosphorus",
      "symbol": "P",
      "atomicWeight": 30.9737619985,
      "number": 15,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Sulfur",
      "symbol": "S",
      "atomicWeight": 32.06,
      "number": 16,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Chlorine",
      "symbol": "Cl",
      "atomicWeight": 35.45,
      "number": 17,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Argon",
      "symbol": "Ar",
      "atomicWeight": 39.9481,
      "number": 18,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Potassium",
      "symbol": "K",
      "atomicWeight": 39.09831,
      "number": 19,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Calcium",
      "symbol": "Ca",
      "atomicWeight": 40.0784,
      "number": 20,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Scandium",
      "symbol": "Sc",
      "atomicWeight": 44.9559085,
      "number": 21,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Titanium",
      "symbol": "Ti",
      "atomicWeight": 47.8671,
      "number": 22,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Vanadium",
      "symbol": "V",
      "atomicWeight": 50.94151,
      "number": 23,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Chromium",
      "symbol": "Cr",
      "atomicWeight": 51.99616,
      "number": 24,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Manganese",
      "symbol": "Mn",
      "atomicWeight": 54.9380443,
      "number": 25,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Iron",
      "symbol": "Fe",
      "atomicWeight": 55.8452,
      "number": 26,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Cobalt",
      "symbol": "Co",
      "atomicWeight": 58.9331944,
      "number": 27,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Nickel",
      "symbol": "Ni",
      "atomicWeight": 58.69344,
      "number": 28,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Copper",
      "symbol": "Cu",
      "atomicWeight": 63.5463,
      "number": 29,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Zinc",
      "symbol": "Zn",
      "atomicWeight": 65.382,
      "number": 30,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Gallium",
      "symbol": "Ga",
      "atomicWeight": 69.7231,
      "number": 31,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Germanium",
      "symbol": "Ge",
      "atomicWeight": 72.6308,
      "number": 32,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Arsenic",
      "symbol": "As",
      "atomicWeight": 74.9215956,
      "number": 33,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Selenium",
      "symbol": "Se",
      "atomicWeight": 78.9718,
      "number": 34,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Bromine",
      "symbol": "Br",
      "atomicWeight": 79.904,
      "number": 35,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Krypton",
      "symbol": "Kr",
      "atomicWeight": 83.7982,
      "number": 36,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Rubidium",
      "symbol": "Rb",
      "atomicWeight": 85.46783,
      "number": 37,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Strontium",
      "symbol": "Sr",
      "atomicWeight": 87.621,
      "number": 38,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Yttrium",
      "symbol": "Y",
      "atomicWeight": 88.905842,
      "number": 39,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Zirconium",
      "symbol": "Zr",
      "atomicWeight": 91.2242,
      "number": 40,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Niobium",
      "symbol": "Nb",
      "atomicWeight": 92.906372,
      "number": 41,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Molybdenum",
      "symbol": "Mo",
      "atomicWeight": 95.951,
      "number": 42,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Technetium",
      "symbol": "Tc",
      "atomicWeight": 98,
      "number": 43,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Ruthenium",
      "symbol": "Ru",
      "atomicWeight": 101.072,
      "number": 44,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Rhodium",
      "symbol": "Rh",
      "atomicWeight": 102.905502,
      "number": 45,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Palladium",
      "symbol": "Pd",
      "atomicWeight": 106.421,
      "number": 46,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Silver",
      "symbol": "Ag",
      "atomicWeight": 107.86822,
      "number": 47,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Cadmium",
      "symbol": "Cd",
      "atomicWeight": 112.4144,
      "number": 48,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Indium",
      "symbol": "In",
      "atomicWeight": 114.8181,
      "number": 49,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Tin",
      "symbol": "Sn",
      "atomicWeight": 118.7107,
      "number": 50,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Antimony",
      "symbol": "Sb",
      "atomicWeight": 121.7601,
      "number": 51,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Tellurium",
      "symbol": "Te",
      "atomicWeight": 127.603,
      "number": 52,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Iodine",
      "symbol": "I",
      "atomicWeight": 126.904473,
      "number": 53,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Xenon",
      "symbol": "Xe",
      "atomicWeight": 131.2936,
      "number": 54,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Cesium",
      "symbol": "Cs",
      "atomicWeight": 132.905451966,
      "number": 55,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Barium",
      "symbol": "Ba",
      "atomicWeight": 137.3277,
      "number": 56,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Lanthanum",
      "symbol": "La",
      "atomicWeight": 138.905477,
      "number": 57,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Cerium",
      "symbol": "Ce",
      "atomicWeight": 140.1161,
      "number": 58,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Praseodymium",
      "symbol": "Pr",
      "atomicWeight": 140.907662,
      "number": 59,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Neodymium",
      "symbol": "Nd",
      "atomicWeight": 144.2423,
      "number": 60,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Promethium",
      "symbol": "Pm",
      "atomicWeight": 145,
      "number": 61,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Samarium",
      "symbol": "Sm",
      "atomicWeight": 150.362,
      "number": 62,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Europium",
      "symbol": "Eu",
      "atomicWeight": 151.9641,
      "number": 63,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Gadolinium",
      "symbol": "Gd",
      "atomicWeight": 157.253,
      "number": 64,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Terbium",
      "symbol": "Tb",
      "atomicWeight": 158.925352,
      "number": 65,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Dysprosium",
      "symbol": "Dy",
      "atomicWeight": 162.5001,
      "number": 66,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Holmium",
      "symbol": "Ho",
      "atomicWeight": 164.930332,
      "number": 67,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Erbium",
      "symbol": "Er",
      "atomicWeight": 167.2593,
      "number": 68,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Thulium",
      "symbol": "Tm",
      "atomicWeight": 168.934222,
      "number": 69,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Ytterbium",
      "symbol": "Yb",
      "atomicWeight": 173.0451,
      "number": 70,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Lutetium",
      "symbol": "Lu",
      "atomicWeight": 174.96681,
      "number": 71,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Hafnium",
      "symbol": "Hf",
      "atomicWeight": 178.492,
      "number": 72,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Tantalum",
      "symbol": "Ta",
      "atomicWeight": 180.947882,
      "number": 73,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Tungsten",
      "symbol": "W",
      "atomicWeight": 183.841,
      "number": 74,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Rhenium",
      "symbol": "Re",
      "atomicWeight": 186.2071,
      "number": 75,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Osmium",
      "symbol": "Os",
      "atomicWeight": 190.233,
      "number": 76,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Iridium",
      "symbol": "Ir",
      "atomicWeight": 192.2173,
      "number": 77,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Platinum",
      "symbol": "Pt",
      "atomicWeight": 195.0849,
      "number": 78,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Gold",
      "symbol": "Au",
      "atomicWeight": 196.9665695,
      "number": 79,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Mercury",
      "symbol": "Hg",
      "atomicWeight": 200.5923,
      "number": 80,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Thallium",
      "symbol": "Tl",
      "atomicWeight": 204.38,
      "number": 81,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Lead",
      "symbol": "Pb",
      "atomicWeight": 207.21,
      "number": 82,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Bismuth",
      "symbol": "Bi",
      "atomicWeight": 208.980401,
      "number": 83,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Polonium",
      "symbol": "Po",
      "atomicWeight": 209,
      "number": 84,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Astatine",
      "symbol": "At",
      "atomicWeight": 210,
      "number": 85,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Radon",
      "symbol": "Rn",
      "atomicWeight": 222,
      "number": 86,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Francium",
      "symbol": "Fr",
      "atomicWeight": 223,
      "number": 87,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Radium",
      "symbol": "Ra",
      "atomicWeight": 226,
      "number": 88,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Actinium",
      "symbol": "Ac",
      "atomicWeight": 227,
      "number": 89,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Thorium",
      "symbol": "Th",
      "atomicWeight": 232.03774,
      "number": 90,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Protactinium",
      "symbol": "Pa",
      "atomicWeight": 231.035882,
      "number": 91,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Uranium",
      "symbol": "U",
      "atomicWeight": 238.028913,
      "number": 92,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Neptunium",
      "symbol": "Np",
      "atomicWeight": 237,
      "number": 93,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Plutonium",
      "symbol": "Pu",
      "atomicWeight": 244,
      "number": 94,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Americium",
      "symbol": "Am",
      "atomicWeight": 243,
      "number": 95,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Curium",
      "symbol": "Cm",
      "atomicWeight": 247,
      "number": 96,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Berkelium",
      "symbol": "Bk",
      "atomicWeight": 247,
      "number": 97,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Californium",
      "symbol": "Cf",
      "atomicWeight": 251,
      "number": 98,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Einsteinium",
      "symbol": "Es",
      "atomicWeight": 252,
      "number": 99,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Fermium",
      "symbol": "Fm",
      "atomicWeight": 257,
      "number": 100,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Mendelevium",
      "symbol": "Md",
      "atomicWeight": 258,
      "number": 101,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Nobelium",
      "symbol": "No",
      "atomicWeight": 259,
      "number": 102,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Lawrencium",
      "symbol": "Lr",
      "atomicWeight": 266,
      "number": 103,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Rutherfordium",
      "symbol": "Rf",
      "atomicWeight": 267,
      "number": 104,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Dubnium",
      "symbol": "Db",
      "atomicWeight": 268,
      "number": 105,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Seaborgium",
      "symbol": "Sg",
      "atomicWeight": 269,
      "number": 106,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Bohrium",
      "symbol": "Bh",
      "atomicWeight": 270,
      "number": 107,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Hassium",
      "symbol": "Hs",
      "atomicWeight": 269,
      "number": 108,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Meitnerium",
      "symbol": "Mt",
      "atomicWeight": 278,
      "number": 109,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Darmstadtium",
      "symbol": "Ds",
      "atomicWeight": 281,
      "number": 110,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Roentgenium",
      "symbol": "Rg",
      "atomicWeight": 282,
      "number": 111,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Copernicium",
      "symbol": "Cn",
      "atomicWeight": 285,
      "number": 112,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Nihonium",
      "symbol": "Nh",
      "atomicWeight": 286,
      "number": 113,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Flerovium",
      "symbol": "Fl",
      "atomicWeight": 289,
      "number": 114,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Moscovium",
      "symbol": "Mc",
      "atomicWeight": 289,
      "number": 115,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Livermorium",
      "symbol": "Lv",
      "atomicWeight": 293,
      "number": 116,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Tennessine",
      "symbol": "Ts",
      "atomicWeight": 294,
      "number": 117,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Oganesson",
      "symbol": "Og",
      "atomicWeight": 294,
      "number": 118,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    },
    {
      "name": "Ununennium",
      "symbol": "Uue",
      "atomicWeight": 315,
      "number": 119,
      "next": null,
      "m": 1,
      "correct": 0,
      "incorrect": 0
    }
  ]

//   console.log(arr.length);

const newArr = arr.map(item => {
  const {name, symbol, atomic_mass, number} = item;
    return {
      name,
      symbol,
      atomicWeight: atomic_mass,
      number,
      next: null,
      m: 1,
      correct: 0,
      incorrect: 0
  }
});

console.log(JSON.stringify( newArr, null, 2));

