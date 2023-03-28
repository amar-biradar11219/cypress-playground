import { navigation } from "../../methods/navigation/navigation";
import { registration_method } from "../../methods/registration/registration_method";
const nav = new navigation()
const customer_registration = new registration_method()


it("registraion form",()=>{
    nav.navigate()
    customer_registration.registration_page()
    customer_registration.User_first_Name()
    customer_registration.user_last_name()
    customer_registration.user_email()
//    console.log(user_email)
    customer_registration.user_number()
    customer_registration.user_password()
    customer_registration.user_conformed_password()
    customer_registration.checkbox()
    customer_registration.submit_button()
    customer_registration.continue_button()
})