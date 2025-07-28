import styles from "./page.module.css";
import { EventTable } from "@/components/event-table";
//Importações para leitura do arquivo
import { promises as fs } from "fs";
import path from "path";
import MyComponent from "@/components/tabela";

// Define the type for a single event
export type Event = {
  id: string;
  Tipo: string;
  Local: string;
  Localidade: string;
  'Data de Registro': string;
  Área: string;
  Descrição: string;
  Categoria: 'Relevante' | 'Irrelevante';
  Classificação: string;
  Local_Sort: string;
  Localizacao: string;
  dataRegistroDate?: Date; // novo campo para armazenar a data como objeto Date
};



//Deve ser async function para implementar a letura do documento
//-------------------------------------------------------------------
async function getEventData(): Promise<Event[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "events.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    // Convert the object of objects into an array of objects, including the ID
    return Object.entries(data).map(([id, event]) => ({
      
      
      id,
      ...(event as Omit<Event, "id">),
    }));
  } catch (error) {
    console.error("Failed to read or parse event data:", error);
    return [];
  }
}
//-----------------------------------------------------------------------------



export default async function Home() {
  const events = await getEventData();
  return (
    
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
          <h1 className="">Gerador de Relatório de Eventos</h1>
          <p className="">
            Filtre e selecione os eventos para gerar seu relatório
            personalizado.
          </p>
        </header>
         <MyComponent events={events} />
       </main>
    </div>
  );
}
