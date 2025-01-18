import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
Given('User is on login page', async ()=> {
  await browser.url('https://the-internet.herokuapp.com/login')
  });

  When('user enters username and password', async()=> {
    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
  });

  When('clicks on login button', async () => {
    await $('button[type="submit"]').click()
  });

  Then('user is navigated to the home page', async ()=> {
    await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'));
  });

  Given('User is on login page', async ()=> {
    await browser.url('https://the-internet.herokuapp.com/login')
    });
  
    When('user enters username and password', async()=> {
      await $('#username').setValue('tomsmith')
      await $('#password').setValue('SuperSecretPassword!')
    });
  
    When('clicks on login button', async () => {
      await $('button[type="submit"]').click()
    });
  
    Then('user is not navigated to the home page', async ()=> {
      await expect($('#flash')).toHaveText(expect.stringContaining(' Your username is invalid!!'));
    });


