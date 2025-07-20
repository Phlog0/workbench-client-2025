export class HttpErrorResponse {
  constructor(public message: string | string[], public error: string, public statusCode: number) {
    this.message = message;
    this.error = error;
    this.statusCode = statusCode;
  }
}
