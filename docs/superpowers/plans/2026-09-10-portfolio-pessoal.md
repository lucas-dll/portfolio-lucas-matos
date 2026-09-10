# Portfólio pessoal de Lucas Matos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** Criar uma página estática, responsiva e limpa para apresentar Lucas Matos, seus projetos e suas certificações.

**Architecture:** O projeto terá uma página HTML semântica para o conteúdo e uma folha CSS para identidade visual e responsividade. Um pequeno teste Node verificará que os dados essenciais e as regras de responsividade estão presentes, sem exigir dependências ou build.

**Tech Stack:** HTML5, CSS3 e Node.js nativo para verificação.

---

## Estrutura de arquivos

- \`index.html\`: conteúdo, navegação e links do portfólio.
- \`style.css\`: tema tech escuro, componentes e layouts responsivos.
- \`tests/portfolio.test.mjs\`: verificação estática de conteúdo e estilos essenciais.

### Task 1: Estrutura e conteúdo do portfólio

**Files:**
- Create: \`tests/portfolio.test.mjs\`
- Create: \`index.html\`

- [ ] **Step 1: Escrever o teste que falha**

\`\`\`js
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
for (const text of [
  'Lucas Matos',
  'Engenharia da Computação',
  'Grupo SP',
  'Grupo Everest',
  'The Nuts and Bolts of Machine Learning',
  'https://github.com/lucas-dll',
]) assert.ok(html.includes(text), \`ausente: \${text}\`);
assert.match(html, /<main[\s>]/);
assert.match(html, /<section[^>]+id="projetos"/);
assert.match(html, /<section[^>]+id="certificados"/);
\`\`\`

- [ ] **Step 2: Rodar o teste para confirmar a falha**

Run: \`node tests/portfolio.test.mjs\`

Expected: erro \`ENOENT\` porque \`index.html\` ainda não existe.

- [ ] **Step 3: Criar o HTML semântico**

\`\`\`html
<main>
  <section id="inicio"><h1>Lucas Matos</h1><p>Estudante de Engenharia da Computação</p></section>
  <section id="projetos"><article><h2>Grupo SP</h2></article><article><h2>Grupo Everest</h2></article></section>
  <section id="certificados"><h2>Certificados</h2><p>The Nuts and Bolts of Machine Learning</p></section>
  <a href="https://github.com/lucas-dll">GitHub</a>
</main>
\`\`\`

Expandir esse esqueleto no mesmo arquivo com a navegação, as descrições aprovadas no design e \`target="_blank" rel="noreferrer"\` no link externo.

- [ ] **Step 4: Rodar o teste para confirmar aprovação**

Run: \`node tests/portfolio.test.mjs\`

Expected: processo encerra com código 0 e sem saída.

- [ ] **Step 5: Commit**

\`\`\`bash
git add index.html tests/portfolio.test.mjs
git commit -m "feat: add portfolio content"
\`\`\`

### Task 2: Estilo tech escuro e responsividade

**Files:**
- Modify: \`tests/portfolio.test.mjs\`
- Create: \`style.css\`
- Modify: \`index.html\`

- [ ] **Step 1: Estender o teste para o CSS que ainda não existe**

\`\`\`js
const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');
for (const selector of ['--accent', '.project-card', '@media (max-width: 700px)']) {
  assert.ok(css.includes(selector), \`estilo ausente: \${selector}\`);
}
assert.match(html, /<link rel="stylesheet" href="style.css">/);
\`\`\`

- [ ] **Step 2: Rodar o teste para confirmar a falha**

Run: \`node tests/portfolio.test.mjs\`

Expected: erro \`ENOENT\` para \`style.css\`.

- [ ] **Step 3: Implementar a folha de estilos**

\`\`\`css
:root { --bg: #07111f; --panel: #0e1b2d; --text: #edf6ff; --muted: #a9bbcf; --accent: #65d9ff; }
body { margin: 0; background: var(--bg); color: var(--text); font-family: Inter, system-ui, sans-serif; }
.project-card { background: var(--panel); border: 1px solid #1d3651; border-radius: 1rem; padding: 1.5rem; }
@media (max-width: 700px) { .project-grid { grid-template-columns: 1fr; } }
\`\`\`

Completar o CSS no mesmo arquivo para oferecer container centralizado, navegação, botão, cartões, foco visível e uma grade de dois cartões que vira uma coluna em telas menores. Inserir a referência a \`style.css\` no \`<head>\` de \`index.html\`.

- [ ] **Step 4: Rodar o teste para confirmar aprovação**

Run: \`node tests/portfolio.test.mjs\`

Expected: processo encerra com código 0 e sem saída.

- [ ] **Step 5: Commit**

\`\`\`bash
git add index.html style.css tests/portfolio.test.mjs
git commit -m "feat: style responsive portfolio"
\`\`\`

### Task 3: Verificação de entrega e guia de publicação

**Files:**
- Create: \`README.md\`
- Modify: \`tests/portfolio.test.mjs\`

- [ ] **Step 1: Estender o teste para o guia de publicação ausente**

\`\`\`js
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
assert.ok(readme.includes('GitHub Pages'));
assert.ok(readme.includes('Settings'));
\`\`\`

- [ ] **Step 2: Rodar o teste para confirmar a falha**

Run: \`node tests/portfolio.test.mjs\`

Expected: erro \`ENOENT\` para \`README.md\`.

- [ ] **Step 3: Criar um README conciso**

\`\`\`md
# Portfólio — Lucas Matos

Site estático. Para publicar: envie os arquivos ao GitHub, abra **Settings > Pages**, escolha a branch \`main\` e a pasta \`/ (root)\`.
\`\`\`

Acrescentar os comandos de \`git remote add origin\`, \`git branch -M main\` e \`git push -u origin main\`, usando o endereço que o usuário criar no GitHub.

- [ ] **Step 4: Rodar a verificação final**

Run: \`node tests/portfolio.test.mjs && git status --short\`

Expected: teste sem saída; status só exibe alterações que ainda precisam ser incluídas no commit.

- [ ] **Step 5: Commit**

\`\`\`bash
git add README.md tests/portfolio.test.mjs
git commit -m "docs: add publishing guide"
\`\`\`

