clock();

function clock(){
  const date = new Date();
  const indent = 2;
  const clockObj = {
    am_pm: date.getHours() >= 12 ? 'pm' : 'am',
    hora: date.getHours() % 12 || 12,
    minuto: date.getMinutes(),
    segundo: date.getSeconds(),
    día: date.toLocaleDateString('es-ES', { weekday: 'long' }),
    fecha: date.getDate(),
    mes: date.toLocaleDateString('es-ES', { month: 'long' }),
    año: date.getFullYear(),
}

  const valFormat = (val) => {
    if(typeof val == 'number') return `<span class="value number">${val}</span>`
    else if (typeof val == 'string') return `<span class="value string">"${val}"</span>`
  }
  document.querySelector(".watch").innerHTML = 
    `<span class="keyword">const</span> <span class="def">clock</span> <span class="operator">=</span> {<br>` 
    + Object.entries(clockObj).reduce((str, [key, val])=> str + `${'&nbsp'.repeat(indent)}<span class="property">${key}</span>: ${valFormat(val)},<br>`, '') 
    + '};';
  requestAnimationFrame(clock)
}