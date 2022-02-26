import React, { useState } from "react";

import TaskDropdown from "../TaskDropdown/TaskDropdown";

import styles from "./multipletaskcard.module.css";

import { ToggleData } from "../../types";

type SliderProps = { taskData: ToggleData };

const MultipleTaskCard: React.FC<SliderProps> = ({ taskData }) => {
    const [isOpen, isOpenSet] = useState(false);

    const { group } = taskData;

    return (
        <div className={styles.card}>
            {group?.map((data, index) => {
                const { title, type, name, dropdown } = data;

                return !data.multiple ? (
                    <div key={`multiInput-${index}`} className={styles.card_item}>
                        <h5>{title}</h5>
                        <div className={styles.dropdown}>
                            {dropdown?.length ? <TaskDropdown dropdownData={dropdown[0]} /> : ""}
                            <input id={title} type={type} name={name} aria-label={name} />
                            <label htmlFor={title} />
                        </div>
                    </div>
                ) : (
                    <div key={`multiDrop-${name}`}>
                        <div className={styles.card_item__accordian}>
                            <h5>{title}</h5>
                            <div className={styles.card_item__button}>
                                <input id={title} type={type} name={name} aria-label={name} />
                                <label htmlFor={title} />
                                <a className={styles.button_icon} onClick={() => isOpenSet((prev: boolean) => (prev = !isOpen))}>
                                    <i className={`fa ${isOpen ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"}`}></i>
                                </a>
                            </div>
                        </div>
                        {isOpen && (
                            <div>
                                <MultipleTaskCard taskData={data}></MultipleTaskCard>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default MultipleTaskCard;
