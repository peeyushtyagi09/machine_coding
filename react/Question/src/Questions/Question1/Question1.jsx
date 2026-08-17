import React, { useState } from "react";
import employees from "./data.js";
import Employee from "./Components.jsx"; 

function Question1() {
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");

    const departments = [
        ...new Set(employees.map((e) => e.department))
    ];

    
    return (
        <div>
            <h1>Question 1</h1>
            {array.map((e) => (
                <Employee 
                    key={e.id} 
                    id={e.id} 
                    name={e.name} 
                    department={e.department} 
                    role={e.role} 
                />
            ))}
        </div>
    );
}

export default Question1;