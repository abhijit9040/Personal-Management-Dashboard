
document.getElementById("add-task-btn").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
});


document.getElementById("save-note-btn").addEventListener("click", () => {
  const noteInput = document.getElementById("note-input");
  const noteList = document.getElementById("note-list");

  if (noteInput.value.trim() !== "") {
    const newNote = document.createElement("li");
    newNote.textContent = noteInput.value;
    noteList.appendChild(newNote);
    noteInput.value = "";
  } else {
    alert("Please write a note.");
  }
});


document.getElementById("add-goal-btn").addEventListener("click", () => {
  const goalInput = document.getElementById("goal-input");
  const goalList = document.getElementById("goal-list");

  if (goalInput.value.trim() !== "") {
    const newGoal = document.createElement("li");
    newGoal.textContent = goalInput.value;
    goalList.appendChild(newGoal);
    goalInput.value = "";
  } else {
    alert("Please set a goal.");
  }
});


document.getElementById("get-weather-btn").addEventListener("click", () => {
  const locationInput = document.getElementById("location-input");
  const weatherInfo = document.getElementById("weather-info");

  if (locationInput.value.trim() !== "") {
    weatherInfo.textContent = `Weather for ${locationInput.value}: Sunny, 25°C`;
    locationInput.value = "";
  } else {
    alert("Please enter a location.");
  }
});
