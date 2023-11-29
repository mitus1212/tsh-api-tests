# Api tests
Implemented using Typescript with Supertest.
NodeJs 18.15.0 or newer is required to run tests.

# How to install dependencies:
`npm i`

# How to run all tests:
`npm run test`

# How to run specific test file:
`npm test tests/newsletter.test.ts -t "test name"`

Test results are visible in the console and report is generated in xml format to "/out/report/" directory
Tests can be run via Github Actions -> API Regression.
