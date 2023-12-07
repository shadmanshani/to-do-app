const form = document.querySelector(".new-task-form");
const taskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
	// console.log(event);
	event.preventDefault();

	if (taskInput.value) {
		const task = taskInput.value;
		console.log(task);

		//creating task div
		const taskEl = document.createElement("div");
		taskEl.classList.add("task");

		//creating content div
		const taskElContent = document.createElement("div");
		taskElContent.classList.add("content");

		//iserting content div into task div
		taskEl.appendChild(taskElContent);

		//creating input (task)
		const taskElInput = document.createElement("input");
		taskElInput.classList.add("text");
		taskElInput.value = task;
		taskElInput.setAttribute("readonly", "readonly");

		//inserting input to content div
		taskElContent.appendChild(taskElInput);

		//creating action div
		const taskElAction = document.createElement("div");
		taskElAction.classList.add("actions");

		//inserting Action to content div
		taskElContent.appendChild(taskElAction);

		//creating edit button
		const taskElEditBtn = document.createElement("button");
		taskElEditBtn.classList.add("edit");
		taskElEditBtn.innerText = "Edit";

		//inserting editbtn to action div
		taskElAction.appendChild(taskElEditBtn);

		//creating delete button
		const taskElDeleteBtn = document.createElement("button");
		taskElDeleteBtn.classList.add("delete");
		taskElDeleteBtn.innerText = "Delete";

		//inserting deletebtn to action div
		taskElAction.appendChild(taskElDeleteBtn);

		//creating complete button
		const taskElCompleteBtn = document.createElement("button");
		taskElCompleteBtn.classList.add("complete");
		taskElCompleteBtn.innerText = "Mark Complete";

		//inserting completebtn to action div
		taskElAction.appendChild(taskElCompleteBtn);

		//iserting task div into tasks div
		taskList.appendChild(taskEl);

		//Clear the input field
		taskInput.value = "";

		//Edit Btn
		taskElEditBtn.addEventListener("click", function () {
			if (taskElEditBtn.innerText.toLowerCase() === "edit") {
				taskElEditBtn.innerText = "Save";
				taskElInput.removeAttribute("readonly");
				taskElInput.focus();
			}
			else {
				taskElEditBtn.innerText = "Edit";
				taskElInput.setAttribute("readonly", "readonly");
			}
		});

		//Complete Btn
		taskElCompleteBtn.addEventListener("click", function () {
			if (taskElCompleteBtn.innerText.toLowerCase() === "mark complete") {
				taskElCompleteBtn.innerText = "Completed";
				taskElInput.classList.add("mark-completed");
				taskElCompleteBtn.style.backgroundColor = "black";
			}
			else {
				taskElCompleteBtn.innerText = "Mark Complete";
				taskElInput.classList.remove("mark-completed");
				taskElCompleteBtn.style.backgroundColor = "#5757b8";
			}
		});

		taskElDeleteBtn.addEventListener("click", function (e) {
			taskList.removeChild(taskEl);
		});

	}
	else {
		alert("Enter some task !");
	}

});

