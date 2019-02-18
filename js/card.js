const support = [
    'IE10+, Firefox 2+, Chrome 1+, Edge 12, Safari 3.1',
    'IE11+, Firefox 22+, Chrome 29+, Edge 12, Safari 9',
    'Firefox 52+, Chrome 57+, Edge 16+, Safari 10.1'
];
const css = `
        .card {
          box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
          border-radius: 3px;
          /* only2 */
          display: flex;
          /* endonly2 */
          /* only3 */
          display: grid;
          grid-template-columns: 50% min-content 1fr;
          grid-template-rows: min-content 1fr;
          grid-gap: 0.75rem;
          grid-template-areas:
            "photo header header"
            "photo description description";
          /* endonly3 */
        }
        
        /* only3 */
         @media screen and (max-width: 768px) {
         .card {
            grid-template-columns: min-content 1fr 1fr;
            grid-template-areas:
                "header header header"
                "photo photo photo"
                "description description description";
            }
        }
        /* endonly3 */
        
        /* only2 */
         @media screen and (max-width: 768px) {
         .card {
            display: block;
            }
        }
        /* endonly2 */
        
        /* only1 */
        .card::after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: 0;
        }
        /* endonly1 */
        
        
        .card__img {
        /* only1 */
        float:left;
        /* endonly1 */
        /* until2 */
        width: 50%;
        /* enduntil2 */
        /* only3 */
          grid-area: photo;
        /* endonly3 */
         }
         
        .card__header {
        /* only1 */
        float:left;
        /* endonly1 */
        /* until2 */
        width: 50%;
        /* enduntil2 */
        /* only3 */
          grid-area: header;
        /* endonly3 */
        }
        
        .card__description {
        /* only1 */
        float:left;
        /* endonly1 */
        /* until2 */
        width: 50%;
        /* enduntil2 */
        /* only3 */
          grid-area: description;
        /* endonly3 */
        }
        
        /* until2 */
         @media screen and (max-width: 768px) {
         .card__img {
            /* only1 */
            float:none;
            /* endonly1 */
            width: 100%;
            }
         .card__header {
            /* only1 */
            float:none;
            /* endonly1 */
            width: 100%;
            }
         .card__description {
            /* only1 */
            float:none;
            /* endonly1 */
            width: 100%;
            }
        }
        /* enduntil2 */
        
        .card__img img {
          width: 100%;
          height: 100%;
          display: block;
        }
`;