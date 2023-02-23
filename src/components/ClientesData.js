import "./ClientesStyles.css"

function ClientesData (props){
    return(
        <div className="c-card">
            <div className="c-image">
                <img src={props.image} alt="image"/>
            </div>
        </div>
    )
}

export default ClientesData;