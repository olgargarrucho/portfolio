import { useState } from "react";
import "../styles/layout/proyects.scss";
import dataProyects from "../data/dataProyects.json";
import ProyectItem from "./ProyectItem";

function Proyects() {
  const proyects = useState(dataProyects);
  console.log(proyects);
  const html = proyects[0].map((proyect) => {
      return <ProyectItem name={proyect.name} image={proyect.image} url={proyect.url} desc={proyect.desc} type={proyect.type} skill={proyect.skill} />
  })
  return (
    <div className="proyects">
      <h2 className="proyects__title">Proyects</h2>
      <ul>
          {html}
      </ul>
    </div>
  );
}

export default Proyects;
