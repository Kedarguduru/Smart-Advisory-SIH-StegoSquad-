window.pages = window.pages || {};
window.pages['schemes'] = `

  <style>

    body {
    font-family: 'Poppins', sans-serif;
    background: url('https://res.cloudinary.com/dovax6xke/image/upload/f_auto,q_auto/v1/carrier/dur0tj29lobr4nlg7f0j') no-repeat center center/cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

    header {
      background: #1b5e20;
      color: white;
      text-align: center;
      padding: 1.2rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    header h1 {
      margin: 0;
      font-size: 1.8rem;
    }
    header p {
      margin: 0.3rem 0 0;
      font-size: 1rem;
      font-weight: 400;
    }

    .tabs {
      display: flex;
      justify-content: center;
      margin: 2rem 0 1rem;
      gap: 1rem;
    }
    .tab-button {
      padding: 0.6rem 1.2rem;
      background: #2e7d32;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s;
    }
    .tab-button.active {
      background: #1b5e20;
    }

    section {
      max-width: 1300px;
      margin: 0 auto 2rem;
      padding: 0 1rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

    .icon {
      font-size: 2rem;
      color: #1b5e20;
      margin-bottom: 0.8rem;
    }

    .card h2 {
      font-size: 1.2rem;
      color: #2e7d32;
      margin-bottom: 0.5rem;
    }

    .card p {
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .card a {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: #2e7d32;
      color: white;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: background 0.3s ease;
    }
    .card a:hover {
      background: #1b5e20;
    }

    .hidden { display: none; }

    footer {
            width: 100%;
            padding: 10px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            text-align: center;
            color: white;
            box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);
        }
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 10px;
            font-size: 0.9em;
        }
        .footer-links a {
            text-decoration: none;
            color: black;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        .footer-links a:hover {
            color: white;
        }
  </style>

  <header>
    <h1>🌾 Agriculture Portals</h1>
    <p>Official PSU & Private Bank agriculture loan portals and AP Farmer Schemes</p>
  </header>

  <!-- Tabs -->
  <div class="tabs">
    <button class="tab-button active" onclick="showTab('loans', this)">Loans</button>
    <button class="tab-button" onclick="showTab('schemes', this)">Schemes</button>
  </div>

  <!-- Loans Section -->
  <section id="loans">
    <div class="grid">
      <!-- Loan cards with unique icons -->
      <div class="card">
        <i class="fas fa-landmark icon"></i>
        <h2>SBI Kisan Credit Card</h2>
        <p>Crop loans and working capital support for farmers. Apply and manage via SBI’s official agriculture banking portal.</p>
        <a href="https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card" target="_blank">Visit SBI KCC</a>
      </div>
      <div class="card">
        <i class="fas fa-hand-holding-dollar icon"></i>
        <h2>PNB Agriculture Credit Schemes</h2>
        <p>Punjab National Bank’s verified agriculture loan portal. Includes KCC, crop loans, gold loans, and allied agri financing.</p>
        <a href="https://pnb.bank.in/agriculture-credit-schemes.html" target="_blank">Visit PNB Agriculture</a>
      </div>
      <div class="card">
        <i class="fas fa-building-columns icon"></i>
        <h2>Bank of Baroda – Agriculture</h2>
        <p>Credit for crop cultivation, farm mechanization, irrigation, and rural development projects.</p>
        <a href="https://www.bankofbaroda.in/agriculture-banking" target="_blank">Visit BOB Agriculture</a>
      </div>
      <div class="card">
        <i class="fas fa-money-bill-trend-up icon"></i>
        <h2>Canara Bank – Agri Loans</h2>
        <p>Canara Bank provides Kisan Credit Cards, crop loans, equipment financing, and allied activity loans.</p>
        <a href="https://canarabank.com/User_page.aspx?othlink=229" target="_blank">Visit Canara Agriculture</a>
      </div>
      <div class="card">
        <i class="fas fa-seedling icon"></i>
        <h2>NABARD Schemes</h2>
        <p>National Bank for Agriculture & Rural Development supports refinance, subsidies, and farmer development schemes.</p>
        <a href="https://www.nabard.org" target="_blank">Visit NABARD</a>
      </div>
      <div class="card">
        <i class="fas fa-briefcase icon"></i>
        <h2>HDFC Bank – Agriculture Loans</h2>
        <p>HDFC Bank provides loans for crop cultivation, dairy, poultry, fisheries, and agri equipment financing.</p>
        <a href="https://www.hdfcbank.com/personal/borrow/popular-loans/agriculture-loans" target="_blank">Visit HDFC Agri</a>
      </div>
      <div class="card">
        <i class="fas fa-wallet icon"></i>
        <h2>ICICI Bank – Agri & Rural Loans</h2>
        <p>ICICI Bank offers loans for farmers, rural households, farm mechanization, and allied agriculture projects.</p>
        <a href="https://www.icicibank.com/Personal-Banking/loans/farmer-finance/index.page" target="_blank">Visit ICICI Agri</a>
      </div>
      <div class="card">
        <i class="fas fa-coins icon"></i>
        <h2>Union Bank of India – Agriculture</h2>
        <p>Union Bank supports farmers through crop loans, allied activities, farm development, and rural financing.</p>
        <a href="https://www.unionbankofindia.co.in/english/agriculture.aspx" target="_blank">Visit Union Bank Agri</a>
      </div>
      <div class="card">
        <i class="fas fa-landmark icon"></i>
        <h2>IDBI Bank – Agriculture Finance</h2>
        <p>IDBI Bank provides loans for crop cultivation, dairy, poultry, tractors, and rural infrastructure.</p>
        <a href="https://www.idbibank.in/agriculture-financing.aspx" target="_blank">Visit IDBI Agri</a>
      </div>
      <div class="card">
        <i class="fas fa-hand-holding-hand icon"></i>
        <h2>Indian Bank – Agri Loans</h2>
        <p>Indian Bank provides crop loans, gold loans for agriculture, and schemes for allied activities.</p>
        <a href="https://www.indianbank.in/departments/agriculture-loans/" target="_blank">Visit Indian Bank Agri</a>
      </div>
      <div class="card">
        <i class="fas fa-chart-line icon"></i>
        <h2>Central Bank of India – Agriculture</h2>
        <p>Crop loans, KCC, irrigation, farm mechanization, and rural development projects.</p>
        <a href="https://www.centralbankofindia.co.in/en/content/agriculture-finance" target="_blank">Visit CBI Agri</a>
      </div>
      <div class="card">
        <i class="fas fa-money-check-dollar icon"></i>
        <h2>Axis Bank – Agriculture Loans</h2>
        <p>Axis Bank offers Kisan Credit Cards, crop loans, dairy, poultry, fisheries, and farm equipment loans.</p>
        <a href="https://www.axisbank.com/retail/loans/agriculture-loan/features-benefits" target="_blank">Visit Axis Agri</a>
      </div>
    </div>
  </section>

  <!-- Schemes Section -->
  <section id="schemes" class="hidden">
    <div class="grid">
      <!-- Scheme cards -->
      <div class="card">
        <i class="fas fa-hand-holding-dollar icon"></i>
        <h2>PM-KISAN Scheme</h2>
        <p>Direct cash transfers (@ ₹6,000/year) for all landholding farmers. Scheduled 20th instalment released 2 Aug 2025.</p>
        <a href="https://pmkisan.gov.in" target="_blank">Visit pmkisan.gov.in</a>
      </div>
      <div class="card">
        <i class="fas fa-tractor icon"></i>
        <h2>Agricultural Machinery Subsidy</h2>
        <p>Online portal offering procurement subsidies to farmers (e.g., custom hiring, equipment banks).</p>
        <a href="https://agrimachinery.nic.in" target="_blank">Visit agrimachinery.nic.in</a>
      </div>
      <div class="card">
        <i class="fas fa-seedling icon"></i>
        <h2>AP Horticulture Subsidies</h2>
        <p>Official horticulture department portal for Andhra Pradesh Schemes (plantation, protected cultivation, RKVY, MIDH).</p>
        <a href="https://horticulture.ap.nic.in" target="_blank">Visit horticulture.ap.nic.in</a>
      </div>
    </div>
  </section>
            `;