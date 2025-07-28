import path from "path";
import { promises as fs } from "fs";
import { Event } from "@/app/page";


export default async function Dados(): Promise<Event[]> {
      try {
        const filePath = path.join(process.cwd(), "data", "events.json");
        const jsonData = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(jsonData);
    
        // Convert the object of objects into an array of objects, including the ID
        
return Object.entries(data).map(([id, event]) => {
  const dataRegistro = new Date(event["Data de Registro"]);
  return {
    id,
    ...(event as Omit<Event, "id">),
    dataRegistroDate: dataRegistro, // novo campo
  };
});

      } catch (error) {
        console.error("Failed to read or parse event data:", error);
        return [];
      }
    }