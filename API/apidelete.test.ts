import{expect, test } from '@playwright/test';
// we’ll invoke a DELETE endpoint to delete a user.
test("Delete a user", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.ok()).toBeTruthy();
    //A status check is done for the status code returned by the delete method, which is expected to be 204. 
    //The 204 “No Content” status code is what is returned by Go REST when the user has been successfully deleted
    expect(response.status()).toBe(204);
  });