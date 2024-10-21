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
                            <input type="checkbox" checked class="ecoscheme-checkbox" id="${revenuesIDs[revenuesInputIndex] + "-checkbox"}"></input>
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
                    <input type="text" class="price" inputmode="numeric" pattern="[0-9]*" value="${springValues[i]}" id="${springUnitsIDs[i]}-value">
                    <div class="unit">${springUnits[i]}</div>
                </div>
            </div>
            <div class="kalkulator-linijka">
                <div class="kalkulator-linijka-nazwa"><p>Ilość/dawka:</p></div>
                <div class="value">
                    <input type="text" class="amount" inputmode="numeric" pattern="[0-9]*" value="${springValueValue[i]}" id="${springUnitsIDs[i]}-amount">
                    <div class="unit">${springUnitsValue[i]}</div>
                </div>
            </div>
            <div class="kalkulator-linijka">
                <div class="kalkulator-linijka-nazwa"><p>Koszt:</p></div>
                <div class="value">
                    <span class="result kalkulator-linijka-nazwa" id="${springUnitsIDs[i]}-result"></span>
                    <div class="unit">${springUnits[i]}</div>
                </div>
            </div>
        </div>

    `;
    }

    for (let i = 0; i < springNamesOneVaue.length; i++) {
        springCosts += `
            <div class="revenue">
                <label>
                    <div class="revenue-name">${springNamesOneVaue[i]}</div>
                    <div class="value">
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${springValuesOneVaue[i]}"></input>
                        <div class="unit">${springUnitsOneVaue[i]}</div>
                    </div>
                </label>
            </div>
        `;
    }

    document.querySelector('#spring-costs-divs').innerHTML = springCosts;
}

function harvestDisplay(){
    let harvestCost = "";

    harvestCost += `
        <div class="revenue">
            <label>
                <div class="revenue-name">Zbiór:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="1200"></input>
                    <div class="unit">zł/ha</div>
                </div>
            </label>
        </div>
        <div class="revenue">
            <label>
                <div class="revenue-name">Załadunek:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="2.5"></input>
                    <div class="unit">zł/t</div>
                </div>
            </label>
        </div>
        <div class="revenue">
            <label>
                <div class="revenue-name">Transport:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="10"></input>
                    <div class="unit">zł/t</div>
                </div>
            </label>
        </div>
        <div class="revenue">
            <label>
                <div class="revenue-name">Okrycie pryzmy:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="2"></input>
                    <div class="unit">zł/t</div>
                </div>
            </label>
        </div>
                `;

    document.querySelector('#harvest-divs').innerHTML = harvestCost;
}

function managementDisplay(){
    let managementCost = "";

    managementCost += `
        <div class="revenue">
            <label>
                <div class="revenue-name">Ubezpieczenie:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="120"></input>
                    <div class="unit">zł/ha</div>
                </div>
            </label>
        </div>
        <div class="revenue">
            <label>
                <div class="revenue-name">Załadunek:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="350"></input>
                    <div class="unit">zł/ha</div>
                </div>
            </label>
        </div>
        <div class="revenue">
            <label>
                <div class="revenue-name">Transport:</div>
                <div class="value">
                    <input type="text" inputmode="numeric" pattern="[0-9]*" value="1500"></input>
                    <div class="unit">zł/ha</div>
                </div>
            </label>
        </div>
                `;

    document.querySelector('#management-divs').innerHTML = managementCost;
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

    document.getElementById(parentId).appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);
    
    calculator.querySelector('.remove').addEventListener('click', () => calculator.remove());
    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorFertilizer(parentId);
    });
};

const addCalculatorFertilizerOnleaf = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa nawozu nalistnego">
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

    document.getElementById(parentId).appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);
    
    calculator.querySelector('.remove').addEventListener('click', () => calculator.remove());
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

    document.getElementById(parentId).appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);
    
    calculator.querySelector('.remove').addEventListener('click', () => calculator.remove());
    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorPestManagement(parentId);
    });
};

const addCalculatorAdiuwant = (parentId) => {
    const calculator = document.createElement('div');
    calculator.className = 'kalkulator';
    calculator.innerHTML = `
        <div class="kalkulator-linijka">
            <input type="text" class="product-name" placeholder="Nazwa adiuwantu">
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

    document.getElementById(parentId).appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);
    
    calculator.querySelector('.remove').addEventListener('click', () => calculator.remove());
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

    document.getElementById(parentId).appendChild(calculator);

    calculator.querySelector('.price').addEventListener('input', calculate);
    calculator.querySelector('.amount').addEventListener('input', calculate);
    
    calculator.querySelector('.remove').addEventListener('click', () => calculator.remove());
    calculator.querySelector('.add').addEventListener('click', () => {
        addCalculatorBiopreparat(parentId);
    });
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
    document.querySelector('#display-revenue').innerHTML = totalResult.toFixed(2); 
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
        elementResult.innerHTML = (Number(value) * Number(amount));
    });
}

const calculate = (event) => {
    const calculator = event.target.closest('.kalkulator');

    let elementPrice = calculator.querySelector('.price')
    let price = elementPrice.value;
    price = textToNumber(price);
    elementPrice.value = price;
    price = parseFloat(price.replace(/\s+/g, ''));
    
    let elementAmount = calculator.querySelector('.amount')
    let amount = elementAmount.value;
    amount = textToNumber(amount);
    elementAmount.value = amount;
    amount = parseFloat(amount.replace(/\s+/g, ''));

    const result = (Math.round((price * amount)*100))/100;
    if(isNaN(result)){
        result = 0;
    }
    calculator.querySelector('.result').textContent = result + "zł/ha";
}

document.addEventListener('input', () => {
    revenuesCalculation();
    springCalculation();
});

document.querySelector('#reset').addEventListener('click', () => {
    addCalculatorFertilizer('fertilizer-divs');
    addCalculatorFertilizerOnleaf('fertilizer-onleaf-divs');
    addCalculatorPestManagement('pest-management-divs');
    addCalculatorAdiuwant('adiuwant-divs');
    addCalculatorBiopreparat('biopreparat-divs');

    revenuesDisplay();
    springDisplay();
    harvestDisplay();
    managementDisplay();

    springCalculation();
    revenuesCalculation();
})

document.addEventListener('DOMContentLoaded', () => {

    addCalculatorFertilizer('fertilizer-divs');
    addCalculatorFertilizerOnleaf('fertilizer-onleaf-divs');
    addCalculatorPestManagement('pest-management-divs');
    addCalculatorAdiuwant('adiuwant-divs');
    addCalculatorBiopreparat('biopreparat-divs');

    revenuesDisplay();
    springDisplay();
    harvestDisplay();
    managementDisplay();

    revenuesCalculation();

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

    if(document.querySelector(`#spring-costs-divs`).classList.contains('none')){
        springCalculation();
    }
});


