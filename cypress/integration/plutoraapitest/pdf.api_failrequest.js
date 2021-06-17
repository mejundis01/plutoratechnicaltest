describe("HTTP request", function() {
    
    //GET Request 
    it('GET',function(){

        cy.request({
            method: 'GET',
            url : 'https://api.pdf.co/v1/pdf/documentparser/templates?x-api-key=mespaldon01@gmail.com_aec504a2e9468189',
            failOnStatusCode: false 

        }).then(function(response){
            expect(response.status).to.eq(402)
            //expect(response.body).to.eq('402: Payment Required')

        })
      
    })

    //Post Request
it('POST',function(){

    cy.request({
        method: 'POST',
        url : 'https://api.pdf.co/v1/job/check?x-api-key=mespaldon01@gmail.com_aec504a2e9468189',
        failOnStatusCode: false,
        body : {
            'jobid' : '12345'
        },
        headers : {
            'content_type' : 'application/json'
        }
    }).then(function(response){
        expect(response.status).to.eq(402)
    
        })
    })
})
