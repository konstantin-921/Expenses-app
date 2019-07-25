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