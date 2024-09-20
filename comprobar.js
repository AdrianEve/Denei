document.getElementById('DNIform').addEventListener('submit', function (e) {
    e.preventDefault();

    const dni = document.getElementById('dni').value;
    const inputletter=document.getElementById('letter').value.toUpperCase();

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if(dni < 0 || dni > 99999999){
        document.getElementById('message').textContent="El numero DNI debe de ser mayor a cero y menor a 99999999"
        return;
    }

    const calcular=letras[dni % 23];

    if (calcular !== inputletter) {
        document.getElementById('message').textContent="La letra no es correcta";
    }else{
        document.getElementById('message').textContent="El numero y letra del DNI son correctos";
    }
});