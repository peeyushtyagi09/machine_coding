import employees from "./data.js";

let array = employees;
function Question1(){
    console.log(array);
    array.forEach((e)=>{
        console.log(e.id);
    })
    return (
        <div>
            <h1>Question 1</h1>
            
        </div>
    )
}

export default Question1;