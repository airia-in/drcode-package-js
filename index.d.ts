import { Severity } from "@sentry/node";

interface DrcodeSentryConfig {
  protocol: string;
  publicKey: string;
  host: string;
  port: number;
  projectId: string;
  tracesSampleRate?: number;
  profilesSampleRate?: number;
}

declare class DrcodeSentry {
  constructor(config: DrcodeSentryConfig, isServer?: boolean);

  init(): void;

  static errorHandler(err: Error, req: any, res: any, next: any): void;

  captureMessage(message: string, level?: Severity): void;

  captureException(error: Error): void;
}

export = DrcodeSentry;
