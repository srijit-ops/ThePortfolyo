import React from "react";

function Heading({ name }) {
  return (
    <div className="my-6">
      <h1 className="font-semibold text-gray-950 sm:text-5xl text-3xl tracking-wider overflow-y-hidden dark:text-white">
        {name}
      </h1>
    </div>
  );
}

export default Heading;
