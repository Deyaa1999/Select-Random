/// <reference types= "cypress" />
describe('test', () => {
    it('test', () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        let firstname= ["ahmad","ali","fares"];
        let d= Math.floor(Math.random()*firstname.length)
        let lastname = ["groom","dibsi","bulbul"];
        let y= Math.floor(Math.random()*lastname.length)
        cy.get('#firstname').type(firstname[d])
        cy.get('#lastname').type(lastname[y])
        let number = Math.floor(Math.random()*(1000).toString())
        let a= Math.floor(Math.random()*number.length)
        cy.get('#email_address').type(firstname[d]+lastname[y]+ number+" "+"@gmail.com")
        function generateRandomPassword(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let password = '';
          
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              password += characters.charAt(randomIndex);
            }
          
            return password;
          }
          
          
              const randomPassword = generateRandomPassword(10);
              cy.log( randomPassword);
              cy.get('#password').type(randomPassword)
              cy.get('#password-confirmation').type(randomPassword)
              cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
              cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
              cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click()
              cy.get('.panel > .header > .authorization-link > a').click()
              cy.get('#email').type(firstname[d]+lastname[y]+ number+" "+"@gmail.com")
              cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(randomPassword)
              cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
              
        /*
        
        let lastname=["omari","dibsi","grom"];
        let c = Math.floor(Math.random()*firstname.length)
        
        console.log(firstname[c]+lastname[d])
        */
    });
});