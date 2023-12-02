<<<<<<< HEAD
# Redux_with_Detail
=======
## For Starting this,We initiate the project without using npx create-react-app app_name
## I used this method :
npm init -y
npm install react react-dom react-scripts create-react-scripts
create public->index.html
create src->index.js
create src-> App.js
After that write code in it.

## index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
It was tough for me to learn but I know it.

For Run the App,
Slighlty changes,
scripts:{
    "start":"react-scripts start"
}
Now,Run command,
npm start

Now,We will read about redux,
Redux:: It is state management tool to handle state proper.
Important library:
Redux(createStore),React-Redux(useSelector,useDispatch,combineReducer),React-thunk(For Asynchronous operation),React-logger(For log).

Create a folder,

#***Important Method to update a object
1.
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3
  },
  b: 2
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42
  }
}

2.
>>>>>>> master
