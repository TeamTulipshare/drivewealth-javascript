import ExtendableError from "extendable-error-class";

export class DriveWealthError extends ExtendableError {
	constructor(message, body, statusCode, headers) {
		super(message);
		this.body = body;
		this.statusCode = statusCode;
		this.headers = headers;
	}
}

export class DriveWealthSessionError extends ExtendableError {
	constructor(message, body, statusCode, headers) {
		super(message);
		this.body = body;
		this.statusCode = statusCode;
		this.headers = headers;
	}
}

export default {
	DriveWealthError,
	DriveWealthSessionError,
};
