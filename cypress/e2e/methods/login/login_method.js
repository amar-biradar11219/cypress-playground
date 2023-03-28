// import { registration_method } from "import { registration_method } from "../../methods/registration/registration_method";
import { registration_method } from '../registration/registration_method'
// const{ abcd }= require('../registration/registration_method')
const user_n = new registration_method()
import { abcd } from '../registration/registration_method'

// var u_e = user_n.user_email
// console.log(abcd)        
export class login_postive {
    
    // super();
    
    // user_email()
    
    
    user_name(){
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        // console.log(localStorage.getItem('email' + "ggg"));
        cy.get('#input-email').type("abcd")
        
        // cy.log()
        
    }
}