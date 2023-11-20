import type { AppLoadContext } from "./data";
import type { ServerBuild } from "./build";
export type RequestHandler = (request: Request, loadContext?: AppLoadContext, args?: {
    /**
     * @private This is an internal API intended for use by the Remix Vite plugin in dev mode
     */
    __criticalCss?: string;
    __ssrFixStacktrace?: (error: Error) => void;
}) => Promise<Response>;
export type CreateRequestHandlerFunction = (build: ServerBuild | (() => Promise<ServerBuild>), mode?: string) => RequestHandler;
export declare const createRequestHandler: CreateRequestHandlerFunction;
