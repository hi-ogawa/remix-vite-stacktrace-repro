import { type IncomingMessage, type ServerResponse } from "http";
import { type ServerBuild } from "@remix-run/node";
export declare let createRequestHandler: (build: ServerBuild, { mode, criticalCss, ssrFixStacktrace, }: {
    mode?: string | undefined;
    criticalCss?: string | undefined;
    ssrFixStacktrace?: ((error: Error) => void) | undefined;
}) => (req: IncomingMessage, res: ServerResponse) => Promise<void>;
