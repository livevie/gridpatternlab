const support = ['IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1', 'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9', 'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'];
const css = `body {
  background: #fff;
}

.gallery {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    /* support2 */
    display: flex;
    flex-wrap: wrap;
    /* endsupport2 */
}

/* support2 */
.photo {
    width: 250px;
    height: 200px;
    margin: 10px;
    flex-grow: 1;
    /* support1 */
    float: left;
    /* endsupport1 */
}
/* endsupport2 */

/* support1 */
.gallery::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
}
/* endsupport1 */
`;

// Supporttext Ausgabeelement
const support_text = document.querySelector('.js-support');
// Per default float-Support festlegen
support_text.textContent = support[0];

function trim_comments(string) {
    // Regex um Kommentare zu entfernen
    // Kommentare entfernen
    const trim_comments = new RegExp(`\\/\\*(.\[\\s\\S\]*?)\\*\\/(\r\n|\n|\r)|`, "g");
    let css_no_coment = string.replace(trim_comments, "");
    // Überschüssiges Leerzeichen entfernen
    css_no_coment = css_no_coment.replace(new RegExp(`  +`, "gs"),"  ");
    // Leerzeichen vor Klammern entfernen
    css_no_coment = css_no_coment.replace(new RegExp(` +}`, "gs"),"}");
    css_no_coment = css_no_coment.replace(new RegExp(`  +\n}`, "gs"),"}");

    return css_no_coment.trimEnd();
}

// CSS ohne Kommentare anzeigen
document.querySelector('.js-css').innerHTML = trim_comments(css);

console.log(css.replace(trim_comments, ""))

// Wenn der Regler bewegt wird
document.querySelector('input').addEventListener('change', e => {
    // Wert zu integer umwandeln
    const num = parseInt(e.target.value);

    // Supporttext Ausgabe aktualisieren
    support_text.textContent = support[num - 1];

    // CSS string zwischenspeichern
    let string = css;

    // CSS ohne Kommentare anzeigen
    document.querySelector('.js-css').innerHTML = trim_comments(string);

    // Kommentare durchgehen
    for (var i = 1; i < num; i++) {
        // Alles zwischen /* supportN */ und /* endsupportN */ lesen und inklusive Kommentar entfernen
        let remove = new RegExp(`\\/\\* support${i} \\*\\/(.\[\\s\\S\]*?)\\/\\* endsupport${i} \\*\\/`, "sg");
        string = string.replace(remove, "");
        // CSS ohne Kommentare anzeigen
        document.querySelector('.js-css').innerHTML = trim_comments(string);
    }
});

