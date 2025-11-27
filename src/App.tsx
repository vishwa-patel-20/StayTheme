import "./App.css";

import logo from "./assets/logo.svg";
import logochar from "./assets/logoChar.svg";
import mobile from "./assets/mobile.jpg";
import theme1 from "./assets/theme1.jpg";
import theme2 from "./assets/theme2.jpg";
import theme3 from "./assets/theme3.jpg";
import theme4 from "./assets/theme4.jpg";
import theme5 from "./assets/theme5.jpg";
import theme6 from "./assets/theme6.jpg";

const heroFilters = [
	{ label: "Destination", value: "Alpine Meadows" },
	{ label: "Suites", value: "Nature Cabins" },
	{ label: "Guests", value: "02 Adults" },
	{ label: "Budget", value: "$250 / Night" }
];

const themeTabs = ["All", "Villas", "Beachfront", "Mountain", "Desert", "City Urban", "Lakefront"];

const themeCards = [
	{
		title: "Scenic Solitude Villa",
		location: "Bali, Indonesia",
		price: "$189 / Night",
		rating: "4.9",
		beds: "3 Beds",
		baths: "2 Baths",
		image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
	},
	{
		title: "Coastal Paradiso",
		location: "Phuket, Thailand",
		price: "$203 / Night",
		rating: "4.8",
		beds: "4 Beds",
		baths: "3 Baths",
		image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80"
	},
	{
		title: "Royal Retreat Villa",
		location: "Colorado, USA",
		price: "$219 / Night",
		rating: "5.0",
		beds: "5 Beds",
		baths: "4 Baths",
		image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=600&q=80"
	},
	{
		title: "Woodland Chalet",
		location: "Mt. Hood, USA",
		price: "$175 / Night",
		rating: "4.7",
		beds: "3 Beds",
		baths: "2 Baths",
		image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=600&q=80"
	}
];

const curatedCollection = {
	title: "Serenity Soiree Villa",
	location: "Bali, Indonesia",
	price: "$203",
	nights: "6 Nights • 3 Rooms",
	baths: "2 Baths • Free Wi-Fi",
	image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
};

const highlightCards = [
	{
		title: "Summit Escape",
		location: "Aspen, USA",
		tag: "New",
		image: theme1
	},
	{
		title: "Azure Coastline",
		location: "Capri, Italy",
		tag: "Top Rated",
		image: theme2
	},
	{
		title: "Serenity Soiree",
		location: "Bali, Indonesia",
		tag: "Trending",
		image: theme3
	},
	{
		title: "Urban Haven",
		location: "Berlin, Germany",
		tag: "Recommended",
		image: theme4
	},
	{
		title: "Monsoon Retreat",
		location: "Kerala, India",
		tag: "Family",
		image: theme5
	},
	{
		title: "Pastel Dunes",
		location: "Doha, Qatar",
		tag: "Desert",
		image: theme6
	}
];

const bookingSteps = [
	{
		step: "01",
		title: "Search & Choose",
		desc: "Browse curated eco retreats, compare amenities, and shortlist your dream stay."
	},
	{
		step: "02",
		title: "Review & Confirm",
		desc: "Inspect high-resolution galleries, read guest reviews, and finalize the dates."
	},
	{
		step: "03",
		title: "Book & Pay Securely",
		desc: "Complete the reservation with our protected checkout and receive instant confirmation."
	}
];

const propertyLocations = [
	{
		name: "Thailand",
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		rating: "4.9",
		badge: "New"
	},
	{
		name: "Bali, Indonesia",
		image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=600&q=80",
		rating: "4.8",
		badge: "Eco"
	},
	{
		name: "Colorado, USA",
		image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
		rating: "5.0",
		badge: "Trending"
	}
];

const testimonials = [
	{
		quote: "The photos were exactly as described. We finally discovered a retreat that truly matched the location and vibe we were searching for.",
		name: "Jane Cooper",
		role: "CEO, AESC Corporation",
		avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
	},
	{
		quote: "Within minutes we finalized dates, reviewed the house rules, and booked. The curated list saved us hours of research.",
		name: "Alan Jackson",
		role: "CEO, AISC Corporation",
		avatar: "https://images.unsplash.com/photo-1544723795-4325376281d6?auto=format&fit=crop&w=200&q=80"
	},
	{
		quote: "From the booking flow to the concierge chat, everything felt premium. Our family getaway was effortless.",
		name: "Jane Cooper",
		role: "COO, Alpine Collections",
		avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
	}
];

