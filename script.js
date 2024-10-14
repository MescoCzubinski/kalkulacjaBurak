document.addEventListener('DOMContentLoaded', revenuesDisplay)
function revenuesDisplay(){
    let revenuesInputIndex = 0;
    let przychod = "";
    let revenuesSum = 0;

    const revenues = [
        "zakładany plon",
        "plon z kontraktacji",
        "plon pozakontraktowy",
        "ilość wysłodków (10% s.m) na sprzedaż",
        "cena buraków kontraktowych",
        "cena buraków pozakontraktowych",
        "cena wysłodków"
      ];
      const units = [
        "t/ha",
        "t/ha",
        "t/ha",
        "t/ha",
        "zł/t",
        "zł/t",
        "zł/t"
      ];
      const values = [
        70.00,
        65.00,
        5.00,
        35.00,
        120.12,
        51.48,
        20.00
      ];

    for(i=0; i<revenues.length; i++){

        przychod += `
                    <div class="revenue">
                        <div class="revenue-name">${revenues[i]}</div> 
                        <div class="value">
                            <input type="text" inputmode="numeric" pattern="[0-9]*" value="${values[i]}" id="${revenuesInputIndex}"></input>
                            <div class="unit">${units[i]}</div>
                        </div>
                    </div>
                    `;

        revenuesInputIndex++;
    };

    document.querySelector('#revenues-divs').innerHTML = przychod;
}
