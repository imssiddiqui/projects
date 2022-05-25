var inputField = document.getElementById('todo-input-field');

var todoList = document.getElementById('todo-list');

console.log(inputField.value);

function createTODOCard(msg) {


    var mainCard = document.createElement('div');
    mainCard.className = 'todo-item';
    mainCard.id = new Date().getTime();

    var messageContainer = document.createElement('div');
    messageContainer.className = 'horizontal-align todo-message-container';

    var message = document.createElement('h3');
    message.innerHTML = msg;
    message.className = 'todo-message'
    messageContainer.appendChild(message);

    var todoEditContainer = document.createElement('div');
    todoEditContainer.className = 'horizontal-align todo-edit-container';
    mainCard.appendChild(todoEditContainer);

    var editInputBox = document.createElement('input');
    editInputBox.className = 'edit-todo';
    editInputBox.type = 'text';
    editInputBox.placeholder = 'TODO Here';
    todoEditContainer.appendChild(editInputBox);

    var updateBtn = document.createElement('button');
    updateBtn.className = 'update_btn';
    updateBtn.innerHTML = 'Update';
    todoEditContainer.appendChild(updateBtn);


    var buttonWrapper = document.createElement('div');
    var editIcon = document.createElement('i');
    editIcon.className = 'far fa-edit';
    editIcon.onclick = function() {
        todoEditContainer.style.display = 'flex';
        messageContainer.style.display = 'none';
        editInputBox.value = msg;
        message.innerHTML = editInputBox.value;

    }
    updateBtn.onclick = function() {
        message.innerHTML = editInputBox.value;

        todoEditContainer.style.display = 'none';
        messageContainer.style.display = 'flex';

    }
    editInputBox.onkeyup = function(e) {
        if (e.key === 'Enter') {
            message.innerHTML = editInputBox.value;

            todoEditContainer.style.display = 'none';
            messageContainer.style.display = 'flex';

        }
    }

    buttonWrapper.appendChild(editIcon);

    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    deleteIcon.onclick = function() {
        document.getElementById(mainCard.id).remove();
    }
    buttonWrapper.appendChild(deleteIcon);
    messageContainer.appendChild(buttonWrapper);
    mainCard.appendChild(messageContainer);


    return mainCard;
}

function handleTODOCreation() {
    // TASKs:
    // 1.) Add card to the todo list on screen

    if ((inputField.value !== null) && (inputField.value !== undefined) && (inputField.value !== 0) && (inputField.value !== '')) {
        todoList.appendChild(createTODOCard(inputField.value));

    } else {
        alert('Please Insert Valid Value');
    }
    inputField.value = '';

}

inputField.onkeyup = function(e) {
    if (e.key === 'Enter') {
        handleTODOCreation();
    }
}

var btnAddTODO = document.getElementById('btn-add-todo');
btnAddTODO.onclick = function(e) {
    handleTODOCreation();
}