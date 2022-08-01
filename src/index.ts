// @ts-check
import CORS from "@pxe/cors";
import Server from "@pxe/server";
import { staticDir, routesSync } from "@pxe/utils";

const app = new Server();

app.use(new CORS());
app.use(staticDir("public"));
app.use(...routesSync("lib/routes"));

export = app;