
export const NewValidation = (formdata) => {
    const errors = {};
    // validation username
    if(!formdata.username.trim()){
        errors.username = "Username must be required";
    }
    else if(formdata.username.length < 3){
        errors.username = "Username at leaset 3 charactor";
    }

    //validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!formdata.email.trim()){
        errors.email = "Email must be required.";
    }
    else if(!emailRegex.test(formdata.email)) {
        errors.email = "Please enter a valid email.";
    }

    //validate email
    const phoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/
    if(!formdata.phoneNumber?.trim()){
        errors.phoneNumber = "Phone number must be required.";
    }
    else if(!phoneNumberRegex.test(formdata.phoneNumber)) {
        errors.phoneNumber = "Enter a valida phone number.";
    }

    //password validation
    if(!formdata.password){
        errors.password = "password must be required.";
    }else if(formdata.password.length < 6){
        errors.password = "Enter a password at least 6 charactors."
    }

    // confirm password validation
    if(!formdata.confirmPassword){
        errors.confirmPassword = "Confirm password is must be required.";
    }
    else if(formdata.password != formdata.confirmPassword){
        errors.confirmPassword = "Password does not match to actual password.";
    }
    return errors;
}