# earth-day

# Run the app
1. Clone the repo
2. Move to the frontend folder
3. Install all npm packages `npm i`
4. In the [firebase console]( https://console.firebase.google.com/), create a project, create a real time database.
5. Copy the config to `frontend/src/database/firebaseConfig.js` in the following format
```js
export const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxx",
  authDomain: "xxxxxxxxxxxxxxxxx",
  databaseURL: "xxxxxxxxxxxxx",
  projectId: "xxxxxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxx"
};
```
6. Go to the root of the frontend folder
7. Start the app with `npm start`
