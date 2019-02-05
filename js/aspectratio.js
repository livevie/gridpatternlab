const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `body {
    background: #fff;
  } 
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
      
      /* until2 */
        .item--sm {
            width: 285px;
            height: 300px;
            /* only1 */
            float: right;
            margin-left: 20px;
            /* endonly1 */
        }
        /* enduntil2 */
      
      .item--lg {
        /* only1 */
        float: left;
        /* endonly1 */
        /* until2 */
        width: 590px;
        height: 620px;
        /* enduntil2 */
        /* only3 */
        grid-column: span 2;
        grid-row: span 2;
        /* endonly3 */
      }   
      
      .item--db {
        /* only1 */
        float: right;
        margin-left: 20px;
        /* endonly1 */
       /* until2 */
        width: 590px;
        height: 300px;
        margin-top: 20px;
        /* enduntil2 */
        /* only3 */
        grid-column: span 2;
        /* endonly3 */
      }
      
`;