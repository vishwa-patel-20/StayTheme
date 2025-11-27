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
	{ label: "Add your location", value: "Add your location" },
	{ label: "Select a theme", value: "Select a theme" },
	{ label: "Select date", value: "Select date" },
	{ label: "Add guests", value: "Add guests" }
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
		image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=80"
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
		title: "Serenity Soiree Villa",
		location: "Bali, Indonesia",
		price: "$203",
		rating: "4.9",
		image: theme1
	},
	{
		title: "Coastal Paradiso",
		location: "Phuket, Thailand",
		price: "$219",
		rating: "4.8",
		image: theme2
	},
	{
		title: "Royal Retreat Villa",
		location: "Colorado, USA",
		price: "$249",
		rating: "5.0",
		image: theme3
	},
	{
		title: "Woodland Chalet",
		location: "Mt. Hood, USA",
		price: "$175",
		rating: "4.7",
		image: theme4
	}
];

const featureThumbs = [theme5, theme6, theme1];

const bookingSteps = [
	{
		step: "01",
		title: "Search & Choose",
		desc: "Enter your destination, dates, and guest details to find the perfect property that fits your needs."
	},
	{
		step: "02",
		title: "Review & Confirm",
		desc: "Make sure the dates and guest count match your requirements before confirming your booking."
	},
	{
		step: "03",
		title: "Book & Pay Securely",
		desc: "Complete your reservation securely, and receive instant confirmation with updates about your stay."
	}
];

const locationFilters = [
	{ label: "Maldives", icon: "🏝️" },
	{ label: "Thailand", icon: "🌺" },
	{ label: "Colorado", icon: "⛰️" },
	{ label: "Greece", icon: "🏛️" },
	{ label: "Italy", icon: "🍝" },
	{ label: "Tuscany", icon: "🍇" },
	{ label: "Phuket", icon: "🌅" }
];

const propertyLocations = [
	{
		name: "Serenity Soiree Villa",
		region: "Bali, Indonesia",
		image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
		rating: "4.9",
		tag: "Eco Stay",
		price: "$203 / Night"
	},
	{
		name: "Royal Retreat Villa",
		region: "Tuscany, Italy",
		image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
		rating: "4.8",
		tag: "Heritage",
		price: "$249 / Night"
	},
	{
		name: "Lakefront Manor",
		region: "Queenstown, NZ",
		image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?auto=format&fit=crop&w=1200&q=80",
		rating: "5.0",
		tag: "Top Rated",
		price: "$289 / Night"
	}
];

const guestSpotlight = {
	image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80",
	avatars: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=60", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60", "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=60"]
};

const guestImpressions = [
	{
		quote:
			"The property felt like a dream. The concierge curated sunrise hikes and candle-lit dinners that made our stay unforgettable.",
		name: "Jane Cooper",
		role: "Creative Director",
		stay: "Serenity Soiree Villa",
		avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60",
		rating: 5
	},
	{
		quote:
			"We loved the seamless booking flow and sustainable amenities. The villa matched the Figma preview to perfection.",
		name: "Alan Jackson",
		role: "CEO, ABC Group",
		stay: "Royal Retreat Villa",
		avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=60",
		rating: 5
	},
	{
		quote:
			"The curated local experiences were the highlight. Every day had a new surprise tailored to our interests.",
		name: "Jenny Wilson",
		role: "Product Lead",
		stay: "Summit Escape Chalet",
		avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=60",
		rating: 5
	}
];

