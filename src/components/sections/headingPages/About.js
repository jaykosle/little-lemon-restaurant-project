export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon Restaurant</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Welcome to Little Lemon Restaurant
                At Little Lemon Restaurant, we believe that every meal should be a delightful journey, where flavors dance on your palate and memories are created with every bite. Nestled in the heart of Chicago, our charming restaurant offers a cozy ambiance and a warm welcome to all our guests.
                Founded in 2015, Little Lemon Restaurant began as a dream to share our passion for exquisite cuisine with the world. With a commitment to using fresh, locally-sourced ingredients and crafting each dish with love and creativity, we quickly gained recognition for our unique flavors and dedication to culinary excellence.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}