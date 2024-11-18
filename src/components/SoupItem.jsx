
function SoupItem(props) {
    console.log(props)

    return (

        <div className="card p-3">
            <div className="card-image">
                <figure className="image is-square">
                    <img
                        src={props.data.image} alt='soup'
                    />
                </figure>
            </div>
            <div className="content p-2">
                <h5 className="card-title is-size-4 mt-2">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
                <p className="card-price">{props.data.price}</p>
            </div>

        </div>

    )
}

export default SoupItem