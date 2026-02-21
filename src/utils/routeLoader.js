import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routeLoader = async (app) => {
    const routesPath = path.join(__dirname, "../routes");

    const files = fs.readdirSync(routesPath);
    const routePromises = files
        .filter((file) => file.endsWith(".route.js"))
        .map(async (file) => {
            const moduleName = file.split(".")[0];
            const routePath = path.join(routesPath, file);
            try {
                const module = await import(routePath);
                const router = module.default;
                app.use(`/api/${moduleName}`, router);
            } catch (err) {
                console.error(`Failed to load route for ${moduleName}:`, err.message);
            }
        });

    await Promise.all(routePromises);
};

export default routeLoader;
