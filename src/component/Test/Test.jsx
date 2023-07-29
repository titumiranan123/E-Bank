import { useState } from "react";

const AnimatedButton = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className="w-1/2 mx-auto mt-8">
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative bg-orange-500 text-white px-4 py-2 rounded-lg focus:outline-none overflow-hidden transition-all duration-300 z-50"
            >
                <span className="relative z-10">Hover Me</span>
                <div
                    className={`absolute left-0 top-0 h-full ${hover
                            ? "w-full opacity-100 transition-all duration-500 ease-in-out bg-slate-700"
                            : "w-0 opacity-0 transition-all duration-500 ease-in-out bg-transparent"
                        }`}
                ></div>
            </button>
        </div>
    );
};

export default AnimatedButton;
