import{expect, test } from '@playwright/test';


//here we have created or POST new user id using Playwright 
/*test("api post response", async ({request})=>{
const response = await request.post('https://reqres.in/api/users', {
    data: { 
        id: 555,
    },
})
//we are getting the text response and converting (parsing) it to​​ JSON and storing it in a variable​​ 

const respBody = JSON.parse(await response.text())

//we are printing the json response.
//console.log(respBody)

//The Json object name should be match,
//id in this case 
//If the json object name would have been ‘user’ (instead of ‘data’),
// than we would have written: respBody.user.id and so on…

//We use ‘toBe()’​​ function (as shown above) to validate the expected value.
expect(respBody.id).toBe(555)
expect(respBody.createdAt).toBeTruthy()

})*/

/*test("api post response", async ({request})=>{
    const response = await request.post('https://reqres.in/api/login', {
        data: { 
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        },
    })
    
    const respBody = JSON.parse(await response.text())
    console.log(respBody)
    expect(respBody.token).toBeTruthy()

})*/

test("api post response", async ({request})=>{
    const response = await request.post('https://reqres.in/api/register', {
        data: { 
            email: "sydney@fife",
            
        },
    })
     
    const respBody = JSON.parse(await response.text())
    console.log(respBody)
    expect(respBody.error).toBe("Missing password");
    
})
    