# aatt-exercise

 This exercise creates a REST API that responds to GET with a message from Liatrio and a timestamp.

 #Deployment
 TO DO

### Prerequisites:

- [Node.js](https://nodejs.org/en/download/)
TO DO

### Deployment:

- Clone source
- From the source folder execute:

```
xxxxxxxxxx
```

- Note the endpoint in the output

## Tests

### Prerequisites:

Install the modules needed for testing:
```
npm install --global mocha
npm install --global chai
npm install --save-dev chai
npm install --global request-promise
```

### Execute Unit Test

From the source root execute:

```
mocha test\message.unit.test.js
```

### Execute Integration Test

Set an environment variable for URI equal to the endpoint URL of the API

Linux/Bash/Mac

```
export URI="endpointurl"
```

Windows CMD

```
set URI=endpointpath
```

Windows Powershell

```
$env:URI = "endpointpath"
```

From the source root execute:

```
mocha test\message.integration.test.js
```

## Cleanup
TODO
To removed the deployment execute:

```
xxxxxxxxxxxxxxx
```