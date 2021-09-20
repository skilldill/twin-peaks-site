import React, { useState } from "react";
import styles from "./Main.module.css";
import {StartLoader} from "./components";

export const Main = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={styles.main} onClick={() => setLoaded(!loaded)}>
            <h1>T<span>W</span>IN</h1>
            <h1>PEAKS</h1>
            <StartLoader loaded={loaded} />
        </div>
    )
}