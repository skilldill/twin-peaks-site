import React from "react";
import cn from "classnames";

import styles from "./StartLoader.module.css";

export const StartLoader = ({loaded}) => {
    return (
        <div className={cn(styles.loader, {[styles.loaded]: loaded})}>
            <div className={styles.w}>
                W
            </div>
            <div className={styles.squareBox}>
                <div className={styles.square} />
            </div>
        </div>
    )
}