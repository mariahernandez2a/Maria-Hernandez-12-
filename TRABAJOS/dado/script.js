function dado(){
    const min = +document.querySelector('#numMin').value;
    const max = +document.querySelector('#numMax').value;
    let random = Math.round(Math.random()*(max-min)+min)
    const salida = document.querySelector('#out');
    salida.textContent = random;
}
