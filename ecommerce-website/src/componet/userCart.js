import React, { useState, useEffect } from "react";

export function UserCart({ userId, deleteTask }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data when the component mounts
    fetch(`http://localhost:8000/api/users/${userId}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setUser(null);
      })
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    user.cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.product.productName}</td>
          <td>{item.quantity}</td>
          <td>${item.product.productPrice * item.quantity}</td>
          <td>
            <button onClick={() => deleteTask(item.product.id)}>X</button>
          </td>
        </tr>
      )
    })
  );
}

export default UserCart;
