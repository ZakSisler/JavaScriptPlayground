function validateForm(event) {
    //Gather alll of our HTML controls into a collection instead of creating a separate variable for each
    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    let validationMessages = document.getElementsByClassName('invalid');
    console.log(validationMessages);

    //Regular Expression object for Email    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);


    //Regular Expression object for Name    let rxpName = new RegExp(/^[A-Z]+$/i);


    //Check the lengths of ALL controls - if any have not been filled out, then stop the form
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 ||
        controls['subject'].value.length == 0 || controls['message'].value.length == 0 ||
        !rxpEmail.test(controls['email'].value) || !rxpName.test(controls['name'].value)) {

        //Stop the form from submitting
        event.preventDefault();

        //Check individual controls and display an error message if needed.


        ////////////Name Validation///////////////////////////
        //LENGTH
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "* Name is required";
        }
        else {
            validationMessages['rfvName'].textContent = "";
        }


        //REGEX
        if (!rxpName.test(controls['name'].value) && controls['name'].value.length> 0) {
            validationMessages['rfvName'].textContent = "* Name must only include alphabetical characters";
        } 
        if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "";
        }

        ////////////Email Validation//////////////////////////
        //LENGTH
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "* Email is required";
        }
        else {
            validationMessages['rfvEmail'].textContent = ""
        }


        //REGEX
        if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "* Please enter a valid email address.";
        }
        if (rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }



        ////////////Subject Validation////////////////////////
        //LENGTH
        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "* Subject is required";
        }
        else {
            validationMessages['rfvSubject'].textContent = "";
        }


        ////////////Message Validation//////////////////////////
        //LENGTH
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "* Message is required";
        }
        else {
            validationMessages['rfvMessage'].textContent = ""
        }


    }
}