import React from "react";

//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

import "./style2.css";
//import "./Product_Page_Home_Style.css";

import { Link } from "react-router-dom";


export function CheckoutPage() {
    return (
      <div>
        
        {/* centered checkout title */}
        <h2 className="text-center mt-5">Checkout</h2>

        <form> {/* green border around payment method with margins and padding */}
          <div className="border border-success-subtle border-2 p-3 mt-3">
              <h3>Payment Method</h3>

              <div className="mb-3"> {/* cardholder name with placeholder */}
                  <label htmlFor="cardName" className="form-label">Cardholder's Name</label>
                  <input type="text" className="form-control" id="cardName" placeholder="Enter cardholder's name" />
              </div>

              <div className="mb-3"> {/* card number with placeholder */}
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" />
              </div>

              <div className="row"> {/* col is used so that we can fit expiration date with cvv on same line */}
                  <div className="col-md-6 mb-3"> {/* expiration date with placeholder */}
                      <label htmlFor="cardExpiry" className="form-label">Expiration Date</label>
                      <input type="text" className="form-control" id="cardExpiry" placeholder="MM/YY" />
                  </div>

                  <div className="col-md-6 mb-3"> {/* security code with placeholder */}
                      <label htmlFor="cardCVV" className="form-label">CVV</label>
                      <input type="text" className="form-control" id="cardCVV" placeholder="Enter CVV" />
                  </div>
              </div>
          </div>

          {/* shipping information with green border of thickness 2 and margins + padding */}
          <div className="border border-success-subtle border-2 p-3 my-3">
              <h3>Shipping Information</h3>

              <div className="row"> {/* col is used so that first and last name fit on the same line */}
                  <div className="col-md-6 mb-3"> {/* first name box with placeholder */}
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" placeholder="John" />
                  </div>

                  <div className="col-md-6 mb-3"> {/* last name box with placeholder */}
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" placeholder="Doe" />
                  </div>
              </div>

              <div className="mb-3"> {/* address box with placeholder */}
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
              </div>

              <div className="mb-3"> {/* city box with placeholder */}
                  <label htmlFor="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="City name" />
              </div>

              <div className="row">{/* col is used so that we can fit state, zip, and country in the same line */}
                  <div className="col-md-5 mb-3"> {/* state box */}
                      <label htmlFor="state" className="form-label">State</label>
                      <input type="text" className="form-control" id="state" />
                  </div>
                  
                  <div className="col-md-4 mb-3">{/* zip box with placeholder */}
                      <label htmlFor="zip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="zip" placeholder="12345" />
                  </div>

                  <div className="col-md-3 mb-3"> {/* country box */}
                      <label htmlFor="country" className="form-label">Country</label>
                      <input type="text" className="form-control" id="country" />
                  </div>
              </div>
          </div>

          {/* d-flex and justify-content-end is used to push the buttons to the right */}  
          <div className="d-flex justify-content-end"> 
            {/* the confirm button is supposed to take the information and put it somewhere */}
            <button type="submit" className="btn btn-success mx-1">Confirm</button>
            {/* the return cart is supposed to send back to the shopping cart page */}
            <Link to="/" className="btn btn-secondary mx-1">Return to Cart</Link>
          </div>
      </form>


      </div>
    );
}



export default CheckoutPage;

