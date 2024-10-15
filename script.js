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
                          <input type="text" inputmode="numeric" pattern="[0-9]*" value="${revenuesValues[i]}" id="${revenuesInputIndex}"></input>
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
        supplement += `<input type="checkbox" class="supplements-checkbox" id="${revenuesInputIndex}">`;
    }

    supplement += `
            <div class="supplement-name">${supplements[i]}</div> 
            <div class="value">
                <input type="text" inputmode="numeric" pattern="[0-9]*" value="${supplementsValues[i]}" id="${revenuesInputIndex}">
                <div class="unit">zł/ha</div>
            </div>
        </div>
    `;

    revenuesInputIndex++;
}

  document.querySelector('#revenues-divs').innerHTML = revenue;
  document.querySelector('#supplements-divs').innerHTML = supplement;
}
