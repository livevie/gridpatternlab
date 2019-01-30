const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `body {
    background: #fff;
  } 
      .wrapper {
      /* until2 */
      max-width: 960px;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-right: auto;
      margin-left: auto;
      position: relative;
      /* enduntil2 */
      /* only3 */
      display: grid;
      grid-template-columns: 1fr [content] minmax(auto, 960) 1fr;
      /* endonly3 */
      }
      
      /* only3 */
      .header__content, .main__content, .footer__content {
        grid-column-start: content;
      }
      /* endonly3 */
      
`;

// Supporttext Ausgabeelement
const support_text = document.querySelector('.js-support');
// Slider
const support_slider = document.querySelector('.js-support-selection');
// Checkboxes
const support_toggle = document.querySelector('.js-support-toggle');

function trim_comments(string) {
    // Regex um Kommentare zu entfernen
    // Kommentare entfernen
    const trim_comments = new RegExp(
        `\\/\\*(.\[\\s\\S\]*?)\\*\\/(\r\n|\n|\r)|`,
        'g'
    );
    let css_no_coment = string.replace(trim_comments, '');
    // CSS formatieren
    var beautified = cssbeautify(css_no_coment, {
        indent: '  ',
        autosemicolon: true
    });

    return beautified.trimEnd();
}

/**
 *
 * @param {string} string
 * @param {int} support
 * @param {node} element
 *
 * CSS passend zur Auswahl anzeigen
 */
function displayCSS(string, support, element = '.js-css-display') {
    // CSS ohne Kommentare anzeigen
    document.querySelector(element).innerHTML = trim_comments(string);

    // Kommentare durchgehen
    for (var i = 1; i < parseInt(support); i++) {
        // Alles zwischen /* onlyN */ und /* endonlyN */ lesen und inklusive Kommentar entfernen
        let removeOnly = new RegExp(
            `\\/\\* only${i} \\*\\/(\[\\s\\S\]*?)\\/\\* endonly${i} \\*\\/`,
            'g'
        );
        string = string.replace(removeOnly, '');
        // Alles zwischen /* untilN */ und /* enduntilN */ lesen und inklusive Kommentar entfernen
        let removeUntil = new RegExp(
            `\\/\\* until${i} \\*\\/(\[\\s\\S\]*?)\\/\\* enduntil${i} \\*\\/`,
            'g'
        );
        string = string.replace(removeUntil, '');

        // CSS ohne Kommentare anzeigen
        document.querySelector(element).innerHTML = trim_comments(string);
    }
}

/**
 *
 * @param {int} index
 * Support text anzeigen
 */
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

// Support-Steuerung erstellen
if (document.querySelector('.js-css-rendered')) {
    // Code einfügen (Standard: Grid support)
    displayCSS(css, support_slider.value, '.js-css-rendered');

    for (var i = 0; i < support.length; i++) {
        // Checkboxen erstellen
        const box_wrapper = document.createElement('div');
        const box = document.createElement('input');
        const box_label = document.createElement('label');

        box.setAttribute('type', 'radio');
        box.id = 'support_toggle' + i;
        box.name = 'support_toggle';
        box.value = i + 1;

        box_label.textContent = support[i];
        box_label.setAttribute('for', 'support_toggle' + i);

        if (i === support.length - 1) {
            box.checked = "checked";
        }

        box_wrapper.appendChild(box);
        box_wrapper.appendChild(box_label);

        // Event wird bei click auf die Checkbox ausgeführt
        box.addEventListener('change', function(e) {
            // Alle ausgewählten
            let boxes = document.querySelectorAll('[name="support_toggle"]:checked');
            // Wenn nichts ausgewählt, erst box auswählen
            if (!boxes.length) {
                document.querySelector(`[id="support_toggle0"]`).checked = 'checked';
                boxes = document.querySelectorAll('[name="support_toggle"]:checked');
                // boxes = document.querySelector(`[id="support_toggle${support.length - 1}"]`);
                console.log(boxes.length)
            }
            // Zuletzt ausgewählte
            const last_box = boxes[boxes.length - 1];
            let string = css;

            // Ich treffe die Annahme, dass @supports nie ausgegeben werden soll
            let removeAtSupports = new RegExp(`\\@supports\\((\[\\s\\S\]*?)\\}\\}`, 'g');
            string = string.replace(/\s/g, '').replace(removeAtSupports, '');

            // Alle Optionen durchgehen
            for (var i = 1; i <= support.length + 1; i++) {
                // Wenn ausgewählte Option
                if (i !== parseInt(last_box.value)) {
                    // Alles zwischen /* onlyN */ und /* endonlyN */ lesen und inklusive Kommentar entfernen
                    let remove = new RegExp(
                        `\\/\\*only${i}\\*\\/(\[\\s\\S\]*?)\\/\\*endonly${i}\\*\\/`,
                        'g'
                    );
                    string = string.replace(remove, '');
                }

                // Wenn niedriger als ausgewählte Option, alles was until ist entfernen
                if (i < parseInt(last_box.value)) {
                    let remove2 = new RegExp(
                        `\\/\\*until${i}\\*\\/(\[\\s\\S\]*?)\\/\\*enduntil${i}\\*\\/`,
                        'g'
                    );

                    string = string.replace(remove2, '');
                }

                document.querySelector('.js-css-rendered').innerHTML = string;
            }
        });

        support_toggle.appendChild(box_wrapper);
    }
}
