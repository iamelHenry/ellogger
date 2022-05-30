# el Logger

## Installation
* Using npm
```
npm install elloger
```

## Usage
* Javascript (NodeJs)

```
const { ElLogger } = require('@elhenry/ellogger')

const logger = new ElLogger('<my-app-name>')
logger.info('message')
```

* Express

```
app.use(logger.express())
```
