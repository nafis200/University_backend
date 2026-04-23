import { Server } from "http";
import app from "./app";
import { closeBrowser } from "./app/modules/pdf/browser.manager";


const port = 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });

  const shutdown = async (signal: string) => {
    console.log(`\n${signal} received. Closing HTTP server and Puppeteer...`);
    
  
    server.close(async (err) => {
      if (err) {
        console.error("Error closing server:", err);
        process.exit(1);
      }
      
      console.log("HTTP server closed.");
      
      try {
       
        await closeBrowser();
        console.log("Puppeteer browser closed safely.");
        process.exit(0);
      } catch (err) {
        console.error("Error during browser shutdown:", err);
        process.exit(1);
      }
    });

  
    setTimeout(() => {
      console.error("Forcefully shutting down after timeout");
      process.exit(1);
    }, 5000);
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}


main().catch((err) => {
  console.error("Fatal Error during startup:", err);
  process.exit(1);
});