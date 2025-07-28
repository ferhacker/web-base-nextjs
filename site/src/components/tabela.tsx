'use client';
import DataTable, { TableColumn, TableStyles } from "react-data-table-component";
import { Event } from "@/app/page";
import styles from "@/app/page.module.css";
import { JSX } from "react";


type EventTableProps = {
  events: Event[];
};

const columns: TableColumn<Event>[] = [
  {
    name: "Tipo",
    selector: (row) => row.Tipo,
    sortable: true,
    wrap: true, // Permite quebra de linha no texto longo
  },
  {
    name: "Localização", // Nome de exibição mais amigável
    selector: (row) => row.Localizacao,
    sortable: true,
    width: "200px", // Definindo uma largura fixa para a coluna
    wrap: true, // Permite quebra de linha no texto longo
  },
  {
    name: "Data de Registro",
    // Acessando propriedade com nome composto usando notação de colchetes
    selector: (row) => row["Data de Registro"],
    sortable: true,
    width: "150px", // Definindo uma largura fixa para a coluna
    wrap: true, // Permite quebra de linha no texto longo
  },
  {
    name: "Descrição",
    // Acessando propriedade com acento
    selector: (row) => row["Descrição"],
    sortable: false, // Talvez você não queira ordenar por descrição longa
    width: "400px", // Definindo uma largura fixa para a coluna
    wrap: true, // Permite quebra de linha no texto longo
  },
  {
    name: "Classificação",
    selector: (row) => row.Classificação,
    sortable: true,
  },
  /*{
    name: "ID", // Nome de exibição da coluna
    selector: (row) => row.id, // Acessa a propriedade 'id'
    sortable: true, // Exemplo: torna a coluna ordenável
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
    width: "200px", // Definindo uma largura fixa para a coluna
  },
        {
    name: "Área",
    // Acessando propriedade com acento (melhor usar notação de colchetes ou renomear se possível)
    selector: (row) => row["Área"],
    sortable: true,
    width: "80px", // Definindo uma largura fixa para a coluna
  },
  {
    name: "Categoria",
    selector: (row) => row.Categoria,
    sortable: true,
  },
   {
    name: "Local Sort", // Nome de exibição mais amigável
    selector: (row) => row.Local_Sort,
    sortable: true,
  },*/

  // Você pode adicionar mais colunas conforme necessário, como colunas de ação ou customizadas.
];

const customStyles: TableStyles = {

  headRow: {
    style: {
      minHeight: '48px', // override the row height
      backgroundColor: '#25a5c5ff', // Light gray background for header row
    },
  },

  /*rows: {
  style: {
    minHeight: '300px', // override the row height
  },
},*/
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      fontSize: 16, // Font size for header cells
      fontWeight: 'bold', // Bold text for header cells
      backgroundColor: '#8ad6dbff', // Light gray background for header cells

    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

function MyComponent({ events }: EventTableProps): JSX.Element {


  return (
    <div>

      <div className={styles.control}>
        <input type="text" placeholder="Enter text here" />
        <button onClick={() => console.log(events)}>Click Me</button>
      </div>

      <DataTable columns={columns} data={events} selectableRows customStyles={customStyles} />
    </div>
  );
}

export default MyComponent;


