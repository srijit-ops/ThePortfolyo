import React from "react";
import Button from "./common/Button";
import Styles from "../styles/button.module.css"

function ContactForm({ email }) {
  return (
    <div className="w-full">
      <form action='https://formsubmit.co/srijitasengupta23@gmail.com'
              method='POST'>
        <input type="text" placeholder="Name" name="Name" required  className="block w-full mx-auto my-8 outline-none border border-gray-100 focus:border-gray-300 p-3 rounded-[10px] bg-gray-100"/>
        <input type="email" placeholder="Email" name="Email" required className="block w-full mx-auto my-8 outline-none border border-gray-100 focus:border-gray-300 p-3 rounded-[10px] bg-gray-100"/>
        <textarea
          name="Message"
          placeholder="Message"
          rows={4}
          required
          className="block w-full mx-auto my-8 outline-none border border-gray-100 focus:border-gray-300 p-3 rounded-[10px] bg-gray-100"
        ></textarea>
        <button
        type="submit" aria-label="send mail"
          className={`${Styles.button} flex justify-between items-center w-fit mt-7 relative py-5 px-6 transition-all duration-200 ease-in-out before:absolute before:top-0 before:left-0 before:block before:border-28 before:rounded-full before:w-14 before:h-14 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full active:transform scale-96`}
        >
          <span className="overflow-y-hidden relative text-base leading-none font-extrabold tracking-widest uppercase align-middle">
            Submit
          </span>
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            xmlns="http://www.w3.org/2000/svg"
            className="relative fill-none stroke-[#111] dark:stroke-white stroke-2 translate-x-[-5px] transition-all duration-[0.3s] ease-[ease] ml-2.5 top-0"
          >
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
          {/* <i class="fa-solid fa-arrow-right"></i> */}
        </button>
        {/* <Button name={"Submit"} />
        <button type="submit" aria-label="send mail">
          <div className={classes.text}>SEND</div>
          <span></span>
        </button> */}
      </form>
    </div>
  );
}

export default ContactForm;
