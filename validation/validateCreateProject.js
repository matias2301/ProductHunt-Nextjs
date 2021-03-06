export default function validateCreateProject(values) {

    let errors = {};

    // validate userName
    if(!values.name) {
        errors.name = "Field Name is requiered";
    }

    // validate owner
    if(!values.owner) {
        errors.owner = "Field Owner name is required"
    }
    
    // validate url
    if(!values.url) {
        errors.url = "Field Project URL is required";
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(values.url) ) {
        errors.url = "It isn't a valid URL format"
    }

    // validate description.
    if(!values.description) {
        errors.description = "Field Description is required"
    }

    return errors;
}