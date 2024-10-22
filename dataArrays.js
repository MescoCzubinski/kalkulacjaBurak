const revenues = [
  "Zakładany plon",
  "Plon z kontraktacji",
  "Plon pozakontraktowy",
  "Ilość wysłodków (10% s.m) na sprzedaż",
  "Cena buraków kontraktowych",
  "Cena buraków poza kontraktem",
  "Cena wysłodków"
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
  "Podstawowe wsparcie dochodów",
  "Płatność redystrybucyjna",
  "Płatność dla młodych rolników",
  "Płatność do buraków cukrowych"
];
const supplementsValues = [
  483.20,
  168.79,
  256.55,
  1253.34
];
const ecoschemes = [
  "Międzyplony lub wsiewki",
  "Plan nawożenia",
  "Zróżnicowana struktura upraw",
  "Wymieszanie obornika",
  "Naturalne nierozbryzgowo",
  "Uproszczone systemy uprawy",
  "Wymieszanie słomy z glebą",
  "Integrowana Produkcja Roślin",
  "Biologiczna ochrona upraw",
  "Inny ekoschemat"
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
];
const springValues = [
  37.00,
  12.00,
  1200.00,
];
const springValuesOneVaue = [
  120.00,
  110.00,
  151.00,
  220.00
]
const springValueValue = [
  2.00, 
  1.00,
  1.10, 
];
const springUnitsIDs = [
  "herbicyd-z-glifosatem",
  "adiuwant-do-glifosatu",
  "nasiona-buraka",
  "fertilizer-measure",
  "pest-management-measure"
];
const springUnitsValue = [
  "l/ha",
  "l, kg/ha",
  "js./ha",
  "t/ha",
  "js./ha"
];
const springUnits = [
  "zł/l",
  "zł/l, kg",
  "zł/js.",
  "zł/l",
  "zł/js."
];
const springUnitsOneVaue = [
  "zł/ha",
  "zł/ha",
  "zł/ha",
  "zł/ha"
];
const autumnUnitsIDs = [
  "wapno",
  "nawoz-naturalny",
  "miedzyplon",
];
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