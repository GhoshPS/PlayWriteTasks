import{expect, test } from '@playwright/test';

test("API get response", async({request}) => {

  //Notice below that our test gets passed. This means that we received status code 200 in our response
  //
    //const response = await request.get('https://reqres.in/api/users/2')
// expect (response.status()).toBe(200)
//Let us change the response code to 404
//It will through an error
// The reason being, we are expecting status code 404 but received 200

// below the change in syntax to handle api requests
//Here We have used request instead of page and get instead of goto
//Also, note below that our url is composed of ‘base url’ plus ‘uri’
//base url: https://reqres.in, uri: api/users/23 
    const response = await request.get('https://reqres.in/api/users/23')
    expect (response.status()).toBe(404)
    

  
    
})