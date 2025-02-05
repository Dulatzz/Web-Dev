const inputBox = document.getElementById("task"); 
const listContainer = document.getElementById("list-container");
const clearButton = document.getElementById("clear-button");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  
        let span = document.createElement("span");
        span.innerHTML = "x ";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Добавляем обработчик события для нажатия клавиши Enter
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Добавляем обработчик события для кнопки "Clear All Tasks"
clearButton.addEventListener("click", function () {
    clearTasks();
});

function clearTasks() {
    listContainer.innerHTML = ""; // Очищаем все задачи
    saveData(); // Сохраняем пустой список в localStorage
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Загружаем задачи при загрузке страницы
}

showTask();
