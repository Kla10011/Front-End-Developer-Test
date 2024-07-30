"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[16px]",
};

const variants = {
    fill: {
        color_white_0: "bg-white",
    },
};

const sizes = {
    sm: "h-[60px] pl-6 pr-[64px] text-[18px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            children,
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "sm",
            color = "color_white_0", // Default color is white
            ...restProps
        },
        ref
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center gap-2 cursor-text text-color-gray_1 text-[18px] ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant]?.color_white_0 || ""} ${sizes[size] || ""}`}
            >
                {!!label && <span>{label}</span>}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...restProps}
                />
                {!!suffix && suffix}
            </label>
        );
    }
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["color_white_0"]), // Only one color variant
};

export { Input };
