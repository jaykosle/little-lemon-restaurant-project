import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon Restaurant</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">At Little Lemon Restaurant, we believe in the power of food to bring people together. Whether you're joining us for a casual lunch with friends, a romantic dinner for two, or a special celebration with family, our menu is designed to delight every palate. From classic favorites to innovative culinary creations, each dish is a testament to our commitment to quality and flavor</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food1.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}