Create a folder in your local system with the name task-manager and download the TaskList.js,TaskForm.js and TaskDetails.js with App.js and index.js files.Make Sure to copy them in  the order of the folders they were already there in the folders of the repository.All other files will be installed when you will download node.js and npm in your system..The heirarchy of the files as they were in the repository folder is very important.Either run the folder on the VS code with the steps given below:

Step 1: Install Node.js and npm
First, you need to have Node.js and npm installed. Node.js is a JavaScript runtime, and npm is the Node package manager, which you will use to install Create React App and other packages.

Install Homebrew (if you don't have it already). Homebrew is a package manager for macOS.

Open your terminal and run:

```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

Install Node.js and npm using Homebrew:

```brew install node```

Step 2: Create a New React Application
Install Create React App globally using npm:

```npm install -g create-react-app```
Create a new React project:
```create-react-app task-manager```

This will create a new directory called task-manager with a React application set up.

Step 3: Navigate to the Project Directory
Change into the new project directory:

```cd task-manager```
Step 4: Start the Development Server
Start the React development server:

```npm start```
This command will start the development server and open your new React application in the default web browser at http://localhost:3000.

Step 5: Set Up Your React Application
You can now start adding your components and developing your application. Below is a quick guide on setting up a basic Task Management Application as discussed earlier.

Project Setup
Install Bootstrap for styling:

```npm install bootstrap```
after installing bootstrap open the terminal,head to the directory with cd task-manager and run:
```npm start```

make sure you run all the commands in the directory path.cd task-manager is the command to head to your directory and thrn type ```npm start```

npm start

create-react-app task-manager# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


