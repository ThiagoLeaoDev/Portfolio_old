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
        <SC.LabelContact for="name">Your name</SC.LabelContact>
        <SC.InputContact type="text" id="name" name="name" required />
      </SC.GroupLabelInput>

      <SC.GroupLabelInput width="386px">
        <SC.LabelContact for="email">Your email</SC.LabelContact>
        <SC.InputContact type="email" id="email" name="email" required />
      </SC.GroupLabelInput>

      <SC.GroupLabelInput width="100%">
        <SC.LabelContact for="subject">Subject</SC.LabelContact>
        <SC.InputContact type="text" id="subject" name="subject" required />
      </SC.GroupLabelInput>

      <SC.GroupLabelInput width="100%">
        <SC.LabelContact for="message">Message</SC.LabelContact>
        <SC.InputContactText id="message" name="message" required height="160px" />
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
