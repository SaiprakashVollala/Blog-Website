function submitComment(nameId, messageId, listId) {
    const name = document.getElementById(nameId).value;
    const message = document.getElementById(messageId).value;

    if (name && message) {
        const commentList = document.querySelector(`#${listId}`);
        const commentItem = document.createElement("li");
        commentItem.innerHTML = `<strong>${name}</strong>: ${message}`;
        commentList.appendChild(commentItem);

        // Clear the inputs
        document.getElementById(nameId).value = "";
        document.getElementById(messageId).value = "";
    } else {
        alert("Please enter both your name and a comment!");
    }
}
