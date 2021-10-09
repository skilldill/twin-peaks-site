import React, { useState } from "react";
import cn from "classnames";

import styles from "./Main.module.css";
import {StartLoader} from "./components";
import { RightPart } from "./components/RightPart";

export const Main = () => {
    const [loaded, setLoaded] = useState(false);

    useState(() => {
        const startTimeout = setTimeout(() => {
            setLoaded(true);
        }, 4000)

        return () => {
            clearTimeout(startTimeout);
        }
    }, [])

    return (
        <div className={cn(styles.main, {[styles.loaded]: loaded})} onClick={() => setLoaded(!loaded)}>
            <div className={styles.leftPart}>
                <h1>T<span>W</span>IN</h1>
                <h1>PEAKS</h1>
            </div>

            <RightPart loaded={loaded} />

            <StartLoader loaded={loaded} />
        </div>
    )
}