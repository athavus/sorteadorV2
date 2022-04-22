function sortear() {
    var num = parseInt(document.getElementById("num").value);
    var inicioInt = parseInt(document.getElementById("inicioInt").value);
    var finalInt = parseInt(document.getElementById("finalInt").value);

    if (inicioInt >= finalInt) {
        alert('O inicio do intervalo não pode ser maior que o final');
    } else { 
        for (var i = 0; i < num; i++) {
            var numSort = parseInt(Math.random() * ((finalInt - inicioInt) + 1));
            var finalNum = finalInt - numSort;
            if (sorteados === undefined) {
                document.getElementById("nums").value = finalNum;
            } else {
                document.getElementById("nums").value = sorteados + ` ${finalNum}`;
            }
            var sorteados = document.getElementById("nums").value;
        }
    }
}