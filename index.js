const { exec } = require("child_process");

const port = Number(process.env.PORT || 8080);
const host = String(process.env.HOST || "localhost");

// Change this to match your package manager
exec("npx tsc").on("close", () => 
    require("./lib/index").ls(port, host)
);

