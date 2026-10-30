<div align="center">

<img src="public/favicon.svg" alt="Logo do UECEmails" width="80" height="80">

# Guia de contribuição

**Obrigado por ajudar a manter o UECEmails vivo!**<br>
Este guia mostra como contribuir, mesmo que você nunca tenha usado Git.

[Formas de ajudar](#formas-de-ajudar) · [Atualizar e-mails](#atualizar-e-mails) · [Mudar o código](#mudar-o-código) · [Pull Request](#abrindo-o-pull-request) · [Conduta](#conduta)

</div>

---

## Formas de ajudar

| Eu quero... | Faça isto |
| --- | --- |
| Avisar de um e-mail errado ou novo | Abra uma [issue](../../issues) com o e-mail e a fonte |
| Corrigir ou adicionar um contato | Edite `public/js/data.js` e abra um Pull Request |
| Remover meu próprio e-mail | Abra uma issue. Esses pedidos têm prioridade |
| Melhorar o visual ou o código | Veja [Mudar o código](#mudar-o-código) |
| Tirar uma dúvida | Abra uma issue com a etiqueta `pergunta` |

Antes de começar, procure nas issues abertas se alguém já está cuidando do mesmo assunto.

## Atualizar e-mails

Todos os dados ficam em `public/js/data.js`.

### Professores

Cada professor é uma linha no formato `[título, nome, e-mail, observação opcional]`:

```js
['Profa.', 'Nome Sobrenome', 'nome.sobrenome@uece.br'],
['Prof.', 'Outro Nome', 'outro.nome@uece.br', 'Atende só pela manhã'],
```

### Setores

Cada setor segue `[nome, descrição, e-mail, grupo]`. Os grupos aceitos são `Graduação`, `Instituição` e `Pós-graduação`:

```js
['PPGE', 'Pós-graduação em Educação', 'ppge@uece.br', 'Pós-graduação'],
```

### Regras para incluir ou alterar um contato

1. Use **somente e-mail institucional divulgado publicamente**.
2. Informe a **fonte** na descrição do Pull Request (link oficial, edital ou resposta por e-mail).
3. Mantenha a **ordem alfabética** dos professores.
4. Escreva nomes com **acentos corretos** e o título (`Prof.` ou `Profa.`).
5. **Não inclua** e-mails pessoais, telefones ou dados sensíveis.
6. **Não faça coleta automática em massa.** Confira cada contato.

### Remover ou corrigir um endereço

Abra uma issue ou um Pull Request. Pedidos feitos pela própria pessoa têm prioridade e são atendidos o quanto antes.

## Mudar o código

### Preparar o ambiente

```bash
git clone https://github.com/Shazanxz/uecemails.git
cd uecemails
npm install
npm start
```

O site abre em `http://localhost:3000`.

### Fluxo de trabalho

1. Faça um **fork** do repositório.
2. Crie uma **branch** com nome descritivo: `git checkout -b melhora-busca-mobile`.
3. Faça as alterações e teste.
4. Faça o **commit** e envie: `git push origin melhora-busca-mobile`.
5. Abra o **Pull Request**.

### Princípios do projeto

- **Simples:** JavaScript puro, sem frameworks e sem etapa de build.
- **Leve:** não adicione dependências sem necessidade.
- **Acessível:** mantenha foco visível, contraste adequado e rótulos nos botões de ícone.
- **Dados em um só lugar:** `data.js` alimenta o site e a API.



## Abrindo o Pull Request

Use este modelo na descrição:

```markdown
## O que mudou
Resumo curto da alteração.

## Fonte (para mudanças em e-mails)
Link ou origem da informação.

```

Se o visual mudou, inclua capturas de tela. Para contatos novos, a fonte é obrigatória.

### Mensagens de commit

Frases curtas, no imperativo e em português:

```
Adiciona e-mail da coordenação de História
Corrige grafia do e-mail da Profa. Fulana
Melhora contraste dos botões no modo escuro
```

## Conduta

Aqui tratamos todas as pessoas com respeito e gentileza. Não toleramos assédio, discriminação ou uso dos dados do projeto para spam. Contribuições que exponham dados pessoais indevidamente serão recusadas.

## Reconhecimento

Toda contribuição conta, de uma vírgula corrigida a um recurso novo. Obrigado por fazer parte da comunidade!

<div align="center">

Voltar ao [README](README.md)

</div>
