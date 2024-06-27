const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarFrequenciaPalavras(texto) {
    let palavras = texto.trim().toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    
    let frequenciaPalavras = {};
    
    palavras.forEach(palavra => {
        if (frequenciaPalavras[palavra]) {
            frequenciaPalavras[palavra]++;
        } else {
            frequenciaPalavras[palavra] = 1;
        }
    });

    console.log("Frequência de cada palavra na história:");
    for (let palavra in frequenciaPalavras) {
        console.log(`${palavra}: ${frequenciaPalavras[palavra]}`);
    }

    rl.close();
}

rl.question("Conte uma história:\n", (historia) => {
    if (historia.trim().length === 0) {
        console.log("Você não contou uma história!");
        rl.close();
    } else {
        contarFrequenciaPalavras(historia);
    }
});

