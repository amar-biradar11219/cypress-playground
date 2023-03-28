
let text1 ="";
let email_result = "";
 export var abcd ='abcd@gmail.com'; 


export class registration_method{

   
    registration_page(){
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click()

    }
    User_first_Name(){
        cy.get('#input-firstname').type(userID_Alpha())
        function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

    }
    user_last_name(){
        cy.get('#input-lastname').type(userID_Alpha())
        function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

    }
    user_email(){
            
       
        function makeid(length) 
        {
            
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                
               email_result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            // localStorage.setItem('email',email_result);
            // localStorage.setItem('user_email',email_result + "@gmail.com");
            // abcd = email_result;
            return email_result;
         }
        // 
        // cy.log(localStorage.getItem('email'));
  
        cy.get('#input-email').type(makeid(6) + "@gmail.com")
        cy.log(email_result);
        console.log(email_result)
        module.exports = email_result  
    }
    
        
        

    user_number(){
        cy.get('#input-telephone').type(userID_Alpha())
        function userID_Alpha() {
            var text = "";
            var possible = "123456789";
            
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
              
            return text;
          }
    }

    
    user_password(){
       
        cy.get('#input-password').type(userID_Alpha())
        
        
        function userID_Alpha()
        {
           
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 4; i < 20; i++)
            text1 += possible.charAt(Math.floor(Math.random() * possible.length));

            return text1;   
        }
        
    }



    user_conformed_password(){
        
        cy.get('#input-confirm').type(text1)

    }

    checkbox(){

        cy.get('#input-agree').check({force: true})

    }
    submit_button(){
        cy.get('.float-right > .btn').click()
    }

    continue_button(){
        cy.get('.buttons > .btn').click()
    }

}
