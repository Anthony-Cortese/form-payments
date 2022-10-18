import React from "react";
import photo from "./image.png";

function FrontPage() {
  return (
    <section>
      <img className="main" src={photo} alt="photo" />
      <h1>COOKIES BY MADISON</h1>
      <p>
        Please read the following before submitting the order request form. I
        generally book 2-4 weeks in advance, and take a limited number of orders
        each week. My cookies start at $65/dozen for the most basic. Character
        cookies and logo's start at $75/dozen. Local pick up only. My cookies
        are a vanilla sugar cookie with a almond icing. They each come
        individually packed & heat sealed so that they stay fresh & yummy! All
        orders require a 50% non refundable deposit when booking. The remaining
        balance is due one week prior to pick up. Price will increase with
        requests that will take more time. For example: hand painted lusters,
        darker colors, more designs, character cookies & airbrushing. When
        hiring an artist it's important to keep in mind that creativity is
        unique to the individual. That is what allows you to buy a unique &
        totally custom product.
      </p>{" "}
    </section>
  );
}

export default FrontPage;
