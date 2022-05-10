import emailjs from "emailjs-com";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import * as SC from "../../styles/mainStyle";

import { HiOutlineMailOpen } from "react-icons/hi";

export default function contactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_907cqgt",
        "template_irpyxzu",
        e.target,
        "N0sHBKiPSRBMP7N-1"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email successfully sent!", {
            style: {
              background: "#333",
              color: "#fff",
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <SC.FormContact onSubmit={sendEmail}>
      <Toaster />
      <SC.GroupLabelInput margin="55px" width="290px">
        <SC.LabelContact>Your name</SC.LabelContact>
        <SC.InputContact type="text" name="name" required />
      </SC.GroupLabelInput>

      <SC.GroupLabelInput width="386px">
        <SC.LabelContact>Your email</SC.LabelContact>
        <SC.InputContact type="email" name="email" required />
      </SC.GroupLabelInput>

      <SC.GroupLabelInput width="100%">
        <SC.LabelContact>Subject</SC.LabelContact>
        <SC.InputContact type="text" name="subject" required />
      </SC.GroupLabelInput>

      <SC.GroupLabelInput width="100%">
        <SC.LabelContact>Message</SC.LabelContact>
        <SC.InputContactText type="" name="message" required height="160px" />
      </SC.GroupLabelInput>
      <SC.ContainerButton>
        <SC.ButtonContact type="submit">
          <HiOutlineMailOpen color="#202020" size="1.2em" />
          Send
        </SC.ButtonContact>
      </SC.ContainerButton>
    </SC.FormContact>
  );
}
