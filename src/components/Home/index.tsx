import { useEffect, useState } from "react";
import { Star, TrendingUp } from "lucide-react";
import first from '../../assets/first.avif';
import second from '../../assets/second.jpg';
import third from '../../assets/third.jpg';
import fourth from '../../assets/fourth.jpg';
import styles from './index.module.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const images = [first, second, third, fourth];
  const navigate = useNavigate();

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  useEffect(() => {
    const mockRestaurants = [
      {
        restaurant_id: 1,
        restaurant_name: "Lazy Bear",
        cuisines: ["Cakes", "Pastry", "Pastas"],
        location: "Connaught Place, New Delhi",
        rating: 4.5,
        cost_for_two: 200,
        offers: 4
      },
      {
        restaurant_id: 2,
        restaurant_name: "Nik Baker's",
        cuisines: ["Bakery", "Desserts"],
        location: "Connaught Place, New Delhi",
        rating: 4.3,
        cost_for_two: 250,
        offers: 3
      },
      {
        restaurant_id: 3,
        restaurant_name: "It's Bake",
        cuisines: ["Cakes", "Pastry"],
        location: "Connaught Place, New Delhi",
        rating: 4.5,
        cost_for_two: 200,
        offers: 5
      },
      {
        restaurant_id: 4,
        restaurant_name: "Cakery",
        cuisines: ["Desserts", "Bakery"],
        location: "Connaught Place, New Delhi",
        rating: 4.2,
        cost_for_two: 180,
        offers: 2
      }
    ];
    setRestaurants(mockRestaurants);
  }, []);

  const handleDetails = (r: any) => {
    navigate('/restaurant-detail', { state: { restaurant: r } });
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLocation}>Pre Order From 📍</div>
        <div className={styles.headerPlace}>Connaught Place</div>
      </div>

      {/* Welcome Section */}
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeContent}>
          <div className={styles.welcomeText}>
            <h1>Karan</h1>
            <p>Let's explore this evening</p>
          </div>
          <div className={styles.iconButtons}>
            <button className={`${styles.iconButton} ${styles.offersButton}`}>
              %<span>Offers</span>
            </button>
            <button className={`${styles.iconButton} ${styles.walletButton}`}>
              💳<span>Wallet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Your Taste Section */}
      <div className={styles.tasteSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Your taste</h2>
          <span className={styles.seeAll}>see all →</span>
        </div>
        <div className={styles.tasteCards}>
          {restaurants.slice(0, 3).map((r) => (
            <div key={r.restaurant_id} className={styles.tasteCard}>
              <div className={styles.tasteCardImage}>
                <img src={getRandomImage()} alt={r.restaurant_name} />
              </div>
              <h4>{r.restaurant_name}</h4>
              <p>{r.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className={styles.bannerSection}>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h3>VEGGIE FRIENDLY<br />EATERIES</h3>
            <button className={styles.btn}>TRY NOW</button>
          </div>
          <div className={styles.bannerImage}>
            <img src={images[2]} alt="Healthy food" />
          </div>
        </div>
      </div>

      {/* Popular Ones */}
      <div className={styles.popularSection}>
        <h2 className={styles.sectionTitle}>Popular Ones</h2>

        {restaurants.length === 0 && (
          <p className={styles.emptyState}>No restaurants found</p>
        )}

        <div className={styles.popularGrid}>
          {restaurants.map((r) => (
            <div
              key={r.restaurant_id}
              className={styles.restaurantCard}
              onClick={() => handleDetails(r)}
            >
              <div className={styles.restaurantImage}>
                <img src={getRandomImage()} alt={r.restaurant_name} />
              </div>

              <div className={styles.restaurantInfo}>
                <div className={styles.restaurantDetails}>
                  <h3>{r.restaurant_name}</h3>
                  <p className={styles.restaurantCuisines}>{r.cuisines?.join(", ")}</p>
                  <p className={styles.restaurantLocation}>{r.location}</p>

                  <div className={styles.offersBadge}>
                    <TrendingUp size={14} />
                    <span>{r.offers} Offers trending</span>
                  </div>
                </div>

                <div className={styles.restaurantStats}>
                  <div className={styles.ratingInfo}>
                    <div className={styles.rating}>
                      <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
                      <span>{r.rating}</span>
                    </div>
                    <span className={styles.ratingLabel}>Popularity</span>
                  </div>

                  <div className={styles.costInfo}>
                    <div className={styles.cost}>₹ {r.cost_for_two}</div>
                    <span className={styles.costLabel}>Cost for two</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;