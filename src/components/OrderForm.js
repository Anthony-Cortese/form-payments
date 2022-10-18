import React, { useState } from "react";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./styles.css";

const SERVICE_ID = "service_ryvb0hc";
const TEMPLATE_ID = "template_3faiu0m";
const USER_ID = "qcQHx2t-VGcy8g43F";

function OrderForm() {
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <section id="order-form">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-full-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Enter full name"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <SemanticDatepicker onChange={onChange} />;
        <Form.Field
          id="form-textarea"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
      OrderForm
    </section>
  );
}

export default OrderForm;
