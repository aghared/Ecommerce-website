import React from "react";
//import data from "../data/db.json";

export function UserCart({userId, data, deleteTask}) {
  const user = data.users.find((user) => user.id === userId);
  if (!user) {
    return null;
  }

  return (
    user.cart.map((item, index) => {
      const product = data.products.find((product) => product.id === item.productId);
      
      if (!product) {
        return null;
      }

      return (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{item.quantity}</td>
          <td>${product.price * item.quantity}</td>
          <td>
            <button onClick={() => deleteTask(item.productId)}>X</button>
          </td>
        </tr>
      )
    })
  );
}

export default UserCart;

