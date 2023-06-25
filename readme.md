# Chat App with [chat-engine](https://chatengine.io)

<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/JCDMeira/react-chat"
  />
  <image
  src="https://img.shields.io/github/languages/top/JCDMeira/react-chat"
  />
  <image
  src="https://img.shields.io/github/last-commit/JCDMeira/react-chat"
  />
  <image
  src="https://img.shields.io/github/watchers/JCDMeira/react-chat?style=social"
  />
</p>

# 📋 Indíce

- [Proposta](#id01)
  - [Conclusões](#id01.01)
- [Feito com](#id04)
- [Pré-requisitos](#id05)
- [Procedimentos de instalação](#id06)
- [Autor](#id07)

# 🚀 Proposta <a name="id01"></a>

Este é o projeto tem como objetivo central realizar uma poc da lib [chat-engine](https://chatengine.io). Estabelecendo assim um chat em tempo real

## Conclusões <a name="id01.01"></a>

A lib [chat-engine](https://chatengine.io) traz uma estrutura completa para montar o sistema de chat, tudo de forma direta e com partes pré construídas, sendo em muito só usar após aplicar e configurar.

Porém, a mesma é muito limitada, não favorecendo construção de uma aplicação de boa otimização, performance, costumização, além de não ser robusta para integridade de tipos. Portanto, se quiser garantir a integridade se deveria fazer uma aplicação toda construída para ter testes mais exaustivos e alguns double checks de tipos, validações de encadeamento opcional e outros recursos para evitar que a aplicação tenha crash's de tela.

- A lib traz um chat pré embutido, mas é muito limitada
- Não oferece tipagem para ts
- overflow em requisições
  - cada vez que digita algo no campo da mensagem causa um evento de typing ao causar o change do estado e então é feiito uma requisição, para informar que o usuário está tipando, isso causa overflow de requisições.
  - Para tratar teria que criar um debounce ou Throttling ou forma de controlar número de requisições feitas para o backend.
  - A lib paga não tem o limite de requisições, já a gratuíta aponta erro ao chamar várias vezes. Mas no modo pago teria que tomar cuidado com o custo agregado de ter muitas requisições.
- a lib também não ta coordenando os eventos adequadamente, só atualiza chat ao atualizar a página ou clicar de novo no chat. Mesmo olhando a doc atual e tentando diversas formas, não ta fazendo de forma simultânea como a proposta.

# 🛠 Feito com <a name="id04"></a>

<br />

- [React](https://reactjs.org/)
- [chat-engine](https://chatengine.io)
- css
- [Vite](https://vitejs.dev)

<br />

# ☑️ Pré-requisitos <a name="id05"></a>

<br />

- [x] Editor de código de sua preferência (recomendado VS code)
- [x] Git
- [x] Gerenciador de pacotes Yarn ou NPM

<br />

# 📝 Procedimentos de instalação <a name="id06"></a>

<br />

Clone este repositório usando o comando:

```bash
git clone https://github.com/JCDMeira/react-chat.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install

ou

yarn install
```

Inicie o projeto com

```bash
npm start

ou

yarn start
```

<br />

# :sunglasses: Autor <a name="id07"></a>

<br />

- Linkedin - [jeanmeira](https://www.linkedin.com/in/jeanmeira/)
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/)
- GitHub - [JCDMeira](https://github.com/JCDMeira)
