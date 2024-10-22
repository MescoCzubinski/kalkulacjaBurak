function revenuesDisplay(){
    let revenuesInputIndex = 0;
    let revenue = "";
    let supplement = "";
    let ecoscheme = "";

    for(i=0; i<revenues.length; i++){
        revenue += `
                    <div class="revenue">
                        <label>
                            <div class="revenue-name">${revenues[i]}</div> 
                            <div class="value">
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${revenuesValues[i]}" id="${revenuesIDs[revenuesInputIndex]}"></input>
                                <div class="unit">${revenuesUnits[i]}</div>
                            </div>
                        </label>
                    </div>
                    `;
        revenuesInputIndex++;
    };

    for(i=0; i<supplements.length; i++){
        supplement += `
                    <div class="supplement">
                        <label>
                            <div class="supplement-name">${supplements[i]}</div> 
                            <div class="value">
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${supplementsValues[i]}" id="${revenuesIDs[revenuesInputIndex]}"></input>
                                <div class="unit">zł/ha</div>
                            </div>
                        </label>
                    </div>
                    `;
        revenuesInputIndex++;
    };

  for (i = 0; i < ecoschemes.length; i++) {
    ecoscheme += `
                    <div class="ecoscheme">
                        <label>
                            <input type="checkbox" class="ecoscheme-checkbox" id="${revenuesIDs[revenuesInputIndex] + "-checkbox"}"></input>
                            <div class="ecoscheme-name">${ecoschemes[i]}</div> 
                            <div class="value">
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${ecoschemesValues[i]}" id="${revenuesIDs[revenuesInputIndex]}"></input>
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

function springDisplay() {
    let springCosts = "";

    for (let i = 0; i < springNames.length; i++) {
        springCosts += `
        <div class="kalkulator">
            <div class="kalkulator-linijka">
                <div class="spring-cost-name">${springNames[i]}</div>
            </div>
            <div class="kalkulator-linijka">
                <div class="kalkulator-linijka-nazwa"><p>Cena:</p></div>
                <div class="value">
                    <input type="text" class="price" inputmode="numeric" pattern="[0-9]*" id="${springUnitsIDs[i]}-value">
                    <div class="unit">${springUnits[i]}</div>
                </div>
            </div>
            <div class="kalkulator-linijka">
                <div class="kalkulator-linijka-nazwa"><p>Dawka:</p></div>
                <div class="value">
                    <input type="text" class="amount" inputmode="numeric" pattern="[0-9]*" id="${springUnitsIDs[i]}-amount">
                    <div class="unit">${springUnitsValue[i]}</div>
                </div>
            </div>
            <div class="kalkulator-linijka">
                <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
                <div class="value">
                    <span class="result kalkulator-linijka-nazwa" id="${springUnitsIDs[i]}-result"></span>
                </div>
            </div>
        </div>
    `;
    }
    springCosts += '<div class="kalkulator"></div>'
    for (let i = 0; i < springNamesOneVaue.length; i++) {
        springCosts += `
            <div class="revenue">
                <label>
                    <div class="revenue-name">${springNamesOneVaue[i]}</div>
                    <div class="value">
                        <input type="text" inputmode="numeric" pattern="[0-9]*"  id="wiosna-jedna-wartosc-${i}"></input>
                        <div class="unit">${springUnitsOneVaue[i]}</div>
                    </div>
                </label>    
            </div>
        `;
    }

    document.querySelector('#spring-costs-divs').innerHTML = springCosts;
}

const addCalculatorFertilizer = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa nawozu">
            <input type="button" class="add" value="+">
            <input type="button" class="remove" value="-">
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Cena:</p></div>
            <div class="value">
                <input type="text" class="price" placeholder="cena za t">
                <div class="unit">zł/t</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Ilość/dawka:</p></div>
            <div class="value">
                <input type="text" class="amount" placeholder="ile t na ha">
                <div class="unit">t</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
            <div class="value">
                <span class="result kalkulator-linijka-nazwa"></span>
            </div>
        </div>
    `;

    const parentElement = document.getElementById(parentId);
    parentElement.appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);

    calculator.querySelector('.remove').addEventListener('click', () => {
        if (parentElement.getElementsByClassName('kalkulator').length > 1) {
            calculator.remove();
        }
    });

    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorFertilizer(parentId);
    });
};

