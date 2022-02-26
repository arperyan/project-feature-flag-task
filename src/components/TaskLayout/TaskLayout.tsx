import React from "react";

import TaskCard from "../TaskCard/TaskCard";
import MultipleTaskCard from "../MultipleTaskCard/MultipleTaskCard";

import styles from "./tasklayout.module.css";

import { LayoutProps, ToggleData } from "../../types";

const TaskLayout: React.FC<LayoutProps> = ({ options }) => {
    const { componentData } = options;

    return (
        <div className={styles.container}>
            {componentData.map((data: ToggleData, index: number) => {
                return !data.multiple ? (
                    <TaskCard key={`input-${index}`} taskData={data}></TaskCard>
                ) : (
                    <MultipleTaskCard key={`input-${index}`} taskData={data}></MultipleTaskCard>
                );
            })}
        </div>
    );
};

export default TaskLayout;
