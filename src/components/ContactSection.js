import React from "react";
import Heading from "./common/Heading";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

function ContactSection({ email, location, phone }) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
      <Heading name={"Contact Me."} />
      <div className="flex justify-between items-center flex-wrap flex-row mt-14">
        <div className="xl:w-3/12 w-full mx-4">
          <ContactDetail email={email} location={location} phone={phone} />
        </div>
        <div className="xl:w-7/12 w-full mx-4">
          <ContactForm email={email} />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
