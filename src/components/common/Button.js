import Link from "next/link";
import Styles from "../../styles/button.module.css";

function Button({ name }) {
  return (
    <Link
      href="#"
      className={`${Styles.button} flex justify-between items-center w-fit mt-7 relative py-5 px-6 transition-all duration-200 ease-in-out before:absolute before:top-0 before:left-0 before:block before:border-28 before:rounded-full before:w-14 before:h-14 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full active:transform scale-96`}
    >
      <span className="overflow-y-hidden relative text-base leading-none font-extrabold tracking-widest uppercase align-middle">
        {name}
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
    </Link>
  );
}

export default Button;
