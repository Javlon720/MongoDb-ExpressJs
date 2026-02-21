import app from "./app.js";
import { config } from "./config/config.js";
import { connectDB } from "./config/db.js";

const PORT = config.PORT || 3005;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error("Failed to start server:", error.message);
    }
};

startServer();