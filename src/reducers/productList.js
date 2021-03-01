const productList = (
  state = {
    products: [{
        name: "b0006se5bq",
        number: "singing coach unlimited",
        description: "singing coach unlimited - electronic learning products (win me nt 2000 xp)",
        images: [{
            url: "http://lorempixel.com/200/200/technics/",
            name: "singing coach"
          },
          {
            url: "http://lorempixel.com/200/200/abstract/",
            name: "front side"
          }
        ],
        visible: false,
        id: 0,
      },
      {
        name: "b00021xhzw",
        number: "adobe after effects professional 6.5 upgrade from standard to professional",
        description: "upgrade only; installation of after effects standard new disk caching tools speed up your interactive work save any combination of animation parameters as presets",
        images: [],
        visible: false,
        id: 1,
      },
      {
        name: "b00021xhzw",
        number: "domino designer/developer v5.0",
        description: "reference domino designer/developer r5 doc pack includes the following titles: application development with domino designer (intermediate-advanced) 536 pages it explains building applications creating databases using forms fields views folders navi",
        images: [{
          url: "http://lorempixel.com/200/200/people/",
          name: "cover"
        }],
        visible: false,
        id: 2,
      }
    ]
  }, action) => {
  switch (action.type) {
    case "SET_PRODUCT_NAME":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return (product = {
              ...product,
              name: action.payload.productName
            })
          }
          return product
        })
      }

    case "SET_PRODUCT_NUMBER":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return (product = {
              ...product,
              number: action.payload.productNumber
            })
          }
          return product
        })
      }

    case "SET_PRODUCT_DESCRIPTION":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return (product = {
              ...product,
              description: action.payload.productDescription
            })
          }
          return product
        })
      }
    
    case "SET_PRODUCT_VISIBLE":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload) {
            return (product = {
              ...product,
              visible: !product.visible
            })
          }
          return product
        })
      }

    case "SET_PRODUCT_IMAGE_NAME":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return (product = {
              ...product,
              images: product.images.map(image => {
                if (image.name === action.payload.imageId) {
                  return (image = {
                    ...image,
                    name: action.payload.imageName
                  })
                }
                return image
              })
            })
          }
          return product
        })
      }

    case "SET_PRODUCT_IMAGE_URL":
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.productId) {
            return (product = {
              ...product,
              images: product.images.map(image => {
                if (image.url === action.payload.imageId) {
                  return (image = {
                    ...image,
                    url: action.payload.imageUrl
                  })
                }
                return image
              })
            })
          }
          return product
        })
      }      

    default:
      return state
  }
}

export default productList
