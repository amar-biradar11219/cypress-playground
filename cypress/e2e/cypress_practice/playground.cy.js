// const urls = ['https://ecommerce-playground.lambdatest.io/index.php?route=common/home']

// describe('Logo', () => {
//     urls.forEach((url) => {
//       it(`Should display logo on ${url}`, () => {
//         cy.visit(url)
//         cy.get('#logo img').should('have.attr', 'src').and('include', 'logo')
//       })
//     })
//   })


//   before('visit',()=>{

//     cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
//   })



let text1 = '';

describe('navigation',()=>{
    it('navigation to the page',()=>{
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        cy.get('[class="figure-img img-fluid m-0 default"]').should('have.class','figure-img img-fluid m-0 default')

        // cy.contains('data-toggle="dropdown"').click();

        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link').click();

        cy.get(':nth-child(1) > .card > .card-body > h2')
            .should('have.text','New Customer')

        // cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click()

        cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click()

        // firsr name
        cy.get('#input-firstname').type(userID_Alpha_first_name())
        function userID_Alpha_first_name() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

        // last name
        cy.get('#input-lastname').type(userID_Alpha_last_name())
        function userID_Alpha_last_name() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
        }

        // email

        cy.get('#input-email').type(makeid(6) + "@gmail.com")

        function makeid(length) 
        {
            var email_result = '';
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

        // phone number
         cy.get('#input-telephone').type(userID_Alpha_phone_number())
         function userID_Alpha_phone_number() {
             var text = "";
             var possible = "123456789";
             
         
             for (var i = 0; i < 10; i++)
               text += possible.charAt(Math.floor(Math.random() * possible.length));
               
             return text;
           }

           // password
           cy.get('#input-password').type(userID_Alpha_password())
           function userID_Alpha_password()
           {
              
               var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   
               for (var i = 4; i < 20; i++)
               text1 += possible.charAt(Math.floor(Math.random() * possible.length));
   
               return text1;   
           }

             cy.get('#input-confirm').type(text1)

             cy.get('#input-agree').check({force: true})

             cy.get('.float-right > .btn').click()

             cy.get('.buttons > .btn').click()

    // it('registration',()=>{


        
    })

    
    // })
})