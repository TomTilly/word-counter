var textInput = document.getElementsByTagName('input')[0];
var submitButton = document.getElementsByTagName('button')[0];
var errorMsg = document.getElementById('errorMsg');

function validate(e){
    if (!e){
        e = window.event;   // IE Fallback
    }
    errorMsg.textContent = '';
    var value = textInput.value;
    var re = new RegExp(/^\s*$/);
    var re2 = new RegExp(/<.*>/);
    if (re.test(value)){        // Is input empty?
        e.preventDefault();
        errorMsg.textContent = "Error: Input can't be empty"
    } else if (re2.test(value)){    // Does input contain HTML tags?
        e.preventDefault();
        errorMsg.textContent = "Error: You cannot include HTML tags"
    }
}
if (submitButton.addEventListener){                                 // Add Event Listener
    submitButton.addEventListener('click', validate, false);
} else {                                                            // IE Legacy Event Handler
    submitButton.attachEvent('onclick',validate,false);
}