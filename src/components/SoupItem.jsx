
function SoupItem(props) {
    console.log(props)

    return (

        <div className="card p-3">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={props.data.image} alt='soup photo'
                    />
                </figure>
            </div>
            <div className="content p-2">
                {/* <h5 className="card-title title is-1">{props.data.title}</h5> */}
                <p className="card-text">{props.data.description}</p>
                <p className="card-text"><small className="text-body-secondary">{props.data.technologies}</small></p>
            </div>

        </div>

    )
}

export default SoupItem