function ProyectItem (props) {
    return (
        <li className="card">
                    <img className="card__img"
                                src={props.image}
                                alt={`Foto de ${props.name}`} title={`Foto de ${props.name}`} />
                    <h4 className="card__name">{props.name}</h4>
                    <p className="card__specie">{props.desc} </p>
                    
         </li>
    )
}

export default ProyectItem;