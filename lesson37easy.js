
const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

// Start dragging
draggable.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
});

// Allow dropping
dropzone.addEventListener("dragover", function(event) {
    event.preventDefault();
});

// Drop the element
dropzone.addEventListener("drop", function(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const element = document.getElementById(id);

    dropzone.appendChild(element);
    dropzone.style.backgroundColor = "lightgreen";
});
