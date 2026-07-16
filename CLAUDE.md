# Landa — Site Institucional

Site vitrine da Landa, loja de moda casual/street de Linhares-ES ativa desde 1996.
Instagram: [@_landaloja](https://instagram.com/_landaloja). Público variado: do
surf/streetwear a looks montados pra sair.

## Comandos

- `npm run dev` — servidor de desenvolvimento (localhost:4321)
- `npm run build` — build estático em `dist/`
- `npm run preview` — serve o build local

## Stack

Astro 5 (estático, zero JS por padrão) + CSS puro com design tokens.
Fontes self-hosted via Fontsource: Archivo Variable (display) e Inter Variable (corpo).

## Estrutura

- `src/styles/tokens.css` — **fonte da verdade do design system** (cores, tipografia, espaçamento). Sempre usar tokens, nunca valores hardcoded.
- `src/styles/global.css` — reset leve + estilos de elemento base
- `src/layouts/Base.astro` — layout padrão (head, Header, Footer)
- `src/components/` — componentes reutilizáveis (Container, Button, SectionHeading, Header, Footer)
- `src/components/sections/` — seções da home (Hero, StyleGrid, Lookbook, About, VisitCta)
- `src/data/store.ts` — contato/endereço/horários da loja (fonte única; links wa.me via `whatsappUrl()`)
- `src/data/products.ts` — catálogo (slug, categoria, preço placeholder, tamanhos)
- `src/pages/produto/[slug].astro` — página individual de produto (tamanho + CTA WhatsApp)
- `src/pages/styleguide.astro` — guia de estilo vivo em `/styleguide`
- `public/images/` — fotos de produto/lookbook

## Convenções

- Conteúdo em pt-BR, tom informal de loja de rua ("rolê", "look", "chega pra provar")
- Estilos com escopo no próprio componente (`<style>` do Astro); só global.css/tokens.css são globais
- Paleta: bordô da logo (`--tiki-700`, cor de marca), creme (`--paper-100`), preto editorial (`--ink-900`); azuis (`--steel-500`, `--hydro-400`) e oliva (`--olive-600`) são apoio
- Logo: máscara tiki (`public/images/logo.jpg`, fundo #51201c) — usada no header, footer e favicon
- Headings em Archivo, uppercase; corpo em Inter

## Pendências conhecidas

- Preços dos produtos: `price: null` em `src/data/products.ts` é placeholder — preencher em reais para exibir na página do produto (enquanto null, mostra "preço sob consulta")
- Mídia bruta do Instagram em `media/` (gitignored) — mais fotos disponíveis para novas seções
