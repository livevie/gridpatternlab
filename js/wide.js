const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `body {
    background: #fff;
  } 
      .description-list {
          /* only2 */
          display: flex;
          flex-flow: column;
          /* endonly2 */
          /* only3 */
          display: grid;
          grid-template-columns: minmax(auto, max-content);
          grid-gap: 10px;
          /* endonly3 */
      }
      
      /* until2 */
      .description-item {
        margin-bottom: 10px;
      }
      /* enduntil2 */
      
      /* only1 */
      .description-item {
        display: block;
      }
      /* endonly1 */
      
`;