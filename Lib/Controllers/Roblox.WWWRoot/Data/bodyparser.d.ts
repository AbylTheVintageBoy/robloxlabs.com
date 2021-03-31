declare const parseFormadata: any;
declare const ALLOWED_ATTACHMENT_MIMES: string[];
declare const parseContent: (rawType: any) => (text: string, reviver?: (this: any, key: string, value: any) => any) => any;
declare const getRequestBody: (request: any) => Promise<unknown>;