const addCalculatorFertilizerOnleaf = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa nawozu dolistnego">
            <input type="button" class="add" value="+">
            <input type="button" class="remove" value="-">
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Cena:</p></div>
            <div class="value">
                <input type="text" class="price" placeholder="cena za l/kg">
                <div class="unit">zł/l, kg</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Ilość/dawka:</p></div>
            <div class="value">
                <input type="text" class="amount" placeholder="ile l/kg na ha">
                <div class="unit">l, kg/ha</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
            <div class="value">
                <span class="result kalkulator-linijka-nazwa"></span>
            </div>
        </div>
    `;

    const parentElement = document.getElementById(parentId);
    parentElement.appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);

    calculator.querySelector('.remove').addEventListener('click', () => {
        if (parentElement.getElementsByClassName('kalkulator').length > 1) {
            calculator.remove();
        }
    });

    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorFertilizerOnleaf(parentId);
    });
};

const addCalculatorPestManagement = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa środka ochrony roślin">
            <input type="button" class="add" value="+">
            <input type="button" class="remove" value="-">
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Cena:</p></div>
            <div class="value">
                <input type="text" class="price" placeholder="cena za l/kg">
                <div class="unit">zł/l, kg</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Ilość/dawka:</p></div>
            <div class="value">
                <input type="text" class="amount" placeholder="ile l/kg na ha">
                <div class="unit">l, kg/ha</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
            <div class="value">
                <span class="result kalkulator-linijka-nazwa"></span>
            </div>
        </div>
    `;

    const parentElement = document.getElementById(parentId);
    parentElement.appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);

    calculator.querySelector('.remove').addEventListener('click', () => {
        if (parentElement.getElementsByClassName('kalkulator').length > 1) {
            calculator.remove();
        }
    });

    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorPestManagement(parentId);
    });
};

const addCalculatorAdiuwant = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa adiuwanta">
            <input type="button" class="add" value="+">
            <input type="button" class="remove" value="-">
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Cena:</p></div>
            <div class="value">
                <input type="text" class="price" placeholder="cena za l/kg">
                <div class="unit">zł/l, kg</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Ilość/dawka:</p></div>
            <div class="value">
                <input type="text" class="amount" placeholder="ile l/kg na ha">
                <div class="unit">l, kg/ha</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
            <div class="value">
                <span class="result kalkulator-linijka-nazwa"></span>
            </div>
        </div>
    `;

    const parentElement = document.getElementById(parentId);
    parentElement.appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);

    calculator.querySelector('.remove').addEventListener('click', () => {
        if (parentElement.getElementsByClassName('kalkulator').length > 1) {
            calculator.remove();
        }
    });

    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorAdiuwant(parentId);
    });
};

const addCalculatorBiopreparat = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa biopreparatu">
            <input type="button" class="add" value="+">
            <input type="button" class="remove" value="-">
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Cena:</p></div>
            <div class="value">
                <input type="text" class="price" placeholder="cena za l/kg">
                <div class="unit">zł/l, kg</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Ilość/dawka:</p></div>
            <div class="value">
                <input type="text" class="amount" placeholder="ile l/kg na ha">
                <div class="unit">l, kg/ha</div>
            </div>
        </div>
        <div class="kalkulator-linijka">
            <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
            <div class="value">
                <span class="result kalkulator-linijka-nazwa"></span>
            </div>
        </div>
    `;

    const parentElement = document.getElementById(parentId);
    parentElement.appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);

    calculator.querySelector('.remove').addEventListener('click', () => {
        if (parentElement.getElementsByClassName('kalkulator').length > 1) {
            calculator.remove();
        }
    });

    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorBiopreparat(parentId);
    });
};
    
