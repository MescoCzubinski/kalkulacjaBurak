document.addEventListener('DOMContentLoaded', revenuesDisplay)
function revenuesDisplay(){
    let revenuesInputIndex = 0;
    let revenue = "";
    let supplement = "";
    let ecoscheme = "";

    for(i=0; i<revenues.length; i++){
        revenue += `
                    <div class="revenue">
                        <div class="revenue-name">${revenues[i]}</div> 
                        <div class="value">
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${revenuesValues[i]}" id="${revenuesIDs[revenuesInputIndex]}"></input>
                            <div class="unit">${revenuesUnits[i]}</div>
                        </div>
                    </div>
                    `;
        revenuesInputIndex++;
    };

    for(i=0; i<supplements.length; i++){
        supplement += `
                    <div class="revenue">
                        <div class="revenue-name">${supplements[i]}</div> 
                        <div class="value">
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${supplementsValues[i]}" id="${revenuesIDs[revenuesInputIndex]}"></input>
                            <div class="unit">zł/ha</div>
                        </div>
                    </div>
                    `;
        revenuesInputIndex++;
    };

  for (i = 0; i < ecoschemes.length; i++) {
    ecoscheme += `
                    <div class="supplement">
                        <label>
                            <input type="checkbox" checked class="supplements-checkbox" value="${ecoschemesValues[i]}" id="${revenuesIDs[revenuesInputIndex]}">
                            <div class="supplement-name">${ecoschemes[i]}</div> 
                            <div class="value">
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${ecoschemesValues[i]}" id="${revenuesIDs[revenuesInputIndex]}">
                                <div class="unit">zł/ha</div>
                            </div>
                        </label>
                    </div>
                    `;
        revenuesInputIndex++;
    }

    document.querySelector('#revenues-divs').innerHTML = revenue;
    document.querySelector('#supplements-divs').innerHTML = supplement;
    document.querySelector('#ecoschemes-divs').innerHTML = ecoscheme;
}

document.addEventListener('input', revenuesCalculation)
document.addEventListener('DOMContentLoaded', revenuesCalculation)

