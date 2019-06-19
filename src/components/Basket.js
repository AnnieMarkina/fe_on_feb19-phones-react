import React from 'react';

const Basket = (props) => (
    <section>
      <p>Shopping Cart</p>
      <ul>
        { Object.keys(props.items).map(
          phoneId => (
          <li key={phoneId}>
            {phoneId} - { props.items[phoneId] }
            <button
              onClick={() => props.onRemove(phoneId)}>
              x
              </button>
          </li>
          )
        ) }
      </ul>
    </section>
  );

export default Basket;
