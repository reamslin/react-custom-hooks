import React, { useState } from "react";

const useFlip = () => {
    const [isFaceUp, setIsFaceUp] = useState(true);
    const toggleFlip = () => {
        setIsFaceUp(f => !f);
    };
    return [isFaceUp, toggleFlip];
}

export default useFlip;