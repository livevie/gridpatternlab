const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .wrapper {
        /* until1 */
            max-width: 960px;
            margin: 0 auto;
            position: relative;
        /* enduntil1 */
        /* only2 */
            display: grid;
            grid-template-columns: 1fr [content] minmax(auto, 960px) 1fr;
        /* endonly2 */
        }
        
        /* only2 */
        .header__content, .main__content, .footer__content {
            grid-column-start: content;
        }
        /* endonly2 */
`;
