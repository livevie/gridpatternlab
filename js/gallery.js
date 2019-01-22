const support = ['IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1', 'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9', 'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'];
const css = `body {
  background: #fff;
}

.gallery {
    /* support2 */
    display: flex;
    flex-wrap: wrap;
    /* endsupport2 */
    
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
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

@supports (display: grid) {
    .photo {
        width: auto;
        height: auto;
        margin: 0;
    }
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
// Slider
const support_slider = document.querySelector('.js-support-selection');


function trim_comments(string) {
    // Regex um Kommentare zu entfernen
    // Kommentare entfernen
    const trim_comments = new RegExp(`\\/\\*(.\[\\s\\S\]*?)\\*\\/(\r\n|\n|\r)|`, "g");
    let css_no_coment = string.replace(trim_comments, "");
    // CSS formatieren
    var beautified = cssbeautify(css_no_coment, {
        indent: '  ',
        autosemicolon: true
    });
    
    return beautified.trimEnd();
}

// CSS ohne Kommentare anzeigen
function displayCSS(string, support) {
    // CSS ohne Kommentare anzeigen
    document.querySelector('.js-css').innerHTML = trim_comments(string);

    // Kommentare durchgehen
    for (var i = 1; i < parseInt(support); i++) {
        // Alles zwischen /* supportN */ und /* endsupportN */ lesen und inklusive Kommentar entfernen
        let remove = new RegExp(`\\/\\* support${i} \\*\\/(\[\\s\\S\]*?)\\/\\* endsupport${i} \\*\\/`, "g");
        string = string.replace(remove, "");
        // CSS ohne Kommentare anzeigen
        document.querySelector('.js-css').innerHTML = trim_comments(string);
    }
}

function displaySupport(index) {
    support_text.textContent = support[index - 1];
}

// Per default Grid-Support festlegen
displaySupport(support_slider.value);
displayCSS(css, support_slider.value);

// Wenn der Regler bewegt wird
support_slider.addEventListener('change', e => {
    const support = e.target.value;

    displaySupport(support);

    displayCSS(css, support);
});

