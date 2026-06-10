// 1. Seleção dos elementos do DOM
const botaoCalcular = document.querySelector('#btn-calcular');
const inputDados = document.querySelector('#input-dados');
const containerResultado = document.querySelector('#container-resultado');

// 2. Escutador de eventos (Event Listener) para o botão
botaoCalcular.addEventListener('click', () => {
    // Captura o valor do input e remove espaços extras
    const valorRaw = inputDados.value.trim();
    
    // Limpa o resultado anterior a cada nova tentativa
    containerResultado.innerHTML = '';
    containerResultado.className = ''; // Limpa classes de estilização antigas

    // 3. Validação de Dados Estrita
    // Verifica se o campo está vazio
    if (valorRaw === '') {
        exibirMensagemErro('Por favor, preencha o campo antes de continuar.');
        return;
    }

    // Converte para número para validações numéricas
    const valorNumerico = Number(valorRaw);

    // Verifica se é um número válido (caso o input aceite texto e você esperava número)
    if (isNaN(valorNumerico)) {
        exibirMensagemErro('O valor digitado precisa ser um número válido.');
        return;
    }

    // Verifica se o número é negativo
    if (valorNumerico < 0) {
        exibirMensagemErro('Ops! Não são permitidos números negativos.');
        return;
    }

    // 4. Processamento dos dados (Exemplo: Calculando o dobro do valor)
    // Substitua esta lógica pela regra de negócio específica do seu projeto
    const resultadoProcessado = valorNumerico * 2;

    // 5. Exibição elegante do resultado na tela
    exibirResultadoSucesso(resultadoProcessado);
});

/**
 * Função para renderizar uma mensagem de erro amigável na tela
 */
function exibirMensagemErro(mensagem) {
    containerResultado.classList.add('mensagem-erro');
    containerResultado.innerHTML = `
        <div style="color: #d32f2f; background-color: #fffe0e0; padding: 12px; border-radius: 4px; border: 1px solid #f5c2c2;">
            <strong>Erro:</strong> ${mensagem}
        </div>
    `;
}

/**
 * Função para renderizar o resultado final com sucesso
 */
function exibirResultadoSucesso(resultado) {
    containerResultado.classList.add('mensagem-sucesso');
    containerResultado.innerHTML = `
        <div style="color: #2e7d32; background-color: #edf7ed; padding: 16px; border-radius: 4px; border: 1px solid #c8e6c9; font-size: 1.1em;">
            🎉 <strong>Processamento Concluído!</strong> <br>
            O resultado final é: <span style="font-weight: bold; font-size: 1.2em;">${resultado}</span>
        </div>
    `;
}

