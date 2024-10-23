const InputField = ({
  label,
  type = "text",
  name,
  defaultValue = "",
  required = false,
  inputProps,
  disabled = false,
  placeholder="",
  className = {},
  TypeLayout = 1,
  readOnly = false,
}) => {
  return (
    <div className={`${className} `}>
      {TypeLayout == 1 && (
        <div className="w-full flex items-end gap-8">
          {label && (
            <div className="">
              <p className="text-sm font-semibold min-w-[100px] ">
                {label}{" "}
                {required && <span className="text-red-500 ml-1">(*)</span>}
              </p>
            </div>
          )}
          <input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`${readOnly && 'bg-slate-50 pointer-events-none'} bg-inherit  p-2 border-0 border-b-[1px] border-gray-400 text-inherit focus:border-black outline-0 text-sm grow ${
              type == "number" ? "text-right" : "text-left"
            }`}
            min={0}
            defaultValue={defaultValue}
          />
        </div>
      )}

      {TypeLayout == 2 && (
        <>
          <div className="w-full">
            <label className="text-xs font-bold text-gray-500 ">
              {label}{" "}
              {required && <span className="text-red-500 ml-1">(*)</span>}
            </label>
          </div>
          <input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            className={` p-2  focus:border-black ring-[1.5px] ring-gray-300 bg-inherit rounded-lg outline-0 text-sm grow w-full `}
            defaultValue={defaultValue}
          />
        </>
      )}

      {TypeLayout == 3 && (
        <div className="w-full">
          {label && (
            <div className="">
              <label className="text-xs font-bold text-gray-500 min-w-[100px] ">
                {label}{" "}
                {required && <span className="text-red-500 ml-1">(*)</span>}
              </label>
            </div>
          )}
          <input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            readOnly={readOnly}
            className={`${readOnly && 'bg-slate-50 pointer-events-none'} p-2 border-0 border-b-[1px] bg-inherit text-inherit focus:border-black outline-0 text-sm  w-full ${
              type == "number" ? "text-right" : "text-left"
            }`}
            min={0}
            defaultValue={defaultValue}
          />
        </div>
      )}
    </div>
  );
};

export default InputField;
