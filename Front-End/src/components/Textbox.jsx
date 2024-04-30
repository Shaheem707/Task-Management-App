import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <div>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-slate-700 p-2 focus:outline-none text-slate-300",
              className
            )}
          />
        </div>
        {error && (
            <span className="text-xs text-red-500 mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;
