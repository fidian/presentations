import { default as Reveal } from './reveal.js';
import { default as Markdown } from './markdown.js';
import { default as Notes } from './notes.js';

const deck = new Reveal({
    hash: true,
    plugins: [ Markdown, Notes ]
});
deck.initialize();
