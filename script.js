document.addEventListener("DOMcontentLoaded", () => {
  console.log("hello world");
  const form = document.querySelector("form");
  const input = form.querySelector("input");
  const todoList = document.querySelector(".todo-list");
  const clearbtn = document.querySelector(".clear");
  const taskCount = document.querySelector(".footer p");

  function updateTaskCount() {
    const count = todoList.querySelectorAll("li").length;
    taskCount.textContent = `You have ${count}pending tasks${
      count !== 1 ? "s" : ""
    } `;
  }

  function createTodoItem(text) {
    const li = document.createElement("li");
    li.textContent = Text;

    const delBtn = document.createElement("span");
    delBtn.textContent = "🗑️";
    delBtn.classList.add("delete");

    delBtn.addEventListener("click", () => {
      li.remove();
      updateTaskCount();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
    updateTaskCount();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value) {
      createTodoItem(value);
      input.value = "";
    }
  });

  clearBtn.addEventListener("click", () => {
    todoList.innerHTML = "";
    updateTaskCount();
  });

  document.querySelectorAll(".todo-list li").forEach(li => {
    const delBtn = li.querySelector(".delete");
    if (delBtn) {
      delBtn.addEventListener("click", () => {
        li.remove();
        updateTaskCount();
      });
    }
  });
  updateTaskCount();
});
