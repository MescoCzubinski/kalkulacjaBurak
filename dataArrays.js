const revenues = [
  "zakładany plon",
  "plon z kontraktacji",
  "plon pozakontraktowy",
  "ilość wysłodków (10% s.m) na sprzedaż",
  "cena buraków kontraktowych",
  "cena buraków pozakontraktowych",
  "cena wysłodków"
];
const revenuesUnits = [
  "t/ha",
  "t/ha",
  "t/ha",
  "t/ha",
  "zł/t",
  "zł/t",
  "zł/t"
];
const revenuesValues = [
  70.00,
  65.00,
  5.00,
  35.00,
  120.12,
  51.48,
  20.00
];
const supplements = [
  "podstawowe wsparcie dochodów",
  "płatność redystrybucyjna",
  "płatność dla młodych rolników",
  "płatność do buraków cukrowych"
];
const supplementsValues = [
  483.20,
  168.79,
  256.55,
  1253.34
];
const ecoschemes = [
  "międzyplony lub wsiewki",
  "plan nawożenia",
  "zróżnicowana struktura upraw",
  "wymieszanie obornika",
  "naturalne nierozbryzgowo",
  "uproszczone systemy uprawy",
  "wymieszanie słomy z glebą",
  "Integrowana Produkcja Roślin",
  "biologiczna ochrona upraw",
  "inny ekoschemat"
];
const ecoschemesValues = [
  432.05,
  86.41,
  223.18,
  172.82,
  259.23,
  249.50,
  134.60,
  810.96,
  297.61,
  130.00
];
const revenuesIDs = [
  "zakladany-plon",
  "plon-z-kontraktacji",
  "plon-pozakontraktowy",
  "ilosc-wyslodkow",
  "cena-burakow-kontraktowych",
  "cena-burakow-pozakontraktowych",
  "cena-wyslodkow",
  "podstawowe-wsparcie-dochodow",
  "platnosc-redystrybucyjna",
  "platnosc-dla-mlodych-rolnikow",
  "platnosc-do-burakow-cukrowych",
  "ekoschemat-miedzyplony-lub-wsiewki",
  "ekoschemat-plan-nawozenia",
  "ekoschemat-zroznicowana-struktura-upraw",
  "ekoschemat-wymieszanie-obornika",
  "ekoschemat-stosowanie-nawozow-naturalnych",
  "ekoschemat-uproszczone-systemy-uprawy",
  "ekoschemat-wymieszanie-slomy-z-gleba",
  "ekoschemat-integrowana-produkcja-roslin",
  "ekoschemat-biologiczna-ochrona-upraw",
  "inny-ekoschemat"
];

const springNames = [
  "Herbicyd z glifosatem:",
  "Adiuwant do glifosatu:",
  "Nasiona buraka:"
];
const springNamesOneVaue = [
  "Płytka uprawa wiosenna:",
  "Uprawa przedsiewna:",
  "Mulczowanie międzyplonu:",
  "Siew punktowy lub strip-till:"
]
const springValues = [
  48.00,
  42.00,
  220.00,
  37.00,
  12.00,
  1200.00
];
const springValuesOneVaue = [
  120.00,
  110.00,
  151.00,
  220.00
]
const springValueValue = [
  2.00, 
  7.00,
  1.00, 
  2.00, 
  1.00, 
  1.1,
];

const springUnitsIDs = [
  "koszt-jednego-zabiegu-nawozenia",
  "koszt-jednego-zabiegu-opryskiwania",
  "koszt-jednego-zabiegu-opielania",
  "herbicyd-z-glifosatem",
  "adiuwant-do-glifosatu",
  "nasiona-buraka"
];
const springUnitsValue = [
  "razy/ha",
  "razy/ha",
  "razy/ha",
  "t/ha",
  "t/ha",
  "js./ha"
];
const springUnits = [
  "zł/ha",
  "zł/ha",
  "zł/ha",
  "zł/l",
  "zł/l",
  "zł/js."
];
const springUnitsOneVaue = [
  "zł/ha",
  "zł/ha",
  "zł/ha",
  "zł/ha"
]


// const numberInputs = document.querySelectorAll('input[type=text]');
// numberInputs.forEach(input => {
//     input.addEventListener('blur', function() {
//         if (this.value){
//             this.classList.add('visited');
//         }
//         else{
//             this.classList.remove('visited');
//         }
//     });
// });