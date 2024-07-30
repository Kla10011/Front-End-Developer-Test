import React from "react";

const sizes = {
    text_text_medium_1: "text-[18px] font-medium lg:text-[15px]",
    heading_heading_1: "text-[36px] font-bold lg:text-[30px] md:text-[34px] sm:text-[32px]",
    heading_heading_2: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
    heading_heading_3: "text-[24px] font-bold lg:text-[20px] md:text-[22px] ",
    texts: "text-[18px] font-medium lg:text-[25px] ",
}

const Heading = ({ children, className = "",size = "heading_heading_3",as, ...restProps }) => {
    const Component = as || "h6";

    return (
        <Component className={`text-color-black font-poppins ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    )
}

export {Heading}