function revenuesCalculation(){
  const elementZakladanyPlon = document.querySelector("#zakladany-plon");
  const elementPlonZKontraktacji = document.querySelector("#plon-z-kontraktacji");
  const elementPlonPozakontraktowy = document.querySelector("#plon-pozakontraktowy");
  const elementIloscWyslodkow = document.querySelector("#ilosc-wyslodkow");
  const elementCenaBurakowKontraktowych = document.querySelector("#cena-burakow-kontraktowych");
  const elementCenaBurakowPozakontraktowych = document.querySelector("#cena-burakow-pozakontraktowych");
  const elementCenaWyslodkow = document.querySelector("#cena-wyslodkow");

  let zakladanyPlon = elementZakladanyPlon.value;
  zakladanyPlon = textToNumber(zakladanyPlon);
  elementZakladanyPlon.value = zakladanyPlon;
  zakladanyPlon = parseFloat(zakladanyPlon.replace(/\s+/g, ''));

  let plonZKontraktacji = elementPlonZKontraktacji.value;
  plonZKontraktacji = textToNumber(plonZKontraktacji);
  elementPlonZKontraktacji.value = plonZKontraktacji;
  plonZKontraktacji = parseFloat(plonZKontraktacji.replace(/\s+/g, ''));

  let plonPozakontraktowy = elementPlonPozakontraktowy.value;
  plonPozakontraktowy = textToNumber(plonPozakontraktowy);
  elementPlonPozakontraktowy.value = plonPozakontraktowy;
  plonPozakontraktowy = parseFloat(plonPozakontraktowy.replace(/\s+/g, ''));

  let iloscWyslodkow = elementIloscWyslodkow.value;
  iloscWyslodkow = textToNumber(iloscWyslodkow);
  elementIloscWyslodkow.value = iloscWyslodkow;
  iloscWyslodkow = parseFloat(iloscWyslodkow.replace(/\s+/g, ''));

  let cenaBurakowKontraktowych = elementCenaBurakowKontraktowych.value;
  cenaBurakowKontraktowych = textToNumber(cenaBurakowKontraktowych);
  elementCenaBurakowKontraktowych.value = cenaBurakowKontraktowych;
  cenaBurakowKontraktowych = parseFloat(cenaBurakowKontraktowych.replace(/\s+/g, ''));

  let cenaBurakowPozakontraktowych = elementCenaBurakowPozakontraktowych.value;
  cenaBurakowPozakontraktowych = textToNumber(cenaBurakowPozakontraktowych);
  elementCenaBurakowPozakontraktowych.value = cenaBurakowPozakontraktowych;
  cenaBurakowPozakontraktowych = parseFloat(cenaBurakowPozakontraktowych.replace(/\s+/g, ''));

  let cenaWyslodkow = elementCenaWyslodkow.value;
  cenaWyslodkow = textToNumber(cenaWyslodkow);
  elementCenaWyslodkow.value = cenaWyslodkow;
  cenaWyslodkow = parseFloat(cenaWyslodkow.replace(/\s+/g, ''));

  elementIloscWyslodkow.value = (zakladanyPlon/2);
  elementPlonPozakontraktowy.value = (zakladanyPlon - plonZKontraktacji);

  let revenueResult = (plonZKontraktacji*cenaBurakowKontraktowych)+(plonPozakontraktowy*cenaBurakowPozakontraktowych)+(iloscWyslodkow*cenaWyslodkow);
  revenueResult = Math.round(revenueResult*100);

  const elementPodstawoweWsparcieDochodow = document.querySelector("#podstawowe-wsparcie-dochodow");
  const elementPlatnoscRedystrybucyjna = document.querySelector("#platnosc-redystrybucyjna");
  const elementPlatnoscDlaMlodychRolnikow = document.querySelector("#platnosc-dla-mlodych-rolnikow");
  const elementPlatnoscDoBurakowCukrowych = document.querySelector("#platnosc-do-burakow-cukrowych");

  let podstawoweWsparcieDochodow = elementPodstawoweWsparcieDochodow.value;
  podstawoweWsparcieDochodow = textToNumber(podstawoweWsparcieDochodow);
  elementPodstawoweWsparcieDochodow.value = podstawoweWsparcieDochodow;
  podstawoweWsparcieDochodow = parseFloat(podstawoweWsparcieDochodow.replace(/\s+/g, ''));

  let platnoscRedystrybucyjna = elementPlatnoscRedystrybucyjna.value;
  platnoscRedystrybucyjna = textToNumber(platnoscRedystrybucyjna);
  elementPlatnoscRedystrybucyjna.value = platnoscRedystrybucyjna;
  platnoscRedystrybucyjna = parseFloat(platnoscRedystrybucyjna.replace(/\s+/g, ''));

  let platnoscDlaMlodychRolnikow = elementPlatnoscDlaMlodychRolnikow.value;
  platnoscDlaMlodychRolnikow = textToNumber(platnoscDlaMlodychRolnikow);
  elementPlatnoscDlaMlodychRolnikow.value = platnoscDlaMlodychRolnikow;
  platnoscDlaMlodychRolnikow = parseFloat(platnoscDlaMlodychRolnikow.replace(/\s+/g, ''));

  let platnoscDoBurakowCukrowych = elementPlatnoscDoBurakowCukrowych.value;
  platnoscDoBurakowCukrowych = textToNumber(platnoscDoBurakowCukrowych);
  elementPlatnoscDoBurakowCukrowych.value = platnoscDoBurakowCukrowych;
  platnoscDoBurakowCukrowych = parseFloat(platnoscDoBurakowCukrowych.replace(/\s+/g, ''));

  const elementEkoschematMiedzyplonyLubWsiewki = document.querySelector("#ekoschemat-miedzyplony-lub-wsiewki");
  const elementEkoschematPlanNawozenia = document.querySelector("#ekoschemat-plan-nawozenia");
  const elementEkoschematZroznicowanaStrukturaUpraw = document.querySelector("#ekoschemat-zroznicowana-struktura-upraw");
  const elementEkoschematWymieszanieObornika = document.querySelector("#ekoschemat-wymieszanie-obornika");
  const elementEkoschematStosowanieNawozowNaturalnych = document.querySelector("#ekoschemat-stosowanie-nawozow-naturalnych");
  const elementEkoschematUproszczoneSystemyUprawy = document.querySelector("#ekoschemat-uproszczone-systemy-uprawy");
  const elementEkoschematWymieszanieSlomyZGleba = document.querySelector("#ekoschemat-wymieszanie-slomy-z-gleba");
  const elementEkoschematIntegrowanaProdukcjaRoslin = document.querySelector("#ekoschemat-integrowana-produkcja-roslin");
  const elementEkoschematBiologicznaOchronaUpraw = document.querySelector("#ekoschemat-biologiczna-ochrona-upraw");
  const elementInnyEkoschemat = document.querySelector("#inny-ekoschemat");

  let ekoschematMiedzyplonyLubWsiewki = elementEkoschematMiedzyplonyLubWsiewki.value;
  ekoschematMiedzyplonyLubWsiewki = textToNumber(ekoschematMiedzyplonyLubWsiewki);
  elementEkoschematMiedzyplonyLubWsiewki.value = ekoschematMiedzyplonyLubWsiewki;
  ekoschematMiedzyplonyLubWsiewki = parseFloat(ekoschematMiedzyplonyLubWsiewki.replace(/\s+/g, ''));

  let ekoschematPlanNawozenia = elementEkoschematPlanNawozenia.value;
  ekoschematPlanNawozenia = textToNumber(ekoschematPlanNawozenia);
  elementEkoschematPlanNawozenia.value = ekoschematPlanNawozenia;
  ekoschematPlanNawozenia = parseFloat(ekoschematPlanNawozenia.replace(/\s+/g, ''));

  let ekoschematZroznicowanaStrukturaUpraw = elementEkoschematZroznicowanaStrukturaUpraw.value;
  ekoschematZroznicowanaStrukturaUpraw = textToNumber(ekoschematZroznicowanaStrukturaUpraw);
  elementEkoschematZroznicowanaStrukturaUpraw.value = ekoschematZroznicowanaStrukturaUpraw;
  ekoschematZroznicowanaStrukturaUpraw = parseFloat(ekoschematZroznicowanaStrukturaUpraw.replace(/\s+/g, ''));

  let ekoschematWymieszanieObornika = elementEkoschematWymieszanieObornika.value;
  ekoschematWymieszanieObornika = textToNumber(ekoschematWymieszanieObornika);
  elementEkoschematWymieszanieObornika.value = ekoschematWymieszanieObornika;
  ekoschematWymieszanieObornika = parseFloat(ekoschematWymieszanieObornika.replace(/\s+/g, ''));

  let ekoschematStosowanieNawozowNaturalnych = elementEkoschematStosowanieNawozowNaturalnych.value;
  ekoschematStosowanieNawozowNaturalnych = textToNumber(ekoschematStosowanieNawozowNaturalnych);
  elementEkoschematStosowanieNawozowNaturalnych.value = ekoschematStosowanieNawozowNaturalnych;
  ekoschematStosowanieNawozowNaturalnych = parseFloat(ekoschematStosowanieNawozowNaturalnych.replace(/\s+/g, ''));

  let ekoschematUproszczoneSystemyUprawy = elementEkoschematUproszczoneSystemyUprawy.value;
  ekoschematUproszczoneSystemyUprawy = textToNumber(ekoschematUproszczoneSystemyUprawy);
  elementEkoschematUproszczoneSystemyUprawy.value = ekoschematUproszczoneSystemyUprawy;
  ekoschematUproszczoneSystemyUprawy = parseFloat(ekoschematUproszczoneSystemyUprawy.replace(/\s+/g, ''));

  let ekoschematWymieszanieSlomyZGleba = elementEkoschematWymieszanieSlomyZGleba.value;
  ekoschematWymieszanieSlomyZGleba = textToNumber(ekoschematWymieszanieSlomyZGleba);
  elementEkoschematWymieszanieSlomyZGleba.value = ekoschematWymieszanieSlomyZGleba;
  ekoschematWymieszanieSlomyZGleba = parseFloat(ekoschematWymieszanieSlomyZGleba.replace(/\s+/g, ''));

  let ekoschematIntegrowanaProdukcjaRoslin = elementEkoschematIntegrowanaProdukcjaRoslin.value;
  ekoschematIntegrowanaProdukcjaRoslin = textToNumber(ekoschematIntegrowanaProdukcjaRoslin);
  elementEkoschematIntegrowanaProdukcjaRoslin.value = ekoschematIntegrowanaProdukcjaRoslin;
  ekoschematIntegrowanaProdukcjaRoslin = parseFloat(ekoschematIntegrowanaProdukcjaRoslin.replace(/\s+/g, ''));

  let ekoschematBiologicznaOchronaUpraw = elementEkoschematBiologicznaOchronaUpraw.value;
  ekoschematBiologicznaOchronaUpraw = textToNumber(ekoschematBiologicznaOchronaUpraw);
  elementEkoschematBiologicznaOchronaUpraw.value = ekoschematBiologicznaOchronaUpraw;
  ekoschematBiologicznaOchronaUpraw = parseFloat(ekoschematBiologicznaOchronaUpraw.replace(/\s+/g, ''));

  let innyEkoschemat = elementInnyEkoschemat.value;
  innyEkoschemat = textToNumber(innyEkoschemat);
  elementInnyEkoschemat.value = innyEkoschemat;
  innyEkoschemat = parseFloat(innyEkoschemat.replace(/\s+/g, ''));

  let ekoschematMiedzyplonyLubWsiewkiChecked = elementEkoschematMiedzyplonyLubWsiewki.checked ? ekoschematMiedzyplonyLubWsiewki : 0;
  let ekoschematPlanNawozeniaChecked = elementEkoschematPlanNawozenia.checked ?ekoschematPlanNawozenia : 0;
  let ekoschematZroznicowanaStrukturaUprawChecked = elementEkoschematZroznicowanaStrukturaUpraw.checked ? ekoschematZroznicowanaStrukturaUpraw : 0;
  let ekoschematWymieszanieObornikaChecked = elementEkoschematWymieszanieObornika.checked ? ekoschematWymieszanieObornika : 0;
  let ekoschematStosowanieNawozowNaturalnychChecked = elementEkoschematStosowanieNawozowNaturalnych.checked ? ekoschematStosowanieNawozowNaturalnych : 0;
  let ekoschematUproszczoneSystemyUprawyChecked = elementEkoschematUproszczoneSystemyUprawy.checked ? ekoschematUproszczoneSystemyUprawy : 0;
  let ekoschematWymieszanieSlomyZGlebaChecked = elementEkoschematWymieszanieSlomyZGleba.checked ? ekoschematWymieszanieSlomyZGleba : 0;
  let ekoschematIntegrowanaProdukcjaRoslinChecked = elementEkoschematIntegrowanaProdukcjaRoslin.checked ? ekoschematIntegrowanaProdukcjaRoslin : 0;
  let ekoschematBiologicznaOchronaUprawChecked = elementEkoschematBiologicznaOchronaUpraw.checked ? ekoschematBiologicznaOchronaUpraw : 0;
  let innyEkoschematChecked = elementInnyEkoschemat.checked ? innyEkoschemat : 0;

  let supplementResult = (
    podstawoweWsparcieDochodow +
    platnoscRedystrybucyjna +
    platnoscDlaMlodychRolnikow +
    platnoscDoBurakowCukrowych +
    ekoschematMiedzyplonyLubWsiewkiChecked +
    ekoschematPlanNawozeniaChecked +
    ekoschematZroznicowanaStrukturaUprawChecked +
    ekoschematWymieszanieObornikaChecked +
    ekoschematStosowanieNawozowNaturalnychChecked +
    ekoschematUproszczoneSystemyUprawyChecked +
    ekoschematWymieszanieSlomyZGlebaChecked +
    ekoschematIntegrowanaProdukcjaRoslinChecked +
    ekoschematBiologicznaOchronaUprawChecked +
    innyEkoschematChecked
  );
  supplementResult = Math.round(supplementResult*100);

  document.querySelector('#results-divs').innerHTML = ((revenueResult + supplementResult)/100 + " zł/ha");
}