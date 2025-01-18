Feature:Test Login Functionality

Scenario: Check login with valid credentials
Given User is on login page
When user enters username and password
And clicks on login button
Then user is navigated to the home page

Scenario: Check login with Invalid credentials
Given User is on login page
When user enters username and password
And clicks on login button
Then user is not navigated to the home page