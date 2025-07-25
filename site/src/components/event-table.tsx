'use client';
import styles from "@/app/page.module.css"
import MyComponent from "@/components/tabela"

export function EventTable({events}:any) {

  function ListaDeObjetos({ items }:any) {
  return (
    <ul>
      {items.map((item:any) => (
        <li key={item.id}>
          {item.id} - {item.Categoria}
        </li>
      ))}
    </ul>
  );
}
   
  return (
    <div>
      
         <div className={styles.control}>
          <input type="text" placeholder="Enter text here" />
          <button onClick={() => console.log(events)}>Click Me</button>
      </div>
      <ol>
        <li>
          Get started by editing <code>src/app/page.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <ListaDeObjetos items={events}/>
      
    </div>
  );
}
