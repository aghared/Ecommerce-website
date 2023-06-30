import React, { useState, useEffect } from "react";

export function UserCart({userId, userCart, deleteTask}) {
  return (
      userCart.map((item, index) => {
          const product = item.product;
          if (!product) {
              return null;
          }

          return (
              <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{item.quantity}</td>
                  <td>${product.productPrice * item.quantity}</td>
                  <td>
                      <button onClick={() => deleteTask(index)}>X</button>
                  </td>
              </tr>
          )
      })
  );
}

export default UserCart;
