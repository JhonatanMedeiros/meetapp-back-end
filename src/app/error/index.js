import * as http from 'http';

export class HttpError extends Error {
  constructor(status, message) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.status = status || 500;
    this.name = this.name;
    this.message = message || http.STATUS_CODES[this.status] || 'Error';
  }
}

export default HttpError;
