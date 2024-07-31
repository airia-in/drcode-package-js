interface DrCodeConfig {
  protocol: string;
  publicKey: string;
  host: string;
  port: number;
  projectId: string;
  tracesSampleRate?: number;
  profilesSampleRate?: number;
}

export function initDrcode(config: DrCodeConfig): void;

export function setUpErrorHandler(
  err: Error,
  req: any,
  res: any,
  next: any
): void;
