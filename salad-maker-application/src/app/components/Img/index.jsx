"use client";
import React, { useState } from "react";
import Image from "next/image";

const BASE_URL = process.env.BASE_PATH || "/images/";
const Img = ({
    className,
    src = "defaultNoData.png",
    alt = "testImg",
    isstatic = false,
    width,
    height,
    ...restProps
}) => {
    const [imgsrc, setImgsrc] = useState(src);
    return (
        <Image
            className={className}
            src={isstatic ? imgsrc : BASE_URL + imgsrc}
            alt={alt} 
            width={width}
            height={height}
            {...restProps}
            onError={() => {
                setImgsrc("defaultNoData.png");
            }}
        />
    );
};
export { Img };
