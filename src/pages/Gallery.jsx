
import SoupItem from '../components/SoupItem'

// Image Imports
import chickenorzo from '../../dist/assets/chicken_orzo.jpg'
import loadedpotato from '../../dist/assets/loaded_baked_potato.jpg'
import butternut from '../../dist/assets/roast_butternut_squash.jpg'
import bouillon from '../../dist/assets/bouillon_cubes.jpg'

const soups = [
    {
        image: chickenorzo,
        title: 'Chicken Orzo',
        description: 'A comforting blend of tender chicken, delicate orzo pasta, and fresh vegetables, simmered in a flavorful broth. Perfectly seasoned for a warm, hearty meal that soothes the soul.',
        price: ''
    },
    {
        image: loadedpotato,
        title: 'Loaded Baked Potato',
        description: 'Rich and creamy with chunks of tender potatoes, crispy bacon, sharp cheddar cheese, and a hint of green onions. All the flavors of a classic baked potato in a comforting, hearty bowl.',
        price: ''
    },
    {
        image: butternut,
        title: 'Roaster Butternut Squash',
        description: 'Smooth and velvety with the natural sweetness of roasted butternut squash, a hint of warm spices, and a touch of cream. A cozy, flavorful blend that brings the warmth of fall to every spoonful.',
        price: ''
    },
    {
        image: bouillon,
        title: 'Low Sodium Bouillon Cubes',
        description: 'A savory, flavorful base for soups, stews, and sauces without the extra salt. Perfect for enhancing your dishes with a rich, homemade taste, these cubes provide a healthier option for those watching their sodium intake without compromising on flavor.',
        price: ''
    }

]

function Gallery() {
    const soupItems = soups.map((soupItemObj, index) => {
        return (
            <article key={index} className='soup-item'>
                <SoupItem data={soupItemObj} />
            </article>
        )
    })

    return (
        <section className='soup-gallery'>
            {soupItems}
        </section>
    )
}

export default Gallery