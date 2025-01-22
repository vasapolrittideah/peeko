import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

import { UNKNOWN_ERROR } from '@/errors/errors.contants';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const { error, message } = (() => {
      if (exception instanceof HttpException) {
        const response = exception.getResponse();
        return {
          error: response?.['error'] || '',
          message: exception.message || '',
        };
      }
      return {
        error: UNKNOWN_ERROR,
        message: 'An unknown error has occurred while processing this request',
      };
    })();

    const body = {
      status,
      message,
      error,
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    return response.status(status).json(body);
  }
}
