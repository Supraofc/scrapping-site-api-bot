# 🎫 Scrapper e Ferramentas

Este repositório contém uma coleção de scrappers e ferramentas desenvolvidos para realizar diversas tarefas de scrapping em diferentes serviços online. Cada script oferece funcionalidades específicas. A seguir, detalhamos cada um deles.

## 🌟 Scripts Disponíveis

### Instagram Scraper

Este script extrai informações de um perfil do Instagram, incluindo nome, nome de usuário, número de postagens, seguidores, seguindo e descrição.

#### 🚀 Como usar:

```javascript
const instagram = require('./scrappers/instagram');

instagram('newtonguitar')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
## Proxy IP

🚀 Como usar:
```javascript

const ipPortas = require('./scrappers/ipportas');

ipPortas()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
## Gerador de Apelidos


🚀 Como usar:
```javascript

const gerarApelidos = require('./scrappers/gerarapelidos');

gerarApelidos()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
 ## Nomes Coreanos Generator

🚀 Como usar:
```javascript

const nomesCoreanos = require('./scrappers/nomescoreanos');

nomesCoreanos()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
## Gerador de Dados Pessoais

🚀 Como usar:
```javascript

const gerarPessoas = require('./scrappers/gerarpessoas');

gerarPessoas()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
## Meme Videos Scraper
Este script extrai URLs de vídeos de memes de Melhores Memes - Vídeos.

🚀 Como usar:
```javascript

const videosMeme = require('./scrappers/videosmeme');

videosMeme()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
## 🧑‍💻 Sobre o Criador

Estes scrappers foram desenvolvidos por Newton, conhecido como Supra. Tenho 21 anos e sou um entusiasta da programação há 5 anos, com experiência em diversas linguagens como Python, JavaScript, C, C++, PHP, etc.

## 🎥 Canal no YouTube

Confira também o meu canal no YouTube: [SupraOfc](https://youtube.com/SupraOfc)

## 📞 Contato

- WhatsApp: +55 93 99191-9748
- Instagram: [@newtonguitar](https://www.instagram.com/newtonguitar/)

## 🤝 Contribuições

Contribuições são bem-vindas! Também faço scrapping por encomenda.

## 📜 Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
