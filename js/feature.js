const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `body {
    background: #fff;
  }
  /* until3 */
  .feature {
      width: 320px;
      /* only2 */
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      /* endonly2 */
      /* only3 */
      display: grid;
      grid-template-columns: min-content 1fr;
      grid-row-gap: 15px;
      grid-column-gap: 20px;
      /* endonly3 */
  }
  /* enduntil3 */
  
  /* until3 */
  .feature__icon {
      fill: #1F5680;
      width: 35px;
      height: 35px;
      vertical-align: middle;
      /* only3 */
      grid-row: 1 / span 2;
      /* endonly3 */
    }
    /* enduntil3 */
    
    /* until2 */
    .heading {
      /* only1 */
      display: inline-block;
      /* endonly1 */
      margin-left: 10px;
      vertical-align: middle;
    }
     /* enduntil2 */
     
     /* until2 */
     .feature__text {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 50px;
        margin-right: 0px;
       }
     /* enduntil2 */

`;
