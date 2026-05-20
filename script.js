const result = document.getElementById("result");

function digit(value) {
    if (value === "x") value = "*";
    result.value += value;
}

function addFloat() {
    const partes = result.value.split(/[\+\-\*\/]/);
    const ultimoNumero = partes[partes.length -1];
    if (!ultimoNumero.includes(".")) {
        result.value += ".";
    }
}

function equals() {
    try {
        const expressao = result.value.replace(/x/g, "*");
        const valor = eval(expressao);
        result.value = isFinite(valor) ? valor : "Erro";
    } catch (e) {
        result.value = "Erro";
    }
}

function clearAll() {
    result.value = "";
}

document.addEventListener("keydown", function(e){
    const tecla = e.key;

    if (tecla >= "0" && tecla <= "9") {
        digit(tecla);
    } else if (tecla === "+" || tecla === "-" || tecla === "/") {
        digit(tecla);
    } else if (tecla === "*") {
        digit("x");
    } else if (tecla === ".") {
        addFloat();
    } else if (tecla === "Enter" || tecla === "=") {
        e.preventDefault();
        equals();
    } else if (tecla === "Escape" || tecla === "c" || tecla === "C") {
        clearAll();
    } else if (tecla === "Backspace") {
        result.value = result.value.slice(0, -1);
    }
});