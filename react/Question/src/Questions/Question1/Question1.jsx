import employees from "./data.js";
import Employee from "./components.jsx"; // Use PascalCase for components

function Question1() {
    // 1. The main mistake is that you are not actually rendering the Employee components inside the return statement.
    // 2. Also, you should use PascalCase (Employee) for component imports and usage in JSX.
    // 3. When rendering in JSX, spread the props or pass as properties.
    // 4. Remove unused 'let array' variable and avoid side effect code inside the function body that's not in return.

    return (
        <div>
            <h1>Question 1</h1>
            {employees.map((e) => (
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