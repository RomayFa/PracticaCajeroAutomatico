var saldoActual = usuarioLogueado.saldo;

function consultarSaldo() {
    alert("Tu saldo actual es: $" + saldoActual);
}

function ingresarMonto() {
    var monto = parseInt(document.getElementById("monto-ingreso").value);
    if (!isNaN(monto) && monto > 0 && saldoActual + monto <= 990) {
        saldoActual += monto;
        alert("Has ingresado $" + monto + ". Tu nuevo saldo es: $" + saldoActual);
    } else {
        alert("Monto inválido o excede límite de saldo permitido");
    }
}

function retirarMonto() {
    var monto = parseInt(document.getElementById("monto-retiro").value);
    if (!isNaN(monto) && monto > 0 && saldoActual - monto >= 10 && saldoActual - monto <= 990) {
        saldoActual -= monto;
        alert("Has retirado $" + monto + ". Tu nuevo saldo es: $" + saldoActual);
    } else {
        alert("Monto inválido o excede límites de saldo permitidos");
    }
}