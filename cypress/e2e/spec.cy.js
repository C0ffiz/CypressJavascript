describe('Verify Browser Stack Home Page', () => {
  
  

    it('Verify Browserstack logo is visible', () => {

        cy.visit('https://phptravels.org/register.php');

        cy.get('.logo-img').first().should('be.exist');
        

    })
    
    it('Verify login without all fields', () => {

        cy.get('[value="Register"]').first().click()
        
        
        
        cy.get('body').should('not.have.text', "Logged in as:")
        
        
      })
      
      it('Verify login without all fields', () => {
        
        cy.get('[id="inputFirstName"]').first().type('test')
        
        cy.get('[id="inputLastName"]').first().type('test')
        
        cy.get('[id="inputEmail"]').first().type('test1@test.test')
        
        cy.get('[id="inputPhone"]').first().type('12314534435')
        
        cy.get('[id="inputCompanyName"]').first().type('fgjhghfjtyjk')

        cy.get('[id="inputAddress1"]').first().type('ghjghdfkhjgk')
        
        cy.get('[id="inputAddress2"]').first().type('dfdfhftghytj')
        
        cy.get('[id="inputCity"]').first().type('ftjhdfyfjytj')
        
        cy.get('[id="stateinput"]').first().type('fgdh')
        
        cy.get('[id="inputPostcode"]').first().type('1234123')
        
        cy.get('[id="customfield2"]').first().type('587687486868')
        
        cy.get('[id="inputNewPassword1"]').first().type('GHFHdfhgffg456')
        
        cy.get('[id="inputNewPassword2"]').first().type('GHFHdfhgffg456')
        
        // cy.get('.g-recaptcha *> iframe')
        //   .then($iframe => {
        //     const $body = $iframe.contents().find('body');
        //     cy.wrap($body)
        //     .find('.recaptcha-checkbox-border')
        //     .should('be.visible')
        //     .click();
        //   });
        



        

        cy.get('[value="Register"]').first().click()


        // cy.get("Please complete the captcha and try again.").first().should('be.exist');
        
        cy.get('[class="alert alert-danger"]').should('have.text', "\nThe following errors occurred:\n\nPlease complete the captcha and try again.\n\n")
        
      })
      
      


})







