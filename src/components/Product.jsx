import { Button } from "./Button";
import PropTypes from 'prop-types';

const discountStyle = {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 17,
    padding: '5px 10px',
    marginLeft: '12px',
}

// прописуємо дискаунт чере boolean

// export const Product = ({image, price, discount}) => {
//   // const { image, price } = props;
//   // можна деструктуризувати
    
    
    
//   return (
//     <div>
//       <img src={image} alt="Tacos With Lime" width="640" />
//       <h2>Tacos With Lime</h2>
//           <p>
//               {/* замість hasOwnProperty можна приводити до булевого значення:
//               !!discount <---> Boolean(discount)
//               Boolean("asdasd") -> true
//               Boolean("") -> false
//               Boolean("undefined") -> false
//               Boolean("2") -> true
//               */}
//             Price: {price}$
//               {Boolean(discount) && <span style={discountStyle}>DISCOUNT -{discount.value}%</span>}
//         </p>
//       <Button type='button'>Buy new</Button>
//   </div>)
// };


// готуємо шаблон для розмітки продукту ("image, price, discount = {}" - це його пропси):
// прописуємо дискаунт чере hasOwnProperty (в такому випадку ми повинні додати дефолтне значення в деструктуризації у вигляді пустого масиву)

export const Product = ({ image, price, discount = {}, title }) => {
  // const { image, price } = props;
  // можна деструктуризувати  
  return (
    <div>
          <img src={image} alt={title} width="620" />
          <h2>{title}</h2>
          <p>
              {/* замість hasOwnProperty можна приводити до булевого значення:
              !!discount <---> Boolean(discount)
              Boolean("asdasd") -> true
              Boolean("") -> false
              Boolean("undefined") -> false
              Boolean("2") -> true
              */}

              {/* тут ми дискаунт рендеримо за умовою(себто, якщо дискаунт є, то ми його рендеримо, а якщо нє, то нє) */}
            Price: {price}$
              {discount.hasOwnProperty('value') && <span style={discountStyle}>DISCOUNT -{discount.value}%</span>}
        </p>
      <Button type='button'>Buy new</Button>
  </div>)
};



// прописуємо проптайпс:

Product.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.shape({
        value: PropTypes.number.isRequired,
    }),
    title: PropTypes.string.isRequired,
}