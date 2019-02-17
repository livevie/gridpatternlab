const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .container {
        /* only2 */
            display: flex;
            flex-wrap: wrap;
        justify-content: space-between;
        /* endonly2 */
        /* only3 */
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-flow: dense;
            grid-auto-rows: minmax(300px, auto);
            grid-gap: 20px;
        /* endonly3 */
        }
        
        /* only1 */
        .container::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        /* only1 */
        .container::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        /* until2 */
        .item {
            width: 49%;
            height: 300px;
            margin-bottom: 20px;
            /* only1 */
            float: left;
            margin-right: 10px;
            /* endonly1 */
        }
        /* enduntil2 */
        
        .item__lg {
        /* only3 */
            grid-column: span 2;
            grid-row: span 2;
        /* endonly3 */
        }   
        
        .item__db {
        /* only3 */
            grid-column: span 2;
        /* endonly3 */
        }  
`;