const faqs = [
	{
		question: "How do I become a host on your platform?",
		answer: "Submit property details, showcase themed rooms, and our team will guide you through the onboarding checklist."
	},
	{
		question: "What payment methods do you accept?",
		answer: "We accept all major cards, international wallets, and direct bank transfers for premium partners."
	},
	{
		question: "Can I cancel or modify my booking?",
		answer: "Free cancellations are available up to 48 hours before check-in on most listings."
	},
	{
		question: "Are the properties pet-friendly?",
		answer: "Look for the paw icon on listing cards—those homes offer pet-friendly amenities."
	}
];

function App() {
	return (
		<div className="staytheme-page">
			<section className="hero-banner" id="hero">
				<header className="main-header">
					<div className="brand-mark">
						<img src={logo} alt="StayTheme logo" />
					</div>
					<nav className="primary-nav">
						<a href="#hero" className="active">Home</a>
						<a href="#themes">Themes</a>
						<a href="#collection">Collections</a>
						<a href="#process">Process</a>
						<a href="#locations">Locations</a>
					</nav>
					<div className="header-actions">
						<button className="ghost-btn light">Become a Host</button>
						<button className="solid-btn outline">Login</button>
					</div>
				</header>

				<div className="hero-content-stack">
					<div className="hero-card">
						<p className="hero-pill">Eco Escapes</p>
						<h1>Escape To Nature With Our Eco Retreats</h1>
						<p className="hero-subtext">
							We hand-pick every property to ensure timeless architecture, high standards for comfort, concierge
							experiences, and quality.
						</p>
						<div className="hero-social">
							<div className="avatar-group">
								<span className="avatar" />
								<span className="avatar" />
								<span className="avatar" />
								<span className="avatar last">+12</span>
							</div>
							<p>Trusted by 25k+ happy guests across 46 locations.</p>
						</div>
					</div>
					<div className="hero-filters">
						{heroFilters.map((item) => (
							<div className="filter-chip" key={item.label}>
								<p>{item.label}</p>
								<strong>{item.value}</strong>
							</div>
						))}
						<button className="solid-btn search-btn">Search</button>
					</div>
				</div>
			</section>

			<main>

				<section className="themes-section" id="themes">
					<div className="section-header">
						<div>
							<p className="eyebrow">Curated Selections</p>
							<h2>Choose From A Range Of Unique Themes</h2>
							<p className="muted">
								Discover bespoke villas, lakeside cabins, and mountain hideouts built to inspire unforgettable memories.
							</p>
						</div>
						<button className="ghost-btn">Explore Properties</button>
					</div>
					<div className="theme-tabs">
						{themeTabs.map((tab) => (
							<button key={tab} className={`tab-pill ${tab === "All" ? "active" : ""}`}>
								{tab}
							</button>
						))}
					</div>
					<div className="theme-grid">
						{themeCards.map((card) => (
							<article className="theme-card" key={card.title}>
								<img src={card.image} alt={card.title} />
								<div className="theme-card-body">
									<div>
										<h3>{card.title}</h3>
										<p>{card.location}</p>
									</div>
									<div className="theme-meta">
										<span>{card.price}</span>
										<span>⭐ {card.rating}</span>
									</div>
									<div className="theme-amenities">
										<span>{card.beds}</span>
										<span>{card.baths}</span>
									</div>
									<button className="solid-btn small">Book Now</button>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="collection-section" id="collection">
					<div className="collection-highlight">
						<div className="collection-media">
							<img src={curatedCollection.image} alt={curatedCollection.title} />
							<div className="media-tags">
								<span>Serenity Retreat</span>
								<span>Included Meals</span>
								<span>Spa Access</span>
							</div>
						</div>
						<div className="collection-details">
							<p className="eyebrow">Featured Collection</p>
							<h2>Explore Our Diverse Collection And Book In Just A Few Clicks</h2>
							<p>
								Choose from curated suites that combine modern comfort with natural surroundings. Every stay includes
								private concierges, guided excursions, and sustainable amenities.
							</p>
							<ul>
								<li>{curatedCollection.nights}</li>
								<li>{curatedCollection.baths}</li>
								<li>Complimentary breakfast</li>
								<li>Driver on request</li>
							</ul>
							<div className="collection-price">
								<div>
									<strong>{curatedCollection.price}</strong>
									<span>Per Night</span>
								</div>
								<button className="solid-btn">Book Now</button>
							</div>
						</div>
					</div>
					<div className="collection-carousel">
						{highlightCards.map((card) => (
							<div className="mini-card" key={card.title}>
								<img src={card.image} alt={card.title} />
								<div className="mini-body">
									<p className="tag">{card.tag}</p>
									<h3>{card.title}</h3>
									<p>{card.location}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="process-section" id="process">
					<div className="section-header">
						<div>
							<p className="eyebrow">Easy 3-Step Booking</p>
							<h2>Plan A Scenic Stay Without The Stress</h2>
						</div>
						<button className="ghost-btn">Explore Process</button>
					</div>
					<div className="steps-grid">
						{bookingSteps.map((step) => (
							<div className="step-card" key={step.step}>
								<span>{step.step}</span>
								<h3>{step.title}</h3>
								<p>{step.desc}</p>
							</div>
						))}
					</div>
				</section>

				<section className="locations-section" id="locations">
					<div className="section-header">
						<div>
							<p className="eyebrow">Properties By Location</p>
							<h2>Pick A Destination & Start Packing</h2>
						</div>
						<button className="ghost-btn">Explore Locations</button>
					</div>
					<div className="location-tags">
						{["Thailand", "Bali", "Colorado", "Greece", "Italy", "Turkey"].map((loc) => (
							<button key={loc} className="tag-pill">
								{loc}
							</button>
						))}
					</div>
					<div className="location-grid">
						{propertyLocations.map((location) => (
							<article className="location-card" key={location.name}>
								<img src={location.image} alt={location.name} />
								<div className="location-body">
									<div>
										<h3>{location.name}</h3>
										<p>Luxury Retreat</p>
									</div>
									<div className="location-meta">
										<span>⭐ {location.rating}</span>
										<span>{location.badge}</span>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="testimonials-section" id="testimonials">
					<div className="section-header">
						<div>
							<p className="eyebrow">Testimonials</p>
							<h2>Guests Share Their Favorite Moments</h2>
						</div>
						<div className="carousel-controls">
							<button>{"<"}</button>
							<button>{">"}</button>
						</div>
					</div>
					<div className="testimonial-grid">
						{testimonials.map((testimonial) => (
							<article className="testimonial-card" key={testimonial.name + testimonial.role}>
								<p className="quote">“{testimonial.quote}”</p>
								<div className="author">
									<img src={testimonial.avatar} alt={testimonial.name} />
									<div>
										<strong>{testimonial.name}</strong>
										<span>{testimonial.role}</span>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="app-section" id="download">
					<div className="app-copy">
						<p className="eyebrow">Get The App Now!</p>
						<h2>Discover World-Class Retreats On The Go</h2>
						<p>
							Book stays, chat with concierges, complete checklists, and manage itineraries in a single mobile-first
							experience.
						</p>
						<div className="store-buttons">
							<button className="solid-btn">Google Play</button>
							<button className="ghost-btn">App Store</button>
						</div>
					</div>
					<div className="app-preview">
						<img src={mobile} alt="Mobile preview" />
					</div>
				</section>

				<section className="faq-section" id="faq">
					<div className="section-header">
						<div>
							<p className="eyebrow">Frequently Asked Questions</p>
							<h2>Everything You Need To Know Before Booking</h2>
						</div>
						<button className="ghost-btn">View All</button>
					</div>
					<div className="faq-list">
						{faqs.map((faq) => (
							<details key={faq.question}>
								<summary>{faq.question}</summary>
								<p>{faq.answer}</p>
							</details>
						))}
					</div>
				</section>

				<section className="newsletter-section">
					<div>
						<p className="eyebrow">Get Newsletter Updates</p>
						<h2>Subscribe To The Latest News From Us</h2>
					</div>
					<form className="newsletter-form">
						<input type="email" placeholder="Enter email address" />
						<button className="solid-btn" type="submit">Subscribe</button>
					</form>
				</section>
			</main>

			<footer className="site-footer">
				<div className="footer-brand">
					<div className="brand-mark">
						<img src={logochar} alt="StayTheme logo" />
					</div>
					<p>
						At StayTheme we hand-pick themed properties across continents, curate concierge services, and bring serene
						memories to modern explorers.
					</p>
				</div>
				<div className="footer-links">
					<div>
						<h4>Quick Links</h4>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Destinations</li>
							<li>Blog</li>
						</ul>
					</div>
					<div>
						<h4>Policies</h4>
						<ul>
							<li>Terms of Use</li>
							<li>Privacy Policy</li>
							<li>Cookie Policy</li>
							<li>Support</li>
						</ul>
					</div>
					<div>
						<h4>Social</h4>
						<ul>
							<li>Instagram</li>
							<li>Facebook</li>
							<li>LinkedIn</li>
							<li>Twitter</li>
						</ul>
					</div>
				</div>
				<div className="footer-bottom">
					<span>© {new Date().getFullYear()} StayTheme. All rights reserved.</span>
					<span>Designed for eco-friendly explorers.</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
