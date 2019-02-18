const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .card {
          box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
          border-radius: 3px;
          /* only2 */
          display: grid;
          grid-template-columns: 50% min-content 1fr;
          grid-template-rows: min-content 1fr;
          grid-gap: 0.75rem;
          grid-template-areas:
            "photo header header"
            "photo description description";
          /* endonly2 */
        }
        
        /* only2 */
         @media screen and (max-width: 768px) {
         .card {
            grid-template-columns: min-content 1fr 1fr;
            grid-template-areas:
                "header header header"
                "photo photo photo"
                "description description description";
            }
        }
        /* endonly2 */
        
        /* only1 */
         @media screen and (max-width: 768px) {
         .card {
            display: block;
            }
        }
        /* endonly1 */
       
        
        
        .card__img {
        /* only2 */
          grid-area: photo;
        /* endonly2 */
         }
         
        .card__header {/
        /* only2 */
          grid-area: header;
        /* endonly2 */
        }
        
        .card__description {
        /* only2 */
          grid-area: description;
        /* endonly2 */
        }
        
        .card__img img {
          width: 100%;
          height: 100%;
          display: block;
        }
`;