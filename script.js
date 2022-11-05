document.getElementById("btn").addEventListener("click", () => {
   let colorHex = document.querySelector("input").value;
   let selectOption = document.getElementById("select-menu").value
   
   
   
   fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex.substring(1)}&mode=${selectOption}&count=6`)
    .then(res => res.json())
    .then(data => {
        let result = ""
        
        for (let i = 0; i < data.colors.length; i++) {
            result += `
            <div class="colorBars" style="background-color:${data.colors[i].hex.value};">
                <div class="colorId">${data.colors[i].hex.value}</div>
            </div>
            `
        }
        document.getElementById("color-container").innerHTML = result;
    })
})
    
  