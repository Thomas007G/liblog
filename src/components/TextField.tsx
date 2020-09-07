import React, { useState } from "react";

interface Props {
    text?: string;
}

export const TextField: React.FC<Props> = ({text}) => {

    const [count, setCount] = React.useState<number>(0);

    return (
        <div>
            <input type="text" placeholder={text} /*value={count}*/ contentEditable="true" />

            <input type="button" value="click me" />
        </div>
    );
}
