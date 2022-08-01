import type { RouteHandler } from "@pxe/router";

const routeHandler = {
    all(ctx) {
        ctx.response.body = "Hello";
    }
} as RouteHandler;

export = routeHandler;