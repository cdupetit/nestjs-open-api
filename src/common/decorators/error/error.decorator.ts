import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { ErrorDTO } from 'src/common/dto/error.dto';

export function ApiErrorDecorator(
  statusCode: HttpStatus,
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return applyDecorators(
    ApiExtraModels(ErrorDTO),
    ApiResponse({
      ...options,
      status: statusCode,
      description: description,
      example: {
        message: message,
        status_code: statusCode,
        date: new Date().toISOString(),
      },
      schema: {
        $ref: getSchemaPath(ErrorDTO),
      },
    }),
  );
}
