import React, { useEffect, useState } from "react";
import cn from "classnames";

import styles from "./Right.module.css";

export const RightPart = ({loaded}) => {
    const [isWhite, setIsWhite] = useState(false);

    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (event) => {
            setTranslateX(event.screenX);
            setTranslateY(event.screenY);
        })

        const interval = setInterval(() => {
            setIsWhite((value) => !value);
        }, 60000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const backgroundStyle = {
        transform: `scale(1.2) translate(${translateX / -50}px, ${translateY / -50}px)`
    }

    const bakcgroundClasses = cn(styles.background, {[styles.whiteWigwam]: isWhite, [styles.blackWigwam]: !isWhite });

    return (
        <div className={cn(styles.rightPart, {[styles.loaded]: loaded})}>
            <div className={bakcgroundClasses} style={backgroundStyle} />
        </div>
    )
}