function calcularPromedio(){
    const nota1 = +document.getElementById('nota1').value;
    const nota2 = +document.getElementById('nota2').value;
    const nota3 = +document.getElementById('nota3').value;
    const promedio = nota1 * 0.15 + nota2 * 0.10 + nota3 * 0.10;
    document.getElementById("resultado").textContent = (promedio).toFixed(2);
}

function reinicio() {
    location.reload();
}
