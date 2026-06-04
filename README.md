# Gerador de Insights

Aplicação web que consome a API Advice Slip para exibir conselhos aleatórios ao usuário.

## Funcionalidades

- Exibe conselhos aleatórios através de uma API pública
- Estado de carregamento durante a requisição
- Tratamento de erros
- Interface responsiva
- Design monocromático

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Fetch API

## API Utilizada

Advice Slip API

https://api.adviceslip.com/advice

## Como Executar

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/gerador-de-insights.git
```

2. Abra a pasta do projeto

```bash
cd gerador-de-insights
```

3. Abra o arquivo `index.html` no navegador.

## Estrutura do Projeto

```text
gerador-de-insights/
│
├── index.html
├── style.css
├── script.js
└── README.md
```
## Preview

- A interface inicial do sistema antes da consulta à API.

![Tela Inicial](assets/screenshot.png)

- Após clicar em "Buscar Insight", um conselho aleatório é exibido ao usuário.

![Conselho Gerado](assets/screenshot2.png)

## Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Manipulação do DOM
- Eventos JavaScript
- Requisições HTTP com Fetch API
- Programação assíncrona com async/await
- Tratamento de erros com try/catch
- Responsividade com CSS

## Autor

Andreza Mirely Leal dos Santos