const faqs = [
	{
		question: "How do I become a host on your platform?",
		answer: "To add your property to our platform, click the 'Become a Host' button on the homepage. Fill out the form, submit property details and images, and our team will guide you through the approval process."
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
						<a href="#themes">About Us</a>
						<a href="#collection">Properties</a>
						<a href="#faq">Contact Us</a>
					</nav>
					<div className="header-actions">
						<button className="ghost-btn inverted">Become a Host</button>
						<button className="solid-btn light-pill">Login</button>
					</div>
				</header>

				<div className="hero-content-stack">

				<div className="hero-card">
					<div className="hero-card-container">
						<div className="hero-card-content">
							<h1>Escape to Nature with Our Eco Retreats</h1>						
						</div>
						<div>
							<div className="hero-social">
								<div>
									<div className="avatar-group">
										<span className="avatar" />
										<span className="avatar" />
										<span className="avatar" />
										<span className="avatar last">+12</span>
									</div>
									<p className="hero-subtext">
										We hand-pick every property to ensure timeless architecture, high standards for comfort, concierge
										experiences, and quality.
									</p>
								</div>
							</div>
						</div>		
						</div>				
				
						<div className="hero-filters">
						{heroFilters.map((item) => (
							<div className="filter-chip" key={item.label}>
								<p>{item.label}</p>
							</div>
						))}
						<button className="solid-btn search-btn">Search</button>
						</div>
					</div>
					
				</div>
			</section>

			<main>

				<section className="themes-section" id="themes">
					<div className="section-header">
						<div>
							<h2>Choose From A Range Of Unique Themes</h2>							
						</div>
						<p className="muted">
							Choose from a wide selection of curated themes that promise unforgettable experiences and easy access to destinations.
						</p>						
					</div>
					<div className="theme-container">
						<div className="theme-tabs">
							{themeTabs.map((tab) => (
								<button key={tab} className={`tab-pill ${tab === "All" ? "active" : ""}`}>
									{tab}
								</button>
							))}
						</div>
						<button className="ghost-btn">Explore Properties</button>
					</div>
					<div className="theme-grid">
						{themeCards.map((card) => (
							<div key={card.title}>
									<img className="theme-img" src={card.image} alt={card.title} />
									<article className="theme-card">									
										<div className="theme-card-body">
											<div>
												<h3>{card.title}</h3>
												<p>{card.location}</p>
											</div>
											<div className="theme-meta">
												<span>⭐ {card.rating}</span>
											</div>
											
										</div>
									</article>
							</div>
						))}
					</div>
				</section>

				<section className="collection-section" id="collection">
					<div className="collection-heading">
						<h2>
							Explore Our Diverse{" "}
							<span className="heading-icon">
								<img src={curatedCollection.image} alt="Collection badge" />
							</span>{" "}
							Collection Now And Book Your Next Vacation Spot In Just A Few Clicks!
						</h2>						
					</div>
					<div className="collection-showcase">
						<article className="collection-feature-card">
							<div className="feature-card__header">
								<span className="feature-arrow">↗</span>
								<span className="feature-rating">⭐ 4.9</span>
							</div>
							<h3>{curatedCollection.title}</h3>
							<p className="feature-location">{curatedCollection.location}</p>
							<div className="feature-stats">
								<span>20 Guests</span>
								<span>7 Rooms</span>
								<span>6 Baths</span>
							</div>
							<div className="feature-perks">
								<button>Serenity Retreat</button>
								<button>Included Meals</button>
								<button>Spa Access</button>
							</div>
							<div className="feature-price">
								<div>
									<strong>{curatedCollection.price}</strong>
									<span>Per Night</span>
								</div>
								<button className="solid-btn">Book Now</button>
							</div>
							<div className="feature-thumbs">
								{featureThumbs.map((imgSrc) => (
									<img src={imgSrc} alt="Stay preview" key={imgSrc} />
								))}
							</div>
							<div className="feature-dots">
								<span className="active" />
								<span />
								<span />
							</div>
						</article>
						<div className="collection-carousel">
							{highlightCards.map((card) => (
								<article className="carousel-card" key={card.title}>
									<img src={card.image} alt={card.title} />
									<div className="carousel-card__body">
										<h3>{card.title}</h3>
										<p>{card.location}</p>
										<div className="carousel-meta">
											<span>⭐ {card.rating}</span>
											<strong>{card.price}</strong>
										</div>
									</div>
								</article>
							))}
							<div className="carousel-nav">
								<button aria-label="Previous slide">←</button>
								<div className="carousel-dots">
									<span className="active" />
									<span />
									<span />
								</div>
								<button aria-label="Next slide">→</button>
							</div>
						</div>
					</div>
				</section>

				<section className="process-section" id="process">
					<div className="section-header">
						<p>Easy 3-Step Booking Process</p>
						<button>Explore Properties</button>
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
					<div className="locations-header">
						<div>
							<h2>Properties By Location</h2>
							<p>Explore our diverse collection now and book your next vacation spot in just a few clicks.</p>
						</div>
						<button className="ghost-btn">Explore Properties</button>
					</div>
					<div className="location-tags">
						{locationFilters.map((item, idx) => (
							<button key={item.label} className={`tag-pill ${idx === 0 ? "active" : ""}`}>
								<span>{item.icon}</span>
								{item.label}
							</button>
						))}
					</div>
					<div className="location-panels">
						{propertyLocations.map((location) => (
							<article className="location-panel" key={location.name}>
								<div className="panel-image">
									<img src={location.image} alt={location.name} />
									<div className="panel-rating">
										<span>⭐ {location.rating}</span>
										<button aria-label="View property">↗</button>
									</div>
								</div>
								<div className="panel-body">
									<div>
										<p className="panel-tag">{location.tag}</p>
										<h3>{location.name}</h3>
										<p>{location.region}</p>
									</div>
									<div className="panel-footer">
										<strong>{location.price}</strong>
										<button className="ghost-btn small">Book Now</button>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="guest-section" id="testimonials">
					<div className="guest-wrapper">
						<div className="guest-visual">
							<div className="guest-heading">
								<h2>Guest Impressions & Insights</h2>
								<div className="guest-avatars">
									{guestSpotlight.avatars.map((avatar) => (
										<span key={avatar} style={{ backgroundImage: `url(${avatar})` }} />
									))}
								</div>
							</div>
							<img src={guestSpotlight.image} alt="Guest experience" />
						</div>
						<div className="guest-testimonials">
							{guestImpressions.map((guest) => (
								<article className="guest-card" key={guest.name}>
									<div className="guest-stars">
										{Array.from({ length: guest.rating }).map((_, starIndex) => (
											<span key={`${guest.name}-star-${starIndex}`}>★</span>
										))}
									</div>
									<p className="quote">“{guest.quote}”</p>
									<div className="guest-meta">
										<img src={guest.avatar} alt={guest.name} />
										<div>
											<strong>{guest.name}</strong>
											<span>{guest.role}</span>
											<p>{guest.stay}</p>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			

				<section className="app-section" id="download">
					<div className="app-copy">
						<h2>Get The App Now!</h2>
						<p>
							Book curated stays, complete check-in, choose your room, and select your amenities from anywhere in the
							world.
						</p>
						<div className="store-buttons">
							<button className="solid-btn">Google Play</button>
							<button className="ghost-btn inverted">App Store</button>
						</div>
					</div>
					<div className="app-visual">
						<div className="app-frame">
							<span className="frame-corner" />
							<span className="frame-corner" />
							<span className="frame-corner" />
							<span className="frame-corner" />
							<div className="mobile-shell">
								<img src={mobile} alt="StayTheme mobile preview" />
							</div>
						</div>
					</div>
				</section>

				<section className="faq-section" id="faq">
					<div className="faq-card">
						<div className="faq-section-left">
							<h2>Frequently Asked Questions</h2>
							<button className="faq-cta">
								<span>View All</span>
								<span className="arrow">→</span>
							</button>
						</div>

						<div className="faq-list faq-section-right">
							{faqs.map((faq) => (
							<details key={faq.question}>
								<summary>{faq.question}</summary>
								<p>{faq.answer}</p>
							</details>
							))}
						</div>
					</div>
				</section>

				<section className="newsletter-section">
					<div className="newsletter-copy">
						<h2>Get Newsletter Updates</h2>
						<p className="muted">Subscribe to get the latest news from us</p>
					</div>
					<form className="newsletter-form">
						<input type="email" placeholder="Enter email address" />
					</form>
				</section>
			</main>

			<footer className="site-footer">
				<div className="footer-wrap">
					<div className="footer-brand">
						<div className="brand-mark">
							<img src={logochar} alt="StayTheme logo" />
						</div>
						<p>
							At StayTheme We handpick each property to ensure it meets our high standards for comfort, cleanliness, and quality.
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
				</div>
				<div className="footer-bottom">
					<span>© {new Date().getFullYear()} StayTheme. All rights reserved.</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
