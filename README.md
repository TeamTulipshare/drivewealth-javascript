# drivewealth-client [![Build Status](https://travis-ci.org/DriveWealth/drivewealth-javascript.svg?branch=master)](https://travis-ci.org/DriveWealth/drivewealth-javascript)

JavaScript bindings for the DriveWealth API

[Usage](#usage)  
[API Reference](https://github.com/DriveWealth/drivewealth-javascript/blob/master/reference.md)  
[Examples](https://github.com/DriveWealth/drivewealth-javascript/tree/master/examples)

## Usage

#### Step 1: Install

Install using npm (or [download from Github](https://github.com/DriveWealth/drivewealth-javascript/tree/master/lib)):

```bash
$ npm i --save drivewealth-client
```

#### Step 2: Include

This library works in a variety of environments:

```javascript
// Node.js, Browserify
const drivewealth = require("drivewealth-client");

// Babel
import drivewealth from "drivewealth-client";

// RequireJS
requirejs.config({
	paths: { drivewealth: "path/to/drivewealth-client" }
});
define(["drivewealth"], function(drivewealth) { ... })

// Browser
<script src="path/to/drivewealth-client.js"></script>
console.log(drivewealth);
```

#### Step 3: Setup

You'll need to call the setup function to initialize the library. In this call, pass a function that the library will use to make HTTP requests. The library supports a few [out of the box](https://github.com/DriveWealth/drivewealth-javascript/wiki/HTTP-Implementations).

```javascript
drivewealth.setup({
	env: drivewealth.ENVIRONMENTS.UAT,
	httpImpl: require("node_modules/drivewealth-client/lib/httpImpls/request.js")
});
```

#### Step 4: Use

```javascript
drivewealth.User.login("john.smith", "passw0rd").then(user => {
	console.info(`Welcome ${user.firstName}!`)
});
```
