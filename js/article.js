const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .article {
        /* only2 */
            display: flex;
            justify-content: space-between;
        /* endonly2 */
        /* only3 */
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 40px;
        /* endonly3 */
        }
        
        /* only1 */
        .article::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        .article__media {
        /* only1 */
            float: left;
        /* endonly1 */
        /* until2 */
            width: 49%;
        /* enduntil2 */
        /* only3 */
            grid-column: span 6;
        /* endonly3 */
        }
        
        .article__text {
        /* only1 */
            float: right;
        /* endonly1 */
        /* until2 */
            width: 49%;
        /* enduntil2 */
        /* only3 */
            grid-column: span 6;
        /* endonly3 */
        }
        
        img {
            width: 100%;
            height: auto;
        }
`;