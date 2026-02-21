import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routeLoader = (app) => {
    const routesPath = path.join(__dirname, "../routes");

    fs.readdirSync(routesPath).forEach((file) => {
        if (file.endsWith(".route.js")) {
            const moduleName = file.split(".")[0];
            const routePath = path.join(routesPath, file);
            import(routePath).then((module) => {
                const router = module.default;
                app.use(`/api/${moduleName}`, router);
            }).catch((err) => {
                console.error(`Failed to load route for ${moduleName}:`, err.message);
            });
        }
    });
};

export default routeLoader;
