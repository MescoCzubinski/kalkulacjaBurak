document.addEventListener('DOMContentLoaded', () => {
    costDisplay();
    revenuesDisplay();
    fertilizersDisplay();
    pestManagementDisplay();

    springCalculation();
    revenuesCalculation();
    fertilizersCalculation();
    pestManagementCalculation();
});

document.querySelector('#reset').addEventListener('click', () => {
    costDisplay();
    revenuesDisplay();
    fertilizersDisplay();
    pestManagementDisplay();
});

document.addEventListener('input', () => {
    springCalculation();
    revenuesCalculation();
    fertilizersCalculation();
    pestManagementCalculation();
});

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


function costDisplay() {
    let springCosts = "";

    for (let i = 0; i < springNames.length; i++) {
        springCosts += `
            <div>
                <div class="spring-cost-name">${springNames[i]}</div>
            </div>
            <div class="spring-cost">
                <label>
                    <div class="value">
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${springValues[i]}" id="${springUnitsIDs[i]}-value"></input>
                        <div class="unit">${springUnits[i]}</div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${springValueValue[i]}" id="${springUnitsIDs[i]}-amount"></input>
                        <div class="unit">${springUnitsValue[i]}</div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" id="${springUnitsIDs[i]}-result"></input>
                        <div class="unit">${springUnits[i]}</div>
                    </div>
                </label>
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


function fertilizersDisplay() {
    let fertilizers = "";

    for (let i = 0; i < 10; i++) {
        fertilizers += `
                <div>
                    <input class="spring-cost-name" type="text" value="Nawóz ${i+1}"></div>
                </div>
                <div class="spring-cost">
                    <label>
                        <div class="value">
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${fertilizersValuesValue[i]}" id="nawoz-${i+1}-value"></input>
                            <div class="unit">${fertilizersUnitsValue[i]}</div>
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${fertilizersValuesAmount[i]}" id="nawoz-${i+1}-amount"></input>
                            <div class="unit">${fertilizersUnitsAmount[i]}</div>
                            <input type="text" inputmode="numeric" pattern="[0-9]*" id="nawoz-${i+1}-result"></input>
                            <div class="unit">zł/ha</div>
                        </div>
                    </label>
                </div>
            `;
    }

    for (let i = 10; i < 14; i++) {
        fertilizers += `
                <div>
                    <input class="spring-cost-name" type="text" value="Nawóz dolistny ${i-9}"></div>
                </div>
                <div class="spring-cost">
                    <label>
                        <div class="value">
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${fertilizersValuesValue[i]}" id="nawoz-${i+1}-value"></input>
                            <div class="unit">${fertilizersUnitsValue[i]}</div>
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${fertilizersValuesAmount[i]}" id="nawoz-${i+1}-amount"></input>
                            <div class="unit">${fertilizersUnitsAmount[i]}</div>
                            <input type="text" inputmode="numeric" pattern="[0-9]*" id="nawoz-${i+1}-result"></input>
                            <div class="unit">zł/ha</div>
                        </div>
                    </label>
                </div>
            `;
    }

    document.querySelector('#fertilizers-divs').innerHTML = fertilizers;
}

let globalIndex = 0;
function pestManagementDisplay(){
    let pestManagement = "";
    for(let j=0; j<4; j++){
        for (let i = 0; i < 5; i++) {
            pestManagement += `
                    <div>
                        <input class="spring-cost-name" type="text" value="Herbicyd ${i+1} do zabiegu ${j+1}"></div>
                    </div>
                    <div class="spring-cost">
                        <label>
                            <div class="value">
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                                <div class="unit">zł/l, kg</div>
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                                <div class="unit">l, kg/ha</div>
                                <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                                <div class="unit">zł/ha</div>
                            </div>
                        </label>
                    </div>
                `;
                globalIndex++;
        }
        pestManagement += `
            <div>
                <input class="spring-cost-name" type="text" value="Adiuwant do zabiegu ${j+1}"></div>
            </div>
            <div class="spring-cost">
                <label>
                    <div class="value">
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                        <div class="unit"></div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                        <div class="unit"></div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                        <div class="unit">zł/ha</div>
                    </div>
                </label>
            </div>
        `;
        globalIndex++;
    }

    for(let j=0; j<3; j++){
        for (let i = 0; i < 3; i++) {
            pestManagement += `
                    <div>
                        <input class="spring-cost-name" type="text" value="Fungicyd ${i+1} do zabiegu ${j+1}"></div>
                    </div>
                    <div class="spring-cost">
                        <label>
                            <div class="value">
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                                <div class="unit">zł/l, kg</div>
                                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                                <div class="unit">l, kg/ha</div>
                                <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                                <div class="unit">zł/ha</div>
                            </div>
                        </label>
                    </div>
                `;
                globalIndex++;
        }
        pestManagement += `
            <div>
                <input class="spring-cost-name" type="text" value="Adiuwant do zabiegu ${j+1}"></div>
            </div>
            <div class="spring-cost">
                <label>
                    <div class="value">
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                        <div class="unit"></div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                        <div class="unit"></div>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                        <div class="unit">zł/ha</div>
                    </div>
                </label>
            </div>
        `;
        globalIndex++;
    }

    for (let i = 0; i < 5; i++) {
        pestManagement += `
                <div>
                    <input class="spring-cost-name" type="text" value="Insektycyd ${i+1}"></div>
                </div>
                <div class="spring-cost">
                    <label>
                        <div class="value">
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                            <div class="unit">zł/l, kg</div>
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                            <div class="unit">l, kg/ha</div>
                            <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                            <div class="unit">zł/ha</div>
                        </div>
                    </label>
                </div>
            `;
            globalIndex++;
    }

    pestManagement += `
    <div>
        <input class="spring-cost-name" type="text" value="Moluskocyd (na ślimaki)"></div>
    </div>
    <div class="spring-cost">
        <label>
            <div class="value">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                <div class="unit">zł/kg</div>
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                <div class="unit">kg/ha</div>
                <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                <div class="unit">zł/ha</div>
            </div>
        </label>
    </div>
    `;
    globalIndex++;

    pestManagement += `
    <div>
        <input class="spring-cost-name" type="text" value="Biopreparat 1"></div>
    </div>
    <div class="spring-cost">
        <label>
            <div class="value">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                <div class="unit">zł/l, kg</div>
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                <div class="unit">l, kg/ha</div>
                <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                <div class="unit">zł/ha</div>
            </div>
        </label>
    </div>
    `;
    globalIndex++;

    pestManagement += `
    <div>
        <input class="spring-cost-name" type="text" value="Biopreparat 1"></div>
    </div>
    <div class="spring-cost">
        <label>
            <div class="value">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementValue[globalIndex]}" id="pestManagement-${globalIndex}-value"></input>
                <div class="unit">zł/l, kg</div>
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${pestManagementAmount[globalIndex]}" id="pestManagement-${globalIndex}-amount"></input>
                <div class="unit">l, kg/ha</div>
                <input type="text" inputmode="numeric" pattern="[0-9]*" id="pestManagement-${globalIndex}-result"></input>
                <div class="unit">zł/ha</div>
            </div>
        </label>
    </div>
    `;
    globalIndex++;

    document.querySelector('#pest-management-divs').innerHTML = pestManagement;
}


function revenuesCalculation() {
    const values = {};
  
    revenuesIDs.forEach((id) => {
      const element = document.querySelector(`#${id}`);
      let value = element.value;
      value = textToNumber(value); // Assuming textToNumber is defined
      element.value = value;
      values[id] = parseFloat(value.replace(/\s+/g, ''));
    });
  
    // Perform specific calculations
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
  
    // Handling checkbox-based eco-schemes
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
  
    document.querySelector('#results-divs').innerHTML = ((revenueResult + supplementResult) / 100 + " zł/ha");
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
        elementResult.value = (Number(value) * Number(amount));
    });
}


