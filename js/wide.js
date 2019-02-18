const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .description__list {
        /* only2 */
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        /* endonly2 */
        /* only3 */
            display: grid;
            grid-template-columns: minmax(auto, max-content) 1fr;
            grid-gap: 10px;
        /* endonly3 */
        }
        
        /* only1 */
        .description__list::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        /* until2 */
        .description__item {
            margin-bottom: 10px;
            width: 49%;
        }
        /* enduntil2 */
        
        /* only1 */
        .description__item {
            float: left;
            margin-right: 10px;
        }
        /* endonly1 */
`;