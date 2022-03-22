Kure Chat Sample App

## Starting the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Steps to verify:
1. Run app.
2. Have to enter a phonenumber present in db in login page 
3. Redirects to sendbird chat component.
4. Can see 30 users with status CONFIRMED_VIA_SMS in console
5. Only 2 users got added, can chat with them
6. To see list of 30 users in UI, uncomment line number 13 in Login/hook.js and comment out line no. 15.

Approach:
1. User enters phone number. This is verified from firestore
2. If phone number exists, redirect to chat app for logged in user.
2. Can see previous chats of logged in user and create new chats



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
