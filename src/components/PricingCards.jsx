export default function PricingCard({feature, price, title, description, buttonText, isPopular}) {
 
    return (
        <div className={`flex flex-col rounded-xl border
                ${
                isPopular
                    ? "border-white bg-white px-8 py-7 text-black"
                    : "border-white px-8 py-7 text-white"
                }
            `}
            >
            {isPopular && (
                <div className="self-end rounded-full bg-[#4965ff] px-4 py-1 text-[10px] font-bold text-black">
                MOST POPULAR
                </div>
            )}
    
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold">
              {price}
            </span>
    
            <span className={`text-xs ${
                    isPopular ? "text-slate-600" : "text-slate-400"
                }`}>
              /month
            </span>
          </div>
    
          {/* Title */}
          <h2 className="mt-2 text-left text-lg font-bold">
            {title}
          </h2>
    
          {/* Description */}
          <p className={`mt-2 text-left text-xs leading-5 
           ${ isPopular ? "text-slate-600" : "text-slate-400"
            }`}>
            {description}
        </p>
    
          {/* Features */}
            <ul className="mt-9 space-y-5">

                {feature.map((item, index) => (
                    <li
                    key={index}
                    className="flex items-center"
                    >
                    <span className="mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400">
                        <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </span>

                    <span className={`text-sm font-medium ${
                        isPopular ? "text-slate-800" : "text-slate-300"
                    }`}>
                        {item}
                    </span>

                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className={`mt-8 w-full rounded-full bg-[#4965ff] py-3 text-[12px] font-medium ${
                isPopular ? "text-black" : "text-white"
            }`} >
                {buttonText}
            </button>
    
        </div>
      )
}

  