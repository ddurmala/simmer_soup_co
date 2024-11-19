
import ingredients from '../../assets/ingredients.png'

function Home() {
    return (
        <section className='section is-flex'>
            <div className="image-container is-justify-content-right">
                <img src={ingredients} alt="Fresh ingredients" className="image"></img>
            </div>

            <main className="about-container">
                <h1 className="welcome p-4 title is-3 has-text-centered">Welcome to Simmer Soup!</h1>

                <p className="about p-4 has-text-justified has-text-centered-mobile is-size-6-mobile">
                    Simmer soup company was created out of the frustration of finding a decent homemade soup. All of our soups are made in small batches, from scratch, using the best possible ingredients, including pasture-raised meats, and organic vegetables as well as scratch-made soup bases and broths. There’s not a single artificial ingredient in them. Our soups are a nutritious quick meal, and you can taste all the love that went into making each one! Right now we’re offering pre-order quart size only. Pick ups will be Sunday mornings.
                </p>

            </main>
        </section>

    )
}

export default Home