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
  "koszt jednego zabiegu nawożenia",
  "koszt jednego zabiegu opryskiwania",
  "koszt jednego zabiegu opielania",
  "herbicyd z glifosatem",
  "adiuwant do glifosatu",
  "nasiona buraka"
];
const springNamesOneVaue = [
  "płytka uprawa wiosenna",
  "uprawa przedsiewna",
  "mulczowanie międzyplonu",
  "siew punktowy lub strip-till"
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

const fertilizersValuesValue = [
  3200.00, 
  2800.00, 
  1800.00, 
  1650.00, 
  3300.00, 
  1500.00, 
  1250.00, 
  600.00, 
  550.00, 
  1250.00, 
  25.00, 
  20.00, 
  25.00, 
  20.00
];

const fertilizersUnitsValue = [
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/t', 
  'zł/l, kg', 
  'zł/l, kg', 
  'zł/l, kg', 
  'zł/l, kg'
];

const fertilizersValuesAmount = [
  180.00, 
  150.00, 
  65.00, 
  25.00, 
  65.00, 
  24.00, 
  16.00, 
  10.00, 
  20.00, 
  15.00, 
  1.00, 
  0.50, 
  2.00, 
  2.00
];

const fertilizersUnitsAmount = [
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'kg/ha', 
  'l, kg/ha', 
  'l, kg/ha', 
  'l, kg/ha', 
  'l, kg/ha'
];

const pestManagementValue = [
  250.00,
  251.00,
  252.00,
  253.00,
  254.00,
  255.00,
  250.00,
  251.00,
  252.00,
  253.00,
  254.00,
  255.00,
  250.00,
  251.00,
  252.00,
  253.00,
  254.00,
  255.00,
  250.00,
  251.00,
  252.00,
  253.00,
  254.00,
  255.00,
  250.00,
  251.00,
  252.00,
  253.00,
  250.00,
  251.00,
  252.00,
  253.00,
  250.00,
  251.00,
  252.00,
  253.00,
  251.00,
  252.00,
  253.00,
  254.00,
  255.00,
  250.00,
  250.00,
  251.00
];

const pestManagementAmount = [
  0.25,
  1.25,
  2.25,
  3.25,
  4.25,
  5.25,
  0.25,
  1.25,
  2.25,
  3.25,
  4.25,
  5.25,
  0.25,
  1.25,
  2.25,
  3.25,
  4.25,
  5.25,
  0.25,
  1.25,
  2.25,
  3.25,
  4.25,
  5.25,
  0.25,
  1.25,
  2.25,
  3.25,
  0.25,
  1.25,
  2.25,
  3.25,
  0.25,
  1.25,
  2.25,
  3.25,
  1.25,
  2.25,
  3.25,
  4.25,
  5.25,
  0.25,
  0.25,
  1.25
];
