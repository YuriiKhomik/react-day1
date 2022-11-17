// import { Button } from './Button';
// import { Product } from './Product'


// const styles = {
//   color: '#010101',
// };

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
// const productPrice = 10.99;

// const imageUrl2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png';
// const productPrice2 = 1.23;

// const productData = [
//   {
//     id: 1,
//     img: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
//     price: 11.12,
//     discount: {
//       value: 17
//     },
//   },
//     {
//     id: 2,
//     img: 'https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg',
//     price: 7.22,
//     discount: {
//       value: 23
//     },
//   },
//       {
//     id: 3,
//     img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
//     price: 110.10,
//   },
//         {
//     id: 4,
//     img: 'https://i.cbc.ca/1.6540013.1659556726!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/dave-brosha-photography-one-time-use.jpg',
//     price: 234.55,
//   },
// ]

// export const App = () => {
//   return (
//     <div style={styles}>
//       <h1>React homework template</h1>
//       <Product image={productData[0].img} price={productData[0].price} discount={productData[0].discount} />
//       <Product image={productData[1].img} price={productData[1].price} discount={productData[1].discount} />
//       <Product image={productData[2].img} price={productData[2].price} discount={productData[2].discount} />
//       <Product image={productData[3].img} price={productData[3].price} discount={productData[3].discount}/>
//     </div>
//   );
// };



// мапаємо колекцію елементів, щоби відрендерити все за раз

import { Button } from './Button';
import { Product } from './Product'


const styles = {
  color: '#010101',
};

const productData = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
    price: 11.12,
    title: 'Taco XXL',
    discount: {
      value: 17
    },
  },
    {
    id: 2,
    img: 'https://petapixel.com/assets/uploads/2022/07/DALLEcopy.jpg',
      price: 7.22,
    title: 'Taco 2XXL',
    discount: {
      value: 23
    },
  },
      {
    id: 3,
    img: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        price: 110.10,
    title: 'Taco XS',
  },
        {
    id: 4,
    img: 'https://i.cbc.ca/1.6540013.1659556726!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/dave-brosha-photography-one-time-use.jpg',
          price: 234.55,
    title: 'Taco M',
  },
]

export const App = () => {
  return (
    <div style={styles}>
      <h1>React homework template</h1>
      {/* з масиву даних productData ми баремо в меп ті значення: які нас цікавлять */}
      {productData.map(product => {
        return (
          // імпортуємо шаблон із Product.jsx
          // важливо додавати унікальний ідентифікатор у вигляді key (це може бути продакт айді або просто індекс, але індекс лише тоді: коли колекція не міняється, тому краще айді)
          // можна також, дати key у вигляді посилання на img (він теж буде унікальним)
          <Product key={product.id} image={product.img} price={product.price} title={product.title} discount={product.discount} />
        )
      })}
    </div>
  );
};