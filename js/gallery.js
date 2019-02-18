const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .gallery {
        /* only2 */
            display: flex;
            flex-wrap: wrap;
        /* endonly2 */
        
        /* only3 */
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-auto-rows: 200px;
        /* endonly3 */
        }
        
        /* only1 */
        .gallery::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        .photo {
        background-image: url(https://source.unsplash.com/tvleqH3p1os);
        background-size: cover;
        /* until2 */
            width: 250px;
            height: 200px;
            margin: 10px;
        /* enduntil2 */
        /* only1 */
            float: left;
        /* endonly1 */
        }
        
        /* only2 */
        @supports (display: grid) {
        .photo {
            width: auto;
            height: auto;
            margin: 0;
        }
        }
        /* endonly2 */
`;
