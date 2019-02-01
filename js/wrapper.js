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
