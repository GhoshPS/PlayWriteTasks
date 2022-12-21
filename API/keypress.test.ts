import{expect, test } from '@playwright/test';

test("keypress", async({page })=> {

   await page.goto('https://the-internet.herokuapp.com/')
  
   await page.locator("text=Key Presses").click()
   //we have​​ ‘press’​​ method that we can use to simulate pressing a keyword
   await page.press('#target','F1')
   //These are some of the keys that we can in with the method apart from F1,
   //It can be F2-F12,0-9,keyA-keyZ,Backquote,Backslash etc
   await page.pause()
})
