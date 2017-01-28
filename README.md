# drivewealth-javascript

JavaScript bindings for the DriveWealth API

[Usage](#usage)  
[API Reference](https://github.com/DriveWealth/drivewealth-javascript/tree/master/examples)  
[Examples](#)

## Usage

#### Step 1: Install

Install using your favorite package manager (or [download from Github](https://github.com/DriveWealth/drivewealth-javascript/tree/master/lib)):

```bash
$ npm i --save drivewealth
$ bower install --save drivewealth
```

#### Step 2: Include

This library works in a variety of environments:

```javascript
// Node.js, Browserify
const drivewealth = require("drivewealth");

// Babel
import drivewealth from "drivewealth";

// RequireJS
requirejs.config({
    paths: { drivewealth: "path/to/drivewealth" }
});
define(["drivewealth"], function(drivewealth) { ... })

// Browser
<script src="path/to/drivewealth.js"></script>
console.log(drivewealth);
```

#### Step 3: Setup

You'll need to call the setup function to initialize the library. In this call, pass a function that the library will use to make HTTP requests. The library supports a few [out of the box](#).

```javascript
drivewealth.setup({
    env: drivewealth.ENVIRONMENTS.UAT,
    httpImpl: require("node_modules/drivewealth/lib/httpImpls/request.js")
});
```

#### Step 4: Use

```javascript
drivewealth.User.login("john.smith", "passw0rd", (err, user) => {
    console.info(`Welcome ${user.firstName}!`)
});
```