const calculate = (event) => {
    const calculator = event.target.closest('.kalkulator');

    let elementPrice = calculator.querySelector('.price');
    let price = elementPrice.value;
    price = textToNumber(price);
    elementPrice.value = price;
    price = parseFloat(price.replace(/\s+/g, ''));

    let elementAmount = calculator.querySelector('.amount');
    let amount = elementAmount.value;
    amount = textToNumber(amount);
    elementAmount.value = amount;
    amount = parseFloat(amount.replace(/\s+/g, ''));

    let result = (Math.round((price * amount) * 100)) / 100;
    if (isNaN(result)) {
        result = 0;
    }

    if(!isNaN(result) && result !== Infinity){
        calculator.querySelector('.result').textContent = result + " zł/ha";
        calculator.setAttribute('data-result', result);  // Store the result in a data attribute
    }
}

const getFinalResult = (parentId) => {
    const parentElement = document.getElementById(parentId);
    const calculators = parentElement.getElementsByClassName('kalkulator');
    let totalResult = 0;

    for (let calculator of calculators) {
        const result = parseFloat(calculator.getAttribute('data-result')) || 0;
        totalResult += result;
    }

    totalResult = Math.round(totalResult * 100) / 100;  // Round the final result
    return totalResult;
};

function revenuesCalculation() {
    const values = {};
  
    revenuesIDs.forEach((id) => {
        const element = document.querySelector(`#${id}`);
        let value = element.value;
        value = textToNumber(value);
        element.value = value;
        values[id] = parseFloat(value.replace(/\s+/g, ''));
    });
  
    values["ilosc-wyslodkow"] = (values["zakladany-plon"] / 2);
    document.querySelector("#ilosc-wyslodkow").value = values["ilosc-wyslodkow"];
  
    values["plon-pozakontraktowy"] = (values["zakladany-plon"] - values["plon-z-kontraktacji"]);
    document.querySelector("#plon-pozakontraktowy").value = values["plon-pozakontraktowy"];
  
    let revenueResult = (
        values["plon-z-kontraktacji"] * values["cena-burakow-kontraktowych"] +
        values["plon-pozakontraktowy"] * values["cena-burakow-pozakontraktowych"] +
        values["ilosc-wyslodkow"] * values["cena-wyslodkow"]
    );
    revenueResult = Math.round(revenueResult * 100);

    const ecoSchemeIDs = [
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
  
    let supplementResult = values["podstawowe-wsparcie-dochodow"] +
        values["platnosc-redystrybucyjna"] +
        values["platnosc-dla-mlodych-rolnikow"] +
        values["platnosc-do-burakow-cukrowych"];
  
    ecoSchemeIDs.forEach((id) => {
        const checkbox = document.querySelector(`#${id}-checkbox`);
        supplementResult += checkbox.checked ? values[id] : 0;
    });
  
    supplementResult = Math.round(supplementResult * 100);

    let totalResult = (revenueResult + supplementResult) / 100; 
    if(totalResult !== Infinity && !isNaN(totalResult)){
        document.querySelector('#display-revenue').innerHTML = totalResult.toFixed(2) + " zł/ha"; 
    }  else {
        document.querySelector('#display-revenue').innerHTML = ""
    }
}

function soilCalculation(){
    const elementValue = document.querySelector('#badania-gleby-value');
    let value = elementValue.value;
    value = textToNumber(value);
    elementValue.value = value;

    const elementAmount = document.querySelector('#badania-gleby-amount');
    let amount = elementAmount.value;
    amount = textToNumber(amount);
    elementAmount.value = amount;

    const elementYears = document.querySelector('#badania-gleby-years');
    let years = elementYears.value;
    years = textToNumber(years);
    elementYears.value = years;

    const elementResult = document.querySelector('#badania-gleby-result');

    let calculation = Math.round((value * amount)/years*100)/100;

    if(calculation !== Infinity && !isNaN(calculation)){
        elementResult.innerHTML = calculation + " zł/ha";
    } else {
        elementResult.innerHTML = "";
    }
}

function costsCalculation() {
    const elementBadaniaGleby = document.querySelector('#badania-gleby-result');
    const elementWapno = document.querySelector('#wapno-result');
    const elementNawozNaturalny = document.querySelector('#nawoz-naturalny-result');
    const elementMiedzyplon = document.querySelector('#miedzyplon-result');

    const elementPrzedplon = document.querySelector('#uprawa-przedplon-value');
    let przedplon = elementPrzedplon.value;
    przedplon = textToNumber(przedplon);
    elementPrzedplon.value = przedplon;
    przedplon = parseFloat(przedplon.replace(/\s+/g, ''));

    const elementUprawaGleboka = document.querySelector('#uprawa-gleboka-resume');
    let uprawaGleboka = elementUprawaGleboka.value;
    uprawaGleboka = textToNumber(uprawaGleboka);
    elementUprawaGleboka.value = uprawaGleboka;
    uprawaGleboka = parseFloat(uprawaGleboka.replace(/\s+/g, ''));

    const elementHerbicydGlifosad = document.querySelector('#herbicyd-z-glifosatem-result');
    const elementAdiuwantGlifosad = document.querySelector('#adiuwant-do-glifosatu-result');
    const elementNasionaBuraka = document.querySelector('#nasiona-buraka-result');
    const elementUprawaPlytka = document.querySelector('#wiosna-jedna-wartosc-0');
    const elementUprawaPrzedsiewna = document.querySelector('#wiosna-jedna-wartosc-1');
    const elementMulczowanie = document.querySelector('#wiosna-jedna-wartosc-2');
    const elementSiewPunktowe = document.querySelector('#wiosna-jedna-wartosc-3');

    const elementZabiegNawozenia = document.querySelector('#fertilizer-measure-result');
    const elementZabiegOpryskiwania = document.querySelector('#pest-management-measure-result');
    const elementZabiegOpielania = document.querySelector('#opielanie-measure-result');

    const elementZbior = document.querySelector('#harvest-cost');
    let zbior = elementZbior.value;
    zbior = textToNumber(zbior);
    elementZbior.value = zbior;
    zbior = parseFloat(zbior.replace(/\s+/g, ''));

    const elementZaladunek = document.querySelector('#onloading-cost');
    let zaladunek = elementZaladunek.value;
    zaladunek = textToNumber(zaladunek);
    elementZaladunek.value = zaladunek;
    zaladunek = parseFloat(zaladunek.replace(/\s+/g, ''));

    const elementTransport = document.querySelector('#transport-cost');
    let transport = elementTransport.value;
    transport = textToNumber(transport);
    elementTransport.value = transport;
    transport = parseFloat(transport.replace(/\s+/g, ''));

    const elementOkryciePryzmy = document.querySelector('#cover-cost');
    let pryzma = elementOkryciePryzmy.value;
    pryzma = textToNumber(pryzma);
    elementOkryciePryzmy.value = pryzma;
    pryzma = parseFloat(pryzma.replace(/\s+/g, ''));

    const elementUbezpieczenie = document.querySelector('#insurance-cost');
    let ubezpieczenia = elementUbezpieczenie.value;
    ubezpieczenia = textToNumber(ubezpieczenia);
    elementUbezpieczenie.value = ubezpieczenia;
    ubezpieczenia = parseFloat(ubezpieczenia.replace(/\s+/g, ''));

    const elementPodatek = document.querySelector('#tax-cost');
    let podatek = elementPodatek.value;
    podatek = textToNumber(podatek);
    elementPodatek.value = podatek;
    podatek = parseFloat(podatek.replace(/\s+/g, ''));

    const elementCzynsz = document.querySelector('#rent-cost');
    let czynsz = elementCzynsz.value;
    czynsz = textToNumber(czynsz);
    elementCzynsz.value = czynsz;
    czynsz = parseFloat(czynsz.replace(/\s+/g, ''));

    const elementPlonTony = document.querySelector('#zakladany-plon');

    // jesień
    let totalResult =  (Number(elementBadaniaGleby.innerHTML.replace(" zł/ha", "")) + 
                        Number(elementWapno.innerHTML.replace(" zł/ha", "")) +
                        Number(elementNawozNaturalny.innerHTML.replace(" zł/ha", "")) +
                        Number(elementMiedzyplon.innerHTML.replace(" zł/ha", "")) +
                        Number(elementPrzedplon.value) +
                        Number(elementUprawaGleboka.value))

    //wiosna
    totalResult +=   (Number(elementHerbicydGlifosad.innerHTML.replace(" zł/ha", "")) + 
                        Number(elementAdiuwantGlifosad.innerHTML.replace(" zł/ha", "")) +
                        Number(elementNasionaBuraka.innerHTML.replace(" zł/ha", "")) +
                        Number(elementUprawaPlytka.value) +
                        Number(elementUprawaPrzedsiewna.value) +
                        Number(elementMulczowanie.value) +
                        Number(elementSiewPunktowe.value))

    //zabiegi oprysków
    totalResult += (Number(elementZabiegNawozenia.innerHTML.replace(" zł/ha", "")) + 
                    Number(elementZabiegOpryskiwania.innerHTML.replace(" zł/ha", "")) +
                    Number(elementZabiegOpielania.innerHTML.replace(" zł/ha", "")))


    //zbiór
    totalResult +=   (Number(elementZbior.value) + ((Number(elementPlonTony.value)) * (Number(elementZaladunek.value) + Number(elementTransport.value) + Number(elementOkryciePryzmy.value))))

    //zarzadzanie
    totalResult +=   (Number(elementUbezpieczenie.value) + Number(elementPodatek.value) + Number(elementCzynsz.value))

    const nawozyTotal = getFinalResult('fertilizer-divs');
    const nawozyDolistneTotal = getFinalResult('fertilizer-onleaf-divs');
    const ochronaTotal = getFinalResult('pest-management-divs');
    const adiuwantTotal = getFinalResult('adiuwant-divs');
    const biopreparatTotal = getFinalResult('biopreparat-divs');

    totalResult += (nawozyTotal + nawozyDolistneTotal + ochronaTotal + adiuwantTotal + biopreparatTotal);

    totalResult = Math.round(totalResult*100)/100;

    document.querySelector('#display-costs').innerHTML = totalResult + " zł/ha"; 

    // if(totalResult !== Infinity && !isNaN(totalResult)){
    // } else {
    //     document.querySelector('#display-costs').innerHTML = "";
    // }
}

function springCalculation() {
    springUnitsIDs.forEach((id) => {
        const elementValue = document.querySelector(`#${id}-value`);
        let value = elementValue.value;
        value = textToNumber(value);
        elementValue.value = value;
        value = parseFloat(value.replace(/\s+/g, ''));

        const elementAmount = document.querySelector(`#${id}-amount`);
        let amount = elementAmount.value;
        amount = textToNumber(amount);
        elementAmount.value = amount;
        amount = parseFloat(amount.replace(/\s+/g, ''));

        const elementResult = document.querySelector(`#${id}-result`);
        let calculation = (Number(value) * Number(amount))
        if(!isNaN(calculation) && calculation !== Infinity) { 
            elementResult.innerHTML = calculation + " zł/ha";
        }  else {
            elementResult.innerHTML = ""
        }
    });
}

function longCalculation(){
    autumnUnitsIDs.forEach((id) => {
        const elementValue = document.querySelector(`#${id}-value`);
        let value = elementValue.value;
        value = textToNumber(value);
        elementValue.value = value;
        value = parseFloat(value.replace(/\s+/g, ''));

        const elementAmount = document.querySelector(`#${id}-amount`);
        let amount = elementAmount.value;
        amount = textToNumber(amount);
        elementAmount.value = amount;
        amount = parseFloat(amount.replace(/\s+/g, ''));

        const elementYears = document.querySelector(`#${id}-years`);
        let years = elementYears.value;
        years = textToNumber(years);
        elementYears.value = years;
        years = parseFloat(years.replace(/\s+/g, ''));

        const elementMeasure = document.querySelector(`#${id}-measure`);
        let measure = elementMeasure.value;
        measure = textToNumber(measure);
        elementMeasure.value = measure;
        measure = parseFloat(measure.replace(/\s+/g, ''));

        const elementOnload = document.querySelector(`#${id}-onload`);
        let onload = elementOnload.value;
        onload = textToNumber(onload);
        elementOnload.value = onload;
        onload = parseFloat(onload.replace(/\s+/g, ''));

        const elementResult = document.querySelector(`#${id}-result`);


        calculation = Math.round(((Number(amount) * Number(onload)) + (Number(value)*Number(amount)) + measure)*100/Number(years))/100;

        if(!isNaN(calculation) && calculation !== Infinity) { 
            elementResult.innerHTML = calculation.toFixed(2) + " zł/ha";
        }  else {
            elementResult.innerHTML = ""
        }
    });
}

document.addEventListener('input', () => {
    springCalculation();
    longCalculation();
    soilCalculation();
    revenuesCalculation();
    costsCalculation();
});

document.addEventListener('DOMContentLoaded', () => {

    addCalculatorFertilizer('fertilizer-divs');
    addCalculatorFertilizerOnleaf('fertilizer-onleaf-divs');
    addCalculatorPestManagement('pest-management-divs');
    addCalculatorAdiuwant('adiuwant-divs');
    addCalculatorBiopreparat('biopreparat-divs');

    revenuesDisplay();
    springDisplay();

    const groups = [
        { buttonId: 'group-button-revenue', divId: 'revenues-divs' },
        { buttonId: 'group-button-supplement', divId: 'supplements-divs' },
        { buttonId: 'group-button-ecoscheme', divId: 'ecoschemes-divs' },
        { buttonId: 'group-button-autumn-costs', divId: 'autumn-costs-divs' },
        { buttonId: 'group-button-spring-costs', divId: 'spring-costs-divs' },
        { buttonId: 'group-button-fertilizer', divId: 'fertilizer-divs' },
        { buttonId: 'group-button-fertilizer-onleaf', divId: 'fertilizer-onleaf-divs' },
        { buttonId: 'group-button-pest-management', divId: 'pest-management-divs' },
        { buttonId: 'group-button-adiuwant', divId: 'adiuwant-divs' },
        { buttonId: 'group-button-biopreparat', divId: 'biopreparat-divs' },
        { buttonId: 'group-button-harvest', divId: 'harvest-divs' },
        { buttonId: 'group-button-management', divId: 'management-divs' }
    ];

    groups.forEach(group => {
        const div = document.querySelector(`#${group.divId}`);
        div.classList.add('none');
    });

    groups.forEach(group => {
        const button = document.querySelector(`#${group.buttonId}`);
        const div = document.querySelector(`#${group.divId}`);

        button.addEventListener('click', () => {
            if (div.classList.contains('none')) {
                div.classList.remove('none');
                button.value = 'zwiń'; 
            } else {
                div.classList.add('none');
                button.value = 'rozwiń'; 
            }
        });
    });

    //na początku:
    document.querySelector(`#revenues-divs`).classList.remove('none')
    document.querySelector(`#group-button-revenue`).value = "zwiń"
    
    springCalculation();
    longCalculation();
    soilCalculation();
    revenuesCalculation();
    costsCalculation();
});

document.addEventListener('click', () => {
    document.querySelector('#reset').addEventListener('click', () => {
        const elements = [
            document.querySelector('#badania-gleby-result'),
            document.querySelector('#wapno-result'),
            document.querySelector('#nawoz-naturalny-result'),
            document.querySelector('#miedzyplon-result'),
            document.querySelector('#herbicyd-z-glifosatem-result'),
            document.querySelector('#adiuwant-do-glifosatu-result'),
            document.querySelector('#nasiona-buraka-result'),
            document.querySelector('#fertilizer-measure-result'),
            document.querySelector('#pest-management-measure-result'),
            document.querySelector('#opielanie-measure-result')
        ]

        elements.forEach((element) => {
            element.innerHTML = "";
        })
    })

    document.querySelector('#ecoschemes-divs').addEventListener('click', ()=> {
        const elementMiedzyplonyEko = document.querySelector('#ekoschemat-miedzyplony-lub-wsiewki-checkbox');
        const elementPlanEko = document.querySelector('#ekoschemat-plan-nawozenia-checkbox');
        const elementObornikEko = document.querySelector('#ekoschemat-wymieszanie-obornika-checkbox');
        const elementNawozyEko = document.querySelector('#ekoschemat-stosowanie-nawozow-naturalnych-checkbox');
        const elementSystemyEko = document.querySelector('#ekoschemat-uproszczone-systemy-uprawy-checkbox');
        const elementMieszanieEko = document.querySelector('#ekoschemat-wymieszanie-slomy-z-gleba-checkbox');
        const elementIntegrowanaEko = document.querySelector('#ekoschemat-integrowana-produkcja-roslin-checkbox');
        const elementBiologicznaEko = document.querySelector('#ekoschemat-biologiczna-ochrona-upraw-checkbox');

        if (elementMiedzyplonyEko.checked) {
            elementSystemyEko.checked = false;
            elementSystemyEko.disabled = true;

            elementMieszanieEko.checked = false;
            elementMieszanieEko.disabled = true;
        } else {
            elementSystemyEko.disabled = false;
            elementMieszanieEko.disabled = false;
        }

        if(elementPlanEko.checked){
            elementIntegrowanaEko.checked = false;
            elementIntegrowanaEko.disabled = true;
        } else {
            elementIntegrowanaEko.disabled = false;
        }

        if(elementObornikEko.checked){
            elementNawozyEko.checked = false;
            elementNawozyEko.disabled = true;

            elementSystemyEko.checked = false;
            elementSystemyEko.disabled = true;

            elementMieszanieEko.checked = false;
            elementMieszanieEko.disabled = true;
        } else {
            elementNawozyEko.disabled = false;
            elementSystemyEko.disabled = false;
            elementMieszanieEko.disabled = false;
        }

        if(elementNawozyEko.checked) {
            elementObornikEko.checked = false;
            elementObornikEko.disabled = true;

            elementMieszanieEko.checked = false;
            elementMieszanieEko.disabled = true;
        } else {
            elementObornikEko.disabled = false;
            elementMieszanieEko.disabled = false;
        }

        if(elementSystemyEko.checked){
            elementMiedzyplonyEko.checked = false;
            elementMiedzyplonyEko.disabled = true;

            elementObornikEko.checked = false;
            elementObornikEko.disabled = true;

            elementMieszanieEko.checked = false;
            elementMieszanieEko.disabled = true;
        } else {
            elementMiedzyplonyEko.disabled = false;
            elementObornikEko.disabled = false;
            elementMieszanieEko.disabled = false;
        }

        if(elementMieszanieEko.checked){
            elementMiedzyplonyEko.checked = false;
            elementMiedzyplonyEko.disabled = true;

            elementObornikEko.checked = false;
            elementObornikEko.disabled = true;

            elementNawozyEko.checked = false;
            elementNawozyEko.disabled = true;

            elementSystemyEko.checked = false;
            elementSystemyEko.disabled = true;
        } else {
            elementMiedzyplonyEko.disabled = false;
            elementObornikEko.disabled = false;
            elementNawozyEko.disabled = false;
            elementSystemyEko.disabled = false;
        }

        if(elementIntegrowanaEko.checked) {
            elementPlanEko.checked = false;
            elementPlanEko.disabled = true;

            elementBiologicznaEko.checked = false;
            elementBiologicznaEko.disabled = true;
        } else {
            elementPlanEko.disabled = false;
            elementBiologicznaEko.disabled = false;
        }

        if(elementBiologicznaEko.checked){
            elementIntegrowanaEko.checked = false;
            elementIntegrowanaEko.disabled = true;
        } else {
            elementIntegrowanaEko.disabled = false;
        }
    })
})
