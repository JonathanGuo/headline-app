# Headline App

Headline App uses [News API](https://newsapi.org/) to list latest news from 70 sources.

## Prerequisite

You need to get an API key from [News API](https://newsapi.org/) and save it into the `.env` file. You can find the example from `.env.example`.

## Starting the dev server

Make sure you have Node.js installed.

1. `git clone https://github.com/JonathanGuo/headline-app.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `npm start` - start the dev server
- `npm clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run coverage` - generate code coverage report in the `coverage` folder

## Code Coverage

The project is using the Jest Code Coverage tool. The reports are generated by running `npm run coverage`. All configurations are located in `package.json`, inside the `jest` object.

The coverage report consists of an HTML reporter, which can be viewed in the browser and some helper coverage files like the coverage json and xml file.

## Production code

Run `npm run production`. The production-ready code will be located under `dist` folder.

## Credits 

This project is based on [KleoPetroff/react-webpack-boilerplate](https://github.com/KleoPetroff/react-webpack-boilerplate.git)
which is an awesome boilerplate for most apps to get start with

## Licence

Headline App is available under MIT.
