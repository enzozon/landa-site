# Landa v2 — experimento de design (branch `redesign-v2-referencias`)

> **Status: experimental — pode sofrer alteração.** Gerado a partir das capturas
> desta pasta + skill [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill).
> O design travado do `main` continua documentado em `../design.md`.

## Direção (saída da skill)

Consulta: `fashion streetwear ecommerce editorial minimal brazil` (variance 7, motion 4).

- **Estilo:** Exaggerated Minimalism — tipografia display gigante, alto contraste,
  muito branco. Indicado para moda/editorial.
- **Padrão:** coluna única com CTA claro por seção; mobile-first.
- **Cores:** mantida a paleta da marca (bordô `--tiki-700`, tinta `--ink-900`,
  creme `--paper-100`) no lugar da sugestão genérica da skill; fundo principal
  virou **branco** (`--bg: #fff`) para o clima e-commerce das referências.
- **Fontes:** mantidas Archivo/Inter (já self-hosted). Novo token
  `--text-display` para o display do hero.

## O que veio de cada captura

| Referência | Captura(s) | O que foi adotado |
|---|---|---|
| Planner — barra de benefícios | Capture8 (anotada à caneta: "animação interessante p/ site") | Marquee animado no topo com fatos reais da loja (desde 1996, WhatsApp, endereço). Pausa no hover e respeita `prefers-reduced-motion`. |
| Aramis — hero dividido | Capture, Capture2 | Hero em duas colunas: foto (tricô bordô/mostarda do export) + declaração em tipografia gigante. |
| Ellus — logo centralizado | Capture4, Capture5 | Masthead desktop só com o wordmark centralizado; nav em fileira abaixo. |
| Ellus — tiles de categoria | Capture5 | StyleGrid com overlay duotone bordô, rótulo grande sobre a foto e botão "Confira a seleção"; primeiro/último tile da fileira em dobro de largura. |
| Planner — mais vendidos | Capture9 | Seção "Mais pedidos": 4 produtos com preço (ou "sob consulta") e barra "Comprar agora" → página do produto. |
| Planner — nossas lojas + footer | Capture10, Capture11 | Faixa fotográfica do interior da loja com "Linhares — ES" antes da seção Visite; footer tinta emendado. |

**Não adotado (de propósito):** depoimentos (não temos citações reais coletadas),
mega-menu (catálogo pequeno), selos de pagamento (site é vitrine, não e-commerce).

## Fotos novas (do export do Instagram, pasta `media/posts` — nunca de mensagens)

- `public/images/looks/look-trico-mostarda.jpg` — hero
- `public/images/loja-interior.jpg` — faixa da loja

## Como testar

```
git checkout redesign-v2-referencias
npm run dev
```
