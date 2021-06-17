describe("HTTP request", function() {
    it('GET',function(){

        cy.request({
            method: 'GET',
            url : 'http://httpbin.org/get',
    

        }).then(function(response){
            expect(response.body).have.property('url')

        })
      
    })

it('POST',function(){

    cy.request({
        method: 'POST',
        url : 'http://httpbin.org/post',
        body : {
            'name' : 'Mira',
            'age' : 30
        },
        headers : {
            'content_type' : 'application/json'
        }
    }).then(function(response){
        expect(response.body).have.property('json')
        expect(response.body.json).to.deep.equal(
            {
                'name' : 'Mira',
                'age' : 30
            })
    
        })
    })
})
