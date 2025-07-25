"use client";
import DataTable, { TableColumn } from "react-data-table-component";
import { Event } from "@/app/page";
import styles from "@/app/page.module.css";

type EventTableProps = {
  events: Event[];
};

const columns: TableColumn<Event>[] = [
  {
    name: "ID", // Nome de exibição da coluna
    selector: (row) => row.id, // Acessa a propriedade 'id'
    sortable: true, // Exemplo: torna a coluna ordenável
  },
  {
    name: "Tipo",
    selector: (row) => row.Tipo,
    sortable: true,
  },
  {
    name: "Local",
    selector: (row) => row.Local,
    sortable: true,
  },
  {
    name: "Localidade",
    selector: (row) => row.Localidade,
    sortable: true,
  },
  {
    name: "Data de Registro",
    // Acessando propriedade com nome composto usando notação de colchetes
    selector: (row) => row["Data de Registro"],
    sortable: true,
  },
  {
    name: "Área",
    // Acessando propriedade com acento (melhor usar notação de colchetes ou renomear se possível)
    selector: (row) => row["Área"],
    sortable: true,
  },
  {
    name: "Descrição",
    // Acessando propriedade com acento
    selector: (row) => row["Descrição"],
    sortable: false, // Talvez você não queira ordenar por descrição longa
  },
  {
    name: "Categoria",
    selector: (row) => row.Categoria,
    sortable: true,
  },
  {
    name: "Classificação",
    selector: (row) => row.Classificação,
    sortable: true,
  },
  {
    name: "Local Sort", // Nome de exibição mais amigável
    selector: (row) => row.Local_Sort,
    sortable: true,
  },
  {
    name: "Localização", // Nome de exibição mais amigável
    selector: (row) => row.Localizacao,
    sortable: true,
  },
  // Você pode adicionar mais colunas conforme necessário, como colunas de ação ou customizadas.
];

function MyComponent({ events }: EventTableProps) {
  return (
    <div>
      <div className={styles.control}>
        <input type="text" placeholder="Enter text here" />
        <button onClick={() => console.log(events)}>Click Me</button>
      </div>

      <DataTable columns={columns} data={events} selectableRows pagination />
    </div>
  );
}

export default MyComponent;
