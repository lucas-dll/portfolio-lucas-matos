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
