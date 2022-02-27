import React from "react";

import TaskLayout from "./components/TaskLayout/TaskLayout";

import toggleSchema from "./util/schema.json";

import "./App.css";

const App = () => {
    return (
        <section>
            {toggleSchema.map((sections, index) => {
                return (
                    <div key={`card-${index}`}>
                        <h4>{sections.heading}</h4>
                        <TaskLayout options={sections.components[0]} />
                    </div>
                );
            })}
        </section>
    );
};

export default App;
