# 🤸‍♂️ Calculadora de Notas - Ginástica Artística

Este projeto foi desenvolvido como uma solução em **JavaScript** para automatizar o cálculo de médias das notas de atletas em competições de ginástica artística. 

A aplicação recebe o nome do atleta e um conjunto de cinco notas dadas pelos jurados, aplicando a regra oficial da competição para calcular a média final válida.

## 📋 Sobre a Regra de Negócio

Em uma competição de ginástica artística, a avaliação dos atletas obedece à seguinte regra:
1. Cada atleta recebe **cinco notas** dos jurados (variando de 1 a 10).
2. Para calcular a média justa, a **nota mais alta** e a **nota mais baixa** são descartadas.
3. A média final é calculada com base nas **três notas centrais** restantes.

## 🚀 Funcionalidades

- Recebimento de uma matriz de objetos contendo o nome e as notas de múltiplos atletas.
- Algoritmo de ordenação numérica para identificar facilmente as notas mais altas e baixas.
- Cálculo automático da média válida (com formatação de duas casas decimais para melhor visualização).
- Exibição de um relatório no console contendo o nome do atleta, as notas originais e a média final.

## 🛠 Tecnologias Utilizadas

- **JavaScript (ES6+)**: Lógica de programação, manipulação de arrays e objetos.
- **Métodos nativos**: Uso intensivo de `.sort()`, `.slice()`, `.forEach()` e `.join()`.

## 💻 Como Executar o Projeto

Siga os passos abaixo para testar a aplicação na sua máquina:

### Pré-requisitos
Você precisará ter o [Node.js](https://nodejs.org/) instalado no seu computador ou utilizar um editor de código como o **VS Code** com a extensão *Code Runner*.

### Passos
1. Clone este repositório ou faça o download dos arquivos.
2. Abra o terminal e navegue até a pasta do projeto.
3. Execute o arquivo JavaScript usando o Node.js:
   ```bash
   node notas-atletas.js

   
👨‍💻 Autor:
Jose Alailson Sousa Pinho

LinkedIn: www.linkedin.com/in/jose-alailson

GitHub: https://github.com/JoseAlailson
