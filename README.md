Projeto da Disciplina: Calculadora de Combustível
1. Qual o Objetivo do Projeto?
O nosso projeto é uma aplicação web simples, uma "Calculadora de Combustível". A ideia é que o usuário possa planejar os gastos de uma viagem, informando a distância, o consumo do carro e o preço do combustível. Para deixar a ferramenta mais completa, nós também adicionamos uma lista de carros populares para que a pessoa possa ter uma referência de consumo, além de algumas funções extras como cálculo para ida e volta, um histórico dos últimos cálculos e uma opção para salvar o consumo do próprio carro.

Linguagem Principal: JavaScript (com HTML para estruturar a página e CSS para o visual).

2. Ambiente e Ferramentas
Editor de Código: Usamos o Visual Studio Code (VS Code).

Por que o VS Code? A gente escolheu o VS Code porque ele é leve, fácil de usar para projetos web (HTML, CSS, JS) e tem muitas extensões que ajudam bastante. A principal foi a "Live Server", que permitiu ver nosso site atualizando no navegador em tempo real a cada alteração que fazíamos. O terminal integrado também foi uma mão na roda para usar os comandos do Git sem precisar sair do editor.

3. Versionamento com Git e GitHub
Todo o projeto foi controlado com Git. Cada alteração importante foi "commitada" e o código final, junto com este relatório, está hospedado em um repositório no GitHub.

Link do Repositório: https://github.com/rogeriolamadril/calculadora-combustivel.git

4. Aplicação dos Princípios SOLID
Tentamos aplicar alguns princípios de boas práticas para deixar o código mais organizado. Dois exemplos foram:

a) Princípio da Responsabilidade Única (SRP)
A ideia do SRP é que cada função deve fazer apenas uma coisa. Em vez de criar uma função gigante que faz tudo, nós quebramos a lógica em partes menores.

Como fizemos: No nosso script.js, temos funções específicas para cada tarefa:

showErrorModal(title, message): Essa função só se preocupa em mostrar a caixinha de erro na tela. Ela não sabe qual foi o erro, só pega a mensagem e mostra.

displayHistory(): A única tarefa dela é pegar os cálculos do histórico que estão salvos e colocá-los na lista visível para o usuário.

updateFuelPriceLabel(fuelType): Só serve para uma coisa: mudar o texto do campo de preço para "Preço da Gasolina" ou "Preço do Etanol", dependendo do que o usuário escolhe.

Exemplo no código:

// Função focada apenas em mostrar o modal de erro.
function showErrorModal(title, message) {
    // ... código para tornar o modal visível e inserir o texto ...
}

b) Princípio Aberto/Fechado (OCP)
Esse princípio diz que o código deve ser "aberto para extensão, mas fechado para modificação". Ou seja, a gente deveria conseguir adicionar coisas novas sem precisar quebrar ou alterar o que já existe.

Como fizemos: Pensamos nisso ao criar a lista de carros (carDatabase).

Aberto para Extensão: Se a gente quiser adicionar mais carros à lista, é só adicionar um novo objeto no array carDatabase no script.js.

Fechado para Modificação: A função que cria o menu de seleção de carros foi escrita para ler qualquer carro que esteja na carDatabase, não importa quantos sejam. A gente pode adicionar 100 carros novos na lista e a função que monta o menu na tela continuará funcionando do mesmo jeito, sem precisar de nenhuma alteração.

Exemplo no código:

// A nossa lista de carros. Podemos adicionar mais aqui a qualquer momento.
const carDatabase = [
    { display: "Fiat Strada...", /* ... */ },
    { display: "VW Polo...", /* ... */ },
    // É só adicionar um novo carro aqui embaixo...
];

// ...e essa função que lê a lista continua funcionando sem precisar mexer nela.
carDatabase.forEach((car) => { 
    const option = document.createElement('option');
    option.value = car.display; 
    option.textContent = car.display;
    carSelect.appendChild(option);
});

5. Refatoração e Documentação
a) Refatoração do Código
No começo, todo o nosso código para calcular o gasto estava dentro do listener do botão "Calcular". Ficou um bloco grande e confuso.

Como era ANTES:

// Exemplo simplificado de como era
fuelForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let d = parseFloat(document.getElementById('distancia').value);
    const c = parseFloat(document.getElementById('consumo').value);
    const p = parseFloat(document.getElementById('preco_combustivel').value);
    if(document.getElementById('roundTripCheckbox').checked) {
        d *= 2;
    }
    // ... validações aqui ...
    const custoFinal = (d / c) * p;
    document.getElementById('custoTotal').textContent = `R$ ${custoFinal.toFixed(2)}`;
});

O que fizemos (DEPOIS):
Nós refatoramos isso para que as variáveis fossem mais claras e declaradas no início do script, e a lógica dentro do listener ficasse mais legível e focada na sequência de passos: pegar valores -> validar -> calcular -> mostrar resultado. Isso deixou o código bem mais fácil de entender e de dar manutenção, alinhado com os princípios que queríamos seguir.

b) Como Executar o Projeto
Baixe ou clone os arquivos do nosso repositório no GitHub.

Coloque os três arquivos (index.html, style.css, script.js) na mesma pasta.

Abra o arquivo index.html em um navegador como Chrome ou Firefox. Para testar enquanto desenvolve, a extensão "Live Server" do VS Code é uma boa pedida.

c) Integrantes e Revisão do Trabalho

Alex, Cleiton, Davi, Fernando, jonathan, Rogério, Marcelo e Matheus - Responsáveis pela criação do codigo.

Alex, Cleiton, Davi, Fernando, jonathan, Rogério, Marcelo e Matheus - Responsáveis pela documentação.


Revisão: O trabalho foi revisado em equipe.

6. Depuração de um Problema (Debugging)
a) O Erro que Encontramos
Um problema que nos deu bastante dor de cabeça foi que, em uma das versões, ao clicar em "Calcular Gasto Total", a página simplesmente recarregava, ignorando nosso código de cálculo. O event.preventDefault() que deveria impedir isso não estava funcionando.

b) Como Descobrimos a Causa
Nossa principal ferramenta foi o Console do Desenvolvedor do navegador (acessado com F12).

Teste com console.log(): Colocamos um console.log("Botão de calcular clicado!"); bem no início da função que deveria rodar quando o formulário fosse enviado.

Análise: Ao clicar no botão, notamos que a nossa mensagem não aparecia no console. Isso foi o sinal de que o problema não era a lógica do cálculo, mas sim que o "ouvinte de evento" (addEventListener) nem estava sendo ativado no formulário.

Investigação do Console: Olhando com mais atenção para o console, vimos que uma outra mensagem de erro em vermelho aparecia assim que a página carregava: TypeError: Cannot read properties of null (reading 'addEventListener').

c) A Solução
O erro TypeError nos mostrou a linha exata do problema. Acontece que, em uma versão anterior, tínhamos uma funcionalidade de "Modo Escuro" com um botão. Nós decidimos remover essa funcionalidade e apagamos o botão do index.html, mas esquecemos de apagar a linha no script.js que tentava adicionar um addEventListener a esse botão que não existia mais.

Esse erro inicial fazia o JavaScript "quebrar" e parar sua execução. Por isso, ele nunca chegava na parte do código onde adicionava o listener para o formulário de cálculo.

A solução foi simples: apagar a linha de código órfã referente ao botão do modo escuro. Depois disso, o script rodou até o final, o listener do formulário foi ativado corretamente, e o event.preventDefault() passou a funcionar, resolvendo o bug do recarregamento da página.
