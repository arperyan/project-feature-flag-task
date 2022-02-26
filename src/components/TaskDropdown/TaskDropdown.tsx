import React from "react";

import styles from "./taskdropdown.module.css";

//import { DropDownProps } from "../../types";

type DropDownProps = {
    dropdownData: {
        name: string;
        optionValue: number[];
    };
};

const TaskCard: React.FC<DropDownProps> = ({ dropdownData }) => {
    const { name, optionValue } = dropdownData;

    return (
        <div className={styles.card}>
            <select name={name}>
                {optionValue.map((data: number, index: number) => (
                    <option key={`drop-${index}`} value={data}>
                        {data}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TaskCard;
