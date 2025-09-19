// menyimpan data todo
let saveTodo = [];


//fungsi menambah todo
function add() {
    // console.log("Hello World");

    const todoInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("todo-date");
    const Status = document.getElementById("status");

        console.log("Todo :", todoInput.value);
        console.log("Date :",dateInput.value);
        console.log("status :",Status.value);

    if (ValidateInput(todoInput.value, dateInput.value, Status.value)) {

        // menambahkan data ke array
       const formData = { task: todoInput.value, date: dateInput.value, status: Status.value };
       saveTodo.push(formData);
       console.log(saveTodo);

       //tampilkan data ke tabel
       displayTodo();
       updateSummary();
    

         //mengosongkan inputan setelah data ditambahkan
         todoInput.value = "";
        dateInput.value = "";
        Status.value = "";


    }
}


// hapus 1 todo
function deleteTodo(index) {
    saveTodo.splice(index, 1);
    displayTodo();
    updateSummary();
}



// hapus semua todo
function deleteAll() {
    saveTodo = [];
    displayTodo();
    updateSummary();
}

// filter todo
function filterTodo() {
    let filterValue = document.getElementById("filter").value;
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    // pilih data sesuai filter
    let filteredTodos = saveTodo.filter(item => {
        if (filterValue === "all") return true;
        return item.status === filterValue;
    });

    // kalau kosong
    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;">No task found</td>
            </tr>`;
        return;
    }

    // render data hasil filter
    filteredTodos.forEach((item, index) => {
        todoList.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.task}</td>
            <td>${item.date}</td>
            <td>${item.status}</td>
            <td>
                <button onclick="deleteTodo(${index})">Delete</button> | 
                <button onclick="editTodo(${index})">Edit</button> 
            </td>
        </tr>
        `;
    });
}



function displayTodo() {
    let todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    saveTodo.forEach((item, index) => {

        todoList.innerHTML += `
           

       <tr>
            <td>${index + 1}</td>
            <td>${item.task}</td>
            <td>${item.date}</td>
            <td>${item.status}</td>
            <td>
                <button onclick="deleteTodo(${index})">Delete</button>
               
            </td>
        </tr>
        `;  
    });
    updateSummary()
    
}




function updateSummary() {
    let total = saveTodo.length;
    let complete = saveTodo.filter(item => item.status === "complete").length;
    let pending = saveTodo.filter(item => item.status === "pending").length;

    document.getElementById("total").textContent = total;
    document.getElementById("complete").textContent = complete;
    document.getElementById("pending").textContent = pending;
}







function ValidateInput(input, date, status) {
    if (input === "" || date === "" || status === "") {
        alert("Masukan inputan jangan kosong");
        return false;
        
    }
    alert
        return true;

    
}