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
]) {
  assert.ok(html.includes(text), `ausente: ${text}`);
}

assert.match(html, /<main[\s>]/);
assert.match(html, /<section[^>]+id="projetos"/);
assert.match(html, /<section[^>]+id="certificados"/);

const css = readFileSync(new URL('../style.css', import.meta.url), 'utf8');

for (const selector of ['--accent', '.project-card', '@media (max-width: 700px)']) {
  assert.ok(css.includes(selector), `estilo ausente: ${selector}`);
}

assert.match(html, /<link rel="stylesheet" href="style.css">/);
