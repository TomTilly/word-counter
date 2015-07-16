var textInput = document.getElementsByTagName('input')[0];
var submitButton = document.getElementsByTagName('button')[0];
var errorMsg = document.getElementById('errorMsg');

function validate(e){
    if (!e){
        e = window.event;                                           // IE Fallback
    }
    errorMsg.textContent = '';
    var value = textInput.value;
    value = value.replace(/[^A-Za-z_\s]/,'!').replace(/\d/,'!');    // If a non-alphanumeric character is used, or a digit character is used
    if (value === ''){
        e.preventDefault();
        errorMsg.textContent = "Error: Input can't be empty"
    }
    for(var i = 0; i < value.length; i++){
        if(value.charAt(i) === '!'){
            e.preventDefault();
            errorMsg.textContent = "Error: Please only enter spaces and alphanumeric characters";
        }
    }
}
if (submitButton.addEventListener){                                 // Add Event Listener
    submitButton.addEventListener('click', validate, false);
} else {                                                            // IE Legacy Event Handler
    submitButton.attachEvent('onclick',validate,false);
}