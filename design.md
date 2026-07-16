# Design — Landa

Sistema de design travado deste site (produzido via skill Hallmark, verbo
`redesign`, multi-página). Toda mudança visual lê este arquivo antes de emitir
código. Não regenerar por página — estender/emendar aqui quando o sistema
precisar crescer.

## Gênero

editorial — voz de lookbook/moda de rua. Referências: Aimé Leon Dore,
Mr Porter editorial, lookbooks Stüssy.

## Famílias de macroestrutura

- Home (marketing): **08 · Photographic** — foto real full-bleed domina cada
  dobra; texto é anotação, não manchete. Faixas de imagem alternam com faixas
  estreitas de texto.
- Catálogo (`/produtos`): **11 · Catalogue** — grade uniforme de inventário
  com nav de categorias.
- Conteúdo (`/produto/[slug]`): split produto — mídia à esquerda, ficha sticky
  à direita.

## Tema

Paleta da marca (derivada da logo tiki), tokens em `src/styles/tokens.css` —
**preservada, não trocada**. Mantida em hex (sistema anterior à adoção do
OKLCH; converter só se houver motivo real):

- Papel: `--paper-100 #f5f2eb` (creme) · `--paper-200 #eae5d9`
- Tinta: `--ink-900 #141618` · `--ink-500 #55595c`
- Acento: bordô `--tiki-700 #51201c` (marca) · `--tiki-500 #82372f` ·
  `--tiki-300 #cf8878` (sobre escuro) — ≤ 5% de qualquer viewport
- Apoio: `--steel-500`, `--hydro-400`, `--olive-600`

## Tipografia

- Display: Archivo Variable, 800–900, uppercase, sempre roman (itálico nunca)
- Corpo: Inter Variable, 400–600
- Escala e tracking em `tokens.css`; medida de texto ≤ 65ch

## Espaçamento

Escala 4pt nomeada (`--space-1..24`), `--section-y` entre dobras. Sempre
tokens, nunca valores crus.

## Imagem

- Fotos reais da loja/Instagram — nunca stock, nunca IA
- Cantos retos (`--radius-md: 0`): imagem editorial não leva arredondamento
- Sem sombra de card em foto; a borda da imagem é o divisor
- Full-bleed permitido só na home (macro Photographic) e na faixa do lookbook

## Motion

- Reveal quieto: fade+translate 600ms `--ease-out` via IntersectionObserver,
  tudo visível sem JS e com reduced-motion
- Dobras fotográficas da home: sem motion espacial — a foto trabalha sozinha
- Animar só transform/opacity

## Nav e footer

- Nav: **N6 masthead de jornal** (desktop) — wordmark LANDA centrado grande,
  linhas de local/data ao lado, fileira de links entre régua dupla; a fileira
  fica sticky (masthead rola pra fora via `top` negativo). Mobile: barra
  compacta + hambúrguer (comportamento atual).
- Footer: **Ft1 mast-headed** — wordmark gigante ancora uma banda horizontal
  sobre bordô; contato/horário ao lado; linha legal abaixo.

## Voz de CTA

- Primário: Button `solid` (tinta sobre papel, hover bordô), uppercase Archivo
- Secundário: link tipográfico com seta ("Ver o que chegou →") ou Button
  `outline`/`on-dark`
- Em foto: legenda + link tipográfico no canto, nunca botão pesado

## O que as páginas DEVEM compartilhar

Wordmark/logo tiki · paleta bordô-creme-tinta · Archivo+Inter · voz de CTA ·
ritmo de heading de seção (eyebrow uppercase + h2 display).

## O que PODE variar

Macroestrutura dentro da família da página · tratamento de imagem (full-bleed
só na home) · densidade da grade no catálogo.
