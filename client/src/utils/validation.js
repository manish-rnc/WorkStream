export const checkValidData = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,}$/.test(password);

    if (!isEmailValid) return "Please Enter a valid Email Id";
    if (!isPasswordValid) return "Please Enter a strong Password";

    return null;
};
