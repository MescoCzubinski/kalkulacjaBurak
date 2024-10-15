document.addEventListener('DOMContentLoaded', revenuesDisplay)
function revenuesDisplay(){
  let revenuesInputIndex = 0;
  let revenue = "";
  let supplement = "";

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

  for (i = 0; i < supplements.length; i++) {
    supplement += `
        <div class="supplement">
    `;

    if (supplements[i].startsWith('ekoschemat')) {
        supplement += `<input type="checkbox" checked class="supplements-checkbox" value="${supplementsValues[i]}" id="${revenuesIDs[revenuesInputIndex]}">`;
    }

    supplement += `
            <div class="supplement-name">${supplements[i]}</div> 
            <div class="value">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${supplementsValues[i]}" id="${revenuesIDs[revenuesInputIndex]}">
                <div class="unit">zł/ha</div>
            </div>
        </div>
    `;

    revenuesInputIndex++;
}

  document.querySelector('#revenues-divs').innerHTML = revenue;
  document.querySelector('#supplements-divs').innerHTML = supplement;

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

  const elementPodstawoweWsparcieDochodow = document.querySelector("#podstawowe-wsparcie-dochodow");
  const elementPlatnoscRedystrybucyjna = document.querySelector("#platnosc-redystrybucyjna");
  const elementPlatnoscDlaMlodychRolnikow = document.querySelector("#platnosc-dla-mlodych-rolnikow");
  const elementPlatnoscDoBurakowCukrowych = document.querySelector("#platnosc-do-burakow-cukrowych");

  const elementEkoschematMiedzyplonyLubWsiewki = document.querySelector("#ekoschemat-miedzyplony-lub-wsiewki");
  const elementEkoschematPlanNawozenia = document.querySelector("#ekoschemat-plan-nawozenia");
  const elementEkoschematZroznicowanaStrukturaUpraw = document.querySelector("#ekoschemat-zroznicowana-struktura-upraw");
  const elementEkoschematWymieszanieObornika = document.querySelector("#ekoschemat-wymieszanie-obornika");
  const elementEkoschematStosowanieNawozowNaturalnych = document.querySelector("#ekoschemat-stosowanie-nawozow-naturalnych");
  const elementEkoschematUproszczoneSystemyUprawy = document.querySelector("#ekoschemat-uproszczone-systemy-uprawy");
  const elementEkoschematWymieszanieSlomyZGlebą = document.querySelector("#ekoschemat-wymieszanie-slomy-z-gleba");
  const elementEkoschematIntegrowanaProdukcjaRoslin = document.querySelector("#ekoschemat-integrowana-produkcja-roslin");
  const elementEkoschematBiologicznaOchronaUpraw = document.querySelector("#ekoschemat-biologiczna-ochrona-upraw");
  const elementEkoschemat = document.querySelector("#ekoschemat");

  elementIloscWyslodkow.value = (Number(elementZakladanyPlon.value)/2);
  elementPlonPozakontraktowy.value = (Number(elementZakladanyPlon.value) - Number(elementPlonZKontraktacji.value));

  let result = (Number(elementPlonZKontraktacji.value)*Number(elementCenaBurakowKontraktowych.value))+(Number(elementPlonPozakontraktowy.value)*Number(elementCenaBurakowPozakontraktowych.value))+(Number(elementIloscWyslodkow.value)*Number(elementCenaWyslodkow.value));
  result = Math.round(result*100);

  let elementEkoschematMiedzyplonyLubWsiewkiChecked = elementEkoschematMiedzyplonyLubWsiewki.checked ? Number(elementEkoschematMiedzyplonyLubWsiewki.value) : 0;
  let elementEkoschematPlanNawozeniaChecked = elementEkoschematPlanNawozenia.checked ? Number(elementEkoschematPlanNawozenia.value) : 0;
  let elementEkoschematZroznicowanaStrukturaUprawChecked = elementEkoschematZroznicowanaStrukturaUpraw.checked ? Number(elementEkoschematZroznicowanaStrukturaUpraw.value) : 0;
  let elementEkoschematWymieszanieObornikaChecked = elementEkoschematWymieszanieObornika.checked ? Number(elementEkoschematWymieszanieObornika.value) : 0;
  let elementEkoschematStosowanieNawozowNaturalnychChecked = elementEkoschematStosowanieNawozowNaturalnych.checked ? Number(elementEkoschematStosowanieNawozowNaturalnych.value) : 0;
  let elementEkoschematUproszczoneSystemyUprawyChecked = elementEkoschematUproszczoneSystemyUprawy.checked ? Number(elementEkoschematUproszczoneSystemyUprawy.value) : 0;
  let elementEkoschematWymieszanieSlomyZGlebąChecked = elementEkoschematWymieszanieSlomyZGlebą.checked ? Number(elementEkoschematWymieszanieSlomyZGlebą.value) : 0;
  let elementEkoschematIntegrowanaProdukcjaRoslinChecked = elementEkoschematIntegrowanaProdukcjaRoslin.checked ? Number(elementEkoschematIntegrowanaProdukcjaRoslin.value) : 0;
  let elementEkoschematBiologicznaOchronaUprawChecked = elementEkoschematBiologicznaOchronaUpraw.checked ? Number(elementEkoschematBiologicznaOchronaUpraw.value) : 0;
  let elementEkoschematChecked = elementEkoschemat.checked ? Number(elementEkoschemat.value) : 0;

  let suppResult = (
    Number(elementPodstawoweWsparcieDochodow.value) +
    Number(elementPlatnoscRedystrybucyjna.value) +
    Number(elementPlatnoscDlaMlodychRolnikow.value) +
    Number(elementPlatnoscDoBurakowCukrowych.value) +
    elementEkoschematMiedzyplonyLubWsiewkiChecked +
    elementEkoschematPlanNawozeniaChecked +
    elementEkoschematZroznicowanaStrukturaUprawChecked +
    elementEkoschematWymieszanieObornikaChecked +
    elementEkoschematStosowanieNawozowNaturalnychChecked +
    elementEkoschematUproszczoneSystemyUprawyChecked +
    elementEkoschematWymieszanieSlomyZGlebąChecked +
    elementEkoschematIntegrowanaProdukcjaRoslinChecked +
    elementEkoschematBiologicznaOchronaUprawChecked +
    elementEkoschematChecked
  );
  suppResult = Math.round(suppResult*100);

  document.querySelector('#results-divs').innerHTML = ((result + suppResult)/100 + "zł/ha");
}