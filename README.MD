# Kitu Challenge
# Random User API

## Description:

This API exposes three end points to GET and POST random user data from a 3rd party API(https://randomuser.me/api).
In order for it to work open up the folder in the console and type in 'npm start'.

### Notes:
#### Get '/users'
This endpoints allows the user to get 10 random users data to render in the browser screen.  
#### Get '/users/firstname/:firstname'
This endpoint allows the user to search for user data by the first name of the user.  If the user is found it will render the user data.  If the user is not found it will render a error message.
#### Post '/users'
This endpoint allows the user to post their own user data to storage and that new user data will render when a Get request is made to the endpoint '/users'.

##### DEPENDANCIES

 1. axios : 0.18.0
 2. express : 4.16.4

 When given the chance I can explain all of my work and why I chose to create this API in the way that I did.
 -Bobby Patterson
 blipco619@gmail.com
 619-727-0822