export class ResponseBodyEntity {
  code: number;
  message: string;
  data?: object;
}

export class ResponseEntity {
  statusCode: number;
  body: string;
}