function fertilizersCalculation() {
    for(let i=0; i<14; i++) {
        const elementValue = document.querySelector(`#nawoz-${i+1}-value`);
        let value = elementValue.value;
        value = textToNumber(value);
        elementValue.value = value;
        value = parseFloat(value.replace(/\s+/g, ''));

        const elementAmount = document.querySelector(`#nawoz-${i+1}-amount`);
        let amount = elementAmount.value;
        amount = textToNumber(amount);
        elementAmount.value = amount;
        amount = parseFloat(amount.replace(/\s+/g, ''));

        const elementResult = document.querySelector(`#nawoz-${i+1}-result`);

        if(i < 10){
            elementResult.value = (Number(value) * Number(amount)/1000);
        } else {
            elementResult.value = (Number(value) * Number(amount));
        }
    }
}

function pestManagementCalculation() {
    for(let i=0; i<globalIndex; i++) {
        const elementValue = document.querySelector(`#pestManagement-${i}-value`);
        let value = elementValue.value;
        value = textToNumber(value);
        elementValue.value = value;
        value = parseFloat(value.replace(/\s+/g, ''));

        const elementAmount = document.querySelector(`#pestManagement-${i}-amount`);
        let amount = elementAmount.value;
        amount = textToNumber(amount);
        elementAmount.value = amount;
        amount = parseFloat(amount.replace(/\s+/g, ''));

        const elementResult = document.querySelector(`#pestManagement-${i}-result`);

        elementResult.value = (Number(value) * Number(amount));
    }
}

