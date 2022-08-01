import Router from "@pxe/router";
import hello from "./hello";

const apiRoot = new Router("/api/");

apiRoot.handle("/hello", hello);

export = apiRoot;