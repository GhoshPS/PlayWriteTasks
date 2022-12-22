//Updating a resource
//PUT will be used in order to update an existing resource
import{expect, test } from '@playwright/test';
test("Update a user", async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
      //We will pass the name and job in the request body via the data property, run the expected checks, and log the response
    data: {
        name : "morpheus",
         job: "zion resident"
      },
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
  });