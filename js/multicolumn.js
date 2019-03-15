const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .multicolumn__elements {
        /* only2 */
            display: flex;
            flex-wrap: wrap;
        /* endonly2 */
        /* only3 */
            display: grid;
            grid-template-columns: auto;
            grid-auto-flow: column;
            grid-template-rows: repeat(5,auto);
        /* endonly3 */
        }
        
        /* only1 */
        .multicolumn__elements::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        /* until2 */
        .multicolumn__element {
            width: 250px;
        /* only1 */
            display: inline-block;
        /* endonly1 */
        }
        /* enduntil2 */
`;
