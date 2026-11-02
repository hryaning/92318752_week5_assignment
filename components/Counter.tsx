"use client";

import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
    setCount((current) => current + 1);
    };

    return (
    <div>
        <p>클릭 횟수: {count}</p>
        <button onClick={increase}>
        클릭하기
        </button>
    </div>
    );
}