# Cookie Bueno — Landing Page

## Estrutura de pastas

```
/
index.html
/css
  style.css
/js
  script.js
/images
  (coloque aqui suas fotos e vídeo reais)
```

## 1. Como adicionar suas imagens e vídeo

Coloque os seus arquivos reais dentro da pasta `/images` usando exatamente estes nomes
(ou ajuste os nomes no `index.html` se preferir usar os seus próprios):

| Arquivo | Onde aparece |
|---|---|
| `hero-cookie.jpg` | Imagem de fallback caso o vídeo não carregue |
| `video-cookie.mp4` | Vídeo do Cookie Bueno na primeira dobra |
| `video-poster.jpg` | Capa exibida antes do vídeo tocar |
| `cookie-bueno.jpg` | Foto grande na seção "O cookie que todo mundo quer provar" |
| `cookies-01.jpg` | Foto na seção "Quebra de objeções" |
| `massa-tradicional.jpg` | Card da massa tradicional |
| `massa-cacau.jpg` | Card da massa de cacau |
| `massa-redvelvet.jpg` | Card da massa red velvet |
| `cookie-01.jpg` a `cookie-10.jpg` | Grade das 10 receitas |

Cada local está marcado no `index.html` com um comentário `<!-- IMAGEM XX: ... -->`
indicando exatamente o que colocar ali.

Se alguma imagem ainda não estiver pronta, pode deixar o espaço como está — o layout
já reserva o tamanho certo e não quebra com imagem ausente (vai aparecer um ícone
de imagem quebrada até você adicionar o arquivo).

Não é necessário editar o CSS: todas as classes de imagem (`img-feature`,
`img-secondary`, `img-dough`, `img-thumb`) já cuidam de manter a proporção,
o recorte (`object-fit: cover`) e os cantos arredondados de forma padronizada.

## 2. Como editar os nomes das 10 receitas

No `index.html`, procure a seção `<!-- 6. 10 RECEITAS -->`. Cada card tem uma linha assim:

```html
<p class="recipe-name">Receita 1</p>
```

Troque "Receita 1" pelo nome real de cada receita.

## 3. Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público ou privado, desde que o
   plano do GitHub permita Pages em repositórios privados).
2. Envie os arquivos deste projeto para o repositório, mantendo a mesma estrutura
   de pastas (`index.html` na raiz, `/css`, `/js`, `/images`).
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` (ou `master`) e a pasta `/root`.
5. Clique em **Save**. Em alguns minutos o GitHub vai gerar uma URL do tipo:
   `https://seu-usuario.github.io/nome-do-repositorio/`
6. Essa URL já pode ser usada como destino do seu anúncio.

## 4. Onde inserir o rastreamento (Meta Pixel / Google Analytics)

No `index.html`, dentro do `<head>`, há comentários indicando onde colar as tags:

```html
<!-- ANALYTICS: insira aqui a tag do Google Analytics (gtag.js) quando estiver pronta -->
<!-- ANALYTICS: insira aqui o Meta Pixel (Facebook Pixel) quando estiver pronto -->
```

No `js/script.js`, a função `trackCtaClick()` já registra cada clique nos botões
"Quero aprender" e "Quero o Premium" no console do navegador. Quando as tags de
Google Analytics e Meta Pixel estiverem instaladas, é só descomentar as linhas
correspondentes dentro dessa função para enviar os eventos de verdade.
