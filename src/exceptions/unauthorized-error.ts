import CustomError from './custom-error';

export default class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(message, 401);
  }
}
