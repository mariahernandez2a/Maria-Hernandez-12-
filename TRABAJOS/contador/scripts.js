function contador() {
    let segundos = +document.getElementById('num').value;
    setTimeout(finalizado, 1000 * segundos);
}

function finalizado() {
    let mostrar = document.getElementById('salida');
    let alarma = document.getElementById('alarma');
    alarma.play();
    mostrar.textContent = 'ON';
    mostrar.style = 'color: red ; font-size: 40px';
}

function reinicio() {
    location.reload();//para refrescar la pagina
}


