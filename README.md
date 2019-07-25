## Expenses control App

Screens:

1. List of expenses/incomes by category with possibility to add new items
2. There must be some charts for visualizing the data(could be by category or if incomes cover expenses)

Should be done in React. For state management you can choose Hooks or Redux.

## Available Scripts

Development server, you can run:

`npm install`
`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build docker image

`docker build . -t react-docker`

## Run docker container

`docker run -p 8000:80 react-docker` and Navigate to http://localhost:8000/