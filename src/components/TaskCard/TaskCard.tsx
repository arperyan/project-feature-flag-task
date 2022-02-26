import React from "react";

import styles from "./taskcard.module.css";

import { ToggleData } from "../../types";

type SliderProps = { taskData: ToggleData };

const TaskCard: React.FC<SliderProps> = ({ taskData }) => {
    const { title, name, type } = taskData;

    return (
        <div className={styles.card}>
            <h5>{title}</h5>
            <input id={title} type={type} name={name} aria-label={name} />
            <label htmlFor={title} />
        </div>
    );
};

export default TaskCard;
