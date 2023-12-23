document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});
function initApp() {
  // const btn = document.getElementById("");
  colorCode();
  funCol();
}
function colorCode() {
    const alpa = "0123456789ABCDEF";
    const colCod1 = alpa.charAt(Math.floor(Math.random()* alpa.length));
    const colCod2 = alpa.charAt(Math.floor(Math.random()* alpa.length));
    const colCod3 = alpa.charAt(Math.floor(Math.random()* alpa.length));
    const colCod4 = alpa.charAt(Math.floor(Math.random()* alpa.length));
    const colCod5 = alpa.charAt(Math.floor(Math.random()* alpa.length));
    const colCod6 = alpa.charAt(Math.floor(Math.random()* alpa.length));
    const colCd = colCod1+colCod2+colCod3+colCod4+colCod5+colCod6;
    const colCd1 = "#"+colCd;
    return colCd1;
  }
function funCol() {
     const baground = document.getElementById("backCol");
     const display = document.getElementById("disBackCol");
     baground.style.background = colorCode();
     display.innerHTML  = colorCode();
}

