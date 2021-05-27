export enum HttpStatusCode {
  noContent = 204,
  unathorzed = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
