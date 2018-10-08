This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build a sentence game - requirements

In this coding challenge you have to create an interface that allows the user to
build a sentence.

The software will ask four questions
 1. Who?
 2. What?
 3. When?
 4. Where?

and subseguently will display a sentence using the answers

`__WHO__ __WHAT__ __WHERE__ __WHEN__`

Example:
 1. Who? Mark
 2. What? is coding
 3. When? today
 4. Where? on his computer

will display

`Mark is coding on his computer today`

Requirements:
 - React
 - Redux

Optionally, feel free to add a personal touch and show your skills.
Good luck!

## Solution

Simple SPA bootstrapped with CRA. Added redux, react-redux into the mix.

The input is presented via Questionnaire component - form with 4 inputs (their value is part of Questionnaire state). Submitting form triggers redux action that results in computing the answer by reducer. There is also Answer component that simply shows computed answer (if there is any in redux store).

I also added few tests to check part of the logic.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

