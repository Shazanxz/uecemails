<div align="center">

<img src="public/favicon.svg" alt="Logo do UECEmails" width="120" height="120">

# UECEmails

**O diretório aberto de e-mails institucionais da UECE.**<br>
Professores, coordenações, setores e pós-graduação em um só lugar, mantido pela comunidade academica.

![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-1B5E20?style=flat-square)
![Node 18+](https://img.shields.io/badge/node-%E2%89%A518-2E7D32?style=flat-square)
![PRs bem-vindos](https://img.shields.io/badge/PRs-bem--vindos-4CAF50?style=flat-square)
![Banco de dados open-source](https://img.shields.io/badge/banco%20de%20dados-open--source-A5D6A7?style=flat-square)


[![Acessar o site](https://img.shields.io/badge/Acessar%20o%20site-shazanxz.github.io%2Fuecemails-1B5E20?style=for-the-badge&logo=github&logoColor=white)](https://shazanxz.github.io/uecemails/)
<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,git,github" height="28" alt="Tecnologias usadas: HTML, CSS, JavaScript, Node.js, Express, Git e GitHub">
</a>

[Como rodar](#como-rodar) · [Como contribuir](#como-contribuir) · [API](#api) · [Privacidade](#privacidade-e-boas-pr%C3%A1ticas) · [Licença](#licen%C3%A7a)

</div>

---

> Projeto feito por estudantes, para estudantes. **Não é um site oficial da UECE.**

## Por que existe?

Achar o e-mail certo de um professor ou setor costuma significar perguntar em grupos de WhatsApp ou procurar em PDFs antigos. O UECEmails junta esses endereços em um lugar só e **depende da comunidade para continuar atualizado**.

## Funcionalidades

- **Busca instantânea** por nome, setor ou e-mail, sem se importar com acentos
- **Filtros** por inicial (professores) e por grupo (setores)
- **Copiar ou escrever:** um toque copia o endereço, outro abre o Gmail, Outlook, Yahoo ou o app do aparelho
- **Responsivo e acessível:** foco visível no teclado, ícones SVG e animações reduzidas quando o sistema pede
- **API em JSON** (`/api/professores` e `/api/setores`), disponível ao rodar o servidor Express

## Como rodar

<details>
<summary>Ver passo a passo</summary>

<br>

Requer [Node.js](https://nodejs.org) 18 ou superior.

```bash
git clone https://github.com/Shazanxz/uecemails.git
cd uecemails
npm install
npm start
```

Abra `http://localhost:3000`. Para usar outra porta: `PORT=8080 npm start`.

> Use o `npm start` para navegar localmente. Abrir os arquivos direto no navegador não funciona para as páginas "Professores" e "Sobre", porque os links não têm `.html`.

</details>

## Estrutura do projeto

<details>
<summary>Ver estrutura de pastas</summary>

<br>

```
uecemails/
├── .github/workflows/pages.yml   Publicação automática no GitHub Pages
├── server.js                     Servidor Express (páginas + API)
├── package.json
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── public/
    ├── index.html                Início, busca geral e setores
    ├── professores.html          Lista de professores
    ├── sobre.html                Sobre o projeto
    ├── favicon.svg               Logo e ícone da aba
    ├── css/style.css             Visual, cores e modo escuro
    └── js/
        ├── data.js               Todos os dados (professores e setores)
        ├── icons.js              Ícones SVG
        └── app.js                Busca, filtros, tema, menu e seletor de e-mail
```

</details>

## Como contribuir

Toda ajuda é bem-vinda, e a mais valiosa é **manter os e-mails corretos**. O guia completo está em [CONTRIBUTING.md](CONTRIBUTING.md).

### Adicionar ou corrigir um contato

1. Faça um fork e crie uma branch (`git checkout -b add-professor-fulano`).
2. Edite `public/js/data.js`. Cada professor é uma linha:
   ```js
   ['Profa.', 'Nome Sobrenome', 'nome.sobrenome@uece.br', 'Observação opcional'],
   ```
   Setores seguem o formato `[nome, descrição, e-mail, grupo]`, com grupo `Graduação`, `Instituição` ou `Pós-graduação`.
3. Abra um Pull Request **informando a fonte** (página oficial, edital ou resposta por e-mail).

### Não sabe programar?

Abra uma [issue](../../issues) com o e-mail novo ou o que está errado. Isso já ajuda muito.


## Privacidade e boas práticas

Este projeto lista contatos de pessoas reais. Por isso:

- Inclua **somente e-mails institucionais já divulgados publicamente** (como `@uece.br`).
- **Não adicione** e-mails pessoais, telefones ou dados que não sejam de contato profissional.
- **Não faça coleta automática em massa.** Cada contato deve ser conferido em fonte confiável.
- Quem quiser **remover ou corrigir** seu e-mail pode abrir uma issue, e o pedido será atendido o quanto antes.

## API

Disponível ao rodar o servidor Express (`npm start`), a partir dos mesmos dados do site. Não existe no endereço do GitHub Pages.

| Rota | Retorna |
| --- | --- |
| `GET /api/professores` | `titulo`, `nome`, `email`, `obs` |
| `GET /api/setores` | `nome`, `descricao`, `email`, `grupo` |

```bash
curl http://localhost:3000/api/setores
```

## Publicação

O fluxo `.github/workflows/pages.yml` publica a pasta `public/` no GitHub Pages a cada envio para a `main`. Para ativar em um fork, vá em **Settings, Pages** e escolha **GitHub Actions** em **Source**.

## Créditos
Desenvolvido por **Nicolas**
(<a href="https://github.com/Shazanxz"><img src="https://skillicons.dev/icons?i=github" height="18" alt="GitHub"> @Shazanxz</a>)

### Agradecimentos

- **Deisee 🌼**, pela iniciativa que deu origem ao projeto.
- Aos professores, coordenações e setores da UECE.
- A todas as pessoas que enviam correções, novos e-mails e melhorias. Cada contribuição mantém o projeto útil para quem chega depois.

## Licença

Distribuído sob a licença [MIT](LICENSE). Você pode usar, copiar, modificar e distribuir, mantendo o aviso de copyright.

<div align="center">

Feito com carinho para a comunidade da UECE.

</div>
