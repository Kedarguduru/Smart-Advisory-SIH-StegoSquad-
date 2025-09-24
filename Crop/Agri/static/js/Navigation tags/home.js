window.pages = window.pages || {};
window.pages['home'] = `
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: url('https://res.cloudinary.com/dovax6xke/image/upload/f_auto,q_auto/v1/carrier/dur0tj29lobr4nlg7f0j') no-repeat center center/cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: #222;
  }
  /* Marquee Section */
  .market-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    background: rgba(0,128,0,0.6);
    backdrop-filter: blur(8px);
    padding: 8px 15px;
    margin-top: 40px; /* just below navbar */
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  .market-info {
    padding: 5px 15px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    min-width: 120px;
  }
  .market-info small {
    display: block;
    font-weight: normal;
    margin-top: 2px;
    font-size: 12px;
    color: #555;
  }
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    flex: 1;
    background: transparent;
  }
  .marquee__inner {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 100s linear infinite;
  }
  .marquee:hover .marquee__inner {
    animation-play-state: paused;
  }
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  .item {
    margin: 0 15px;
    font-size: 14px;
  }
  .item b { color: #333; }
  .item span.type { color: green; }
  .item span.max { color: blue; font-weight: bold; }
  .item span.min { color: brown; font-weight: bold; }

  /* Main Content */
  .content-area {
    margin-top: 60px; /* pushed down after marquee */
    padding: 20px;
    text-align: center;
  }
  .content-area h1 {
    font-size: 2.2rem;
    color: #2c3e50;
    margin-bottom: 15px;
  }
  .content-area p {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
  }

  /* Checkbox Section */
  .list-group {
    margin: 20px auto;
    text-align: left;
    max-width: 400px;
    background: rgba(255,255,255,0.6);
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  .list-group-item {
    display: flex;
    align-items: center;
    padding: 8px 0;
    font-weight: 500;
    color: #2c3e50;
  }
  .form-check-input {
    margin-right: 10px;
    cursor: pointer;
  }

  /* Cards Section */
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin-top: 30px;
  }
  .card {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
    flex: 1 1 280px;
    min-width: 280px;
    max-width: 320px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }
  .card h2 {
    font-size: 1.3rem;
    margin: 10px 0;
    color: #27ae60;
  }
  .card p {
    font-size: 0.95rem;
    margin-bottom: 15px;
  }
  .card a {
    display: inline-block;
    padding: 8px 16px;
    background: #27ae60;
    color: white;
    text-decoration: none;
    border-radius: 20px;
    transition: background 0.3s ease;
  }
  .card a:hover {
    background: #1e8449;
  }
  .card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
</style>
<div class="market-wrapper">
  <div class="market-info">
    TODAY MARKET
    <small>13 Sep 2025</small>
  </div>
  <div class="marquee">
    <div class="marquee__inner">
      Rice : Masuri Max Price: 3400 Min Price: 3300 | Apple : Delicious Max Price: 1600 Min Price: 1500 | Banana : Red Banana Max Price: 4500 Min Price: 4000 | Onion : Bellary Max Price: 3000 Min Price: 2500 | Tomato : Hybrid Max Price: 3600 Min Price: 2100 | Garlic : Garlic Max Price: 7700 Min Price: 5400 | Mango : Raw-Ripe Max Price: 8000 Min Price: 8000 | Coconut : Max Price: 8000 Min Price: 7000 | Green Chilli : Max Price: 7500 Min Price: 2300 ...
    </div>
  </div>
</div>

<!-- CONTENT -->
<div class="content-area">
  <h1>Welcome to My Web Page</h1>
  <p>
    On this page, you will discover a new way of crop farming.
    Let us know how you found this site by selecting the appropriate boxes below:
  </p>

  <div class="list-group">
    <label class="form-label">Please select an option:</label>
    <label class="list-group-item">
      <input class="form-check-input" type="checkbox" value="farmer" /> Farmer
    </label>
    <label class="list-group-item">
      <input class="form-check-input" type="checkbox" value="social media" /> Social Media
    </label>
    <label class="list-group-item">
      <input class="form-check-input" type="checkbox" value="friend" /> Friend
    </label>
    <label class="list-group-item">
      <input class="form-check-input" type="checkbox" value="other" /> Other
    </label>
  </div>

  <div class="grid">
    <div class="card">
      <i class="fas fa-hand-holding-dollar icon"></i>
      <h2>Agri Market</h2>
      <p>PM-KISAN is a Central Sector Scheme launched in February 2019 to supplement the financial needs of landholding farmers.</p>
      <a href="https://agmarknet.gov.in/" target="_blank">Visit pmkisan.gov.in</a>
    </div>
  </div>

  <p>If you want to know more about crop farming, please click the button below.</p>
  <p>This site is designed for general use and to inspire your theoretical thinking.</p>
</div>
`;
