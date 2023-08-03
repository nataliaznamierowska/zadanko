const addTodoElem = () => {
    const input = document.querySelector("todo-input");
    const todoElem = {
        title: input.value,
    };
    axios
     .post("https://jsonplaceholder.typicode.com/todos", todoElem)
     .then((response) => console.log(response.data)) 
     .catch((error) => {
        console.log(error);
        const div = document.querySelector("#input-container");
        const inputLabel = document.createElement("label");
        inputLabel.setAttribute("data-test", "todo-input-label");
        inputLabel.innerText = "Request error";
        inputLabel.setAttribute("for", "todo-input");
        div.appendChild(inputLabel);
     });
};

const btn = document.querySelector("#add-button");
btn.addEventListener("click", addTodoElem);