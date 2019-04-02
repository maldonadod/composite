import React from "react";

function Container({children, label}) {

    return (
        <div>
            <label>{label}</label>
            {children}
        </div>
    )
}

export default Container;