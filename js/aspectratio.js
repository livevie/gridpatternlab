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
        
        /* only3 */
         @media screen and (max-width: 768px) {
         .container {
                grid-auto-rows: 100px;
                grid-gap: 5px;
            }
        }
        /* endonly3 */
        
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
            margin-right: 5px;
            /* endonly1 */
        }
        /* enduntil2 */
        
        /* until2 */
        @media screen and (max-width: 768px) {
            .item {
                width: 100%;
                /* only1 */
                margin-right: 0;
                /* endonly1 */
            }
        }
        /* enduntil2 */
        
        .item__sm {
            background-image: url(https://source.unsplash.com/UCIZh0-OYPw);
            background-size: cover;
            background-position: center;
        }

        .item__sm:nth-child(2) {
            background-image: url(https://source.unsplash.com/Ic0q_M542Is);
            background-size: cover;
            background-position: center;
        }
        
        .item__lg {
        background-image: url(https://source.unsplash.com/U_D5NWMmTTM);
        background-size: cover;
        background-position: center;
        /* only3 */
            grid-column: span 2;
            grid-row: span 2;
        /* endonly3 */
        }   
        
        .item__db {
            background-image: url(https://source.unsplash.com/uCTlqRpsv5c);
            background-size: cover;
        /* only3 */
            grid-column: span 2;
        /* endonly3 */
        }

`;