// Create a reminder app
// There should be:
//     An input for entering the title
//     An input for entering priority
//     An input for color
//     A textarea for adding a description
//     A button for adding the reminder
//     A button for showing all reminders
// When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// The object should then be added to an array of reminders
// When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// The title should be the color of the "color" property

let titleElement = document.getElementById("title");
let priorityElement = document.getElementById("priority");
let colorElement = document.getElementById("color");
let descriptionHeader = document.getElementById("description");
let addReminderBtn = document.getElementById("addReminderButton");
let showReminderBtn = document.getElementById("showingAllRemindersButton");


let tableId = "reminderTable";
let table = document.createElement("table");
table.style.border = "1px solid white";
table.id = tableId;
document.body.appendChild(table);

let reminders = [];

function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

addReminderBtn.addEventListener("click", () => {
  if (
    !titleElement.value ||
    !priorityElement.value ||
    !colorElement.value ||
    !descriptionHeader.value
  ) {
    alert("Please fill in ALL the fields before submitting!");
  } else {
    reminders.push(
      new Reminder(
        titleElement.value,
        priorityElement.value,
        colorElement.value,
        descriptionHeader.value
      )
    );

    titleElement.value = "";
    priorityElement.value = "";
    colorElement.value = "";
    descriptionHeader.value = "";
  }
});

showReminderBtn.addEventListener("click", () => {
  if (!reminders.length) {
    alert("The list of reminders is empty!");
    return;
  }

  table.innerHTML = "";

  let headerRow = document.createElement("tr");

  let titleHeader = document.createElement("th");
  titleHeader.innerHTML = "Title";

  let priorityHeader = document.createElement("th");
  priorityHeader.innerHTML = "Priority";

  let descriptionHeader = document.createElement("th");
  descriptionHeader.innerHTML = "Description";
 
  headerRow.appendChild(titleHeader);
  headerRow.appendChild(priorityHeader);
  headerRow.appendChild(descriptionHeader);
  table.appendChild(headerRow);

  for (const reminder of reminders) {
    let row = document.createElement("tr");

    let title = document.createElement("td");
    title.style.color = reminder.color;
    title.innerHTML = reminder.title;
    

    let priority = document.createElement("td");
    priority.innerHTML = reminder.priority;

    let description = document.createElement("td");
    description.innerHTML = reminder.description;
    
    row.appendChild(title);
    row.appendChild(priority);
    row.appendChild(description);
    table.appendChild(row);
  }
});