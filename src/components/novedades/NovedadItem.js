import React from 'react'

const NovedadItem = (props) => {
    return (
        <div className="novedades">
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <h5>{precio}</h5>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr />
        </div>
    )
}

export default NovedadItem
