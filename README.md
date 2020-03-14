# ACME corp Tasks backend

## Configuration

Configuration for the application can be found in `config/Config.js`

|Value|environment variable|default|Description|
|-|-|-|-|
|DB|MONGO_URL|`mongodb://localhost:27017/todos`|The url the application will connect to mongodb on|
|APP_PORT|APP_PORT|80|The port the application will be listening on when running|

## Running tests

Tests are run using Jester, and integration tests use the supertest library to start the frontend.

### unit tests

`npm run unit-tests`

### integration tests

`npm run integration-tests`

Integration tests expects a mongodb instance running and available