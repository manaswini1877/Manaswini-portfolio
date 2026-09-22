declare module "resend" {
  export class Resend {
    constructor(apiKey?: string);
    emails: {
      send(payload: {
        from: string;
        to: string | string[];
        subject: string;
        replyTo?: string | string[];
        reply_to?: string | string[];
        text?: string;
        html?: string;
        react?: any;
      }): Promise<{ data: any; error: any }>;
    };
  }
}
