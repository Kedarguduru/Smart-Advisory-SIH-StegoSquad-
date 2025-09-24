window.pages = window.pages || {};
window.pages['protect'] = `
<div class="main-container">
  <div class="header text-center mb-4">
    <h2><i class="fas fa-seedling"></i> Smart Crop Price Search</h2>
    <p>Track real-time crop prices across India</p>
  </div>

  <!-- Form -->
  <div class="mb-3">
    <label for="cropSelect" class="form-label"><i class="fas fa-leaf"></i> Select Crop</label>
    <select class="form-select" id="cropSelect" required>
      <option value="">Choose a crop...</option>
      <option value="Wheat">Wheat</option>
      <option value="Rice">Rice</option>
      <option value="Maize">Maize</option>
      <option value="Pulses">Pulses</option>
      <option value="Cotton">Cotton</option>
      <option value="Sugarcane">Sugarcane</option>
      <option value="Groundnut">Groundnut</option>
      <option value="Soybean">Soybean</option>
      <option value="Mustard">Mustard</option>
      <option value="Barley">Barley</option>
      <option value="Chillies">Chillies</option>
      <option value="Onion">Onion</option>
      <option value="Potato">Potato</option>
      <option value="Tomato">Tomato</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="stateSelect" class="form-label"><i class="fas fa-map-marker-alt"></i> Select State</label>
    <select class="form-select" id="stateSelect">
      <option value="">All States</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Telangana">Telangana</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Kerala">Kerala</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Punjab">Punjab</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="West Bengal">West Bengal</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="marketSelect" class="form-label"><i class="fas fa-store"></i> Select Market</label>
    <select class="form-select" id="marketSelect">
      <option value="">All Markets</option>
    </select>
  </div>

  <div class="text-center">
    <button class="btn-search" onclick="searchPrices()"><i class="fas fa-search"></i> Search Prices</button>
  </div>

  <!-- Stats cards -->
  <div id="statsRow" class="row g-3 mt-4"></div>

  <div id="priceResults" class="mt-4"></div>
</div>

<script>
  const marketsData = {
    "Andhra Pradesh": ["Guntur Mandi", "Vijayawada Wholesale", "Kurnool Market Yard"],
    "Telangana": ["Hyderabad Bowenpally", "Warangal Enumamula", "Nizamabad Mandi"],
    "Karnataka": ["Bengaluru Yeshwanthpur", "Mysuru APMC", "Hubli Market"],
    "Maharashtra": ["Mumbai Vashi Market", "Pune Gultekdi", "Nagpur Kalamna"],
    "Tamil Nadu": ["Chennai Koyambedu", "Coimbatore Market", "Madurai Mattuthavani"],
    "Kerala": ["Ernakulam Market", "Kozhikode Vengeri"],
    "Gujarat": ["Ahmedabad Jamalpur", "Surat Varachha", "Rajkot APMC"],
    "Punjab": ["Ludhiana Grain Market", "Amritsar Wholesale"],
    "Uttar Pradesh": ["Lucknow Chowk Market", "Kanpur Kidwai Nagar"],
    "West Bengal": ["Kolkata Posta Bazar", "Siliguri Regulated Market"]
  };

  const stateSelect = document.getElementById('stateSelect');
  const marketSelect = document.getElementById('marketSelect');

  stateSelect.addEventListener('change', handleStateChange);

  function handleStateChange() {
    const state = stateSelect.value;
    if (!state || !marketsData[state]) {
      marketSelect.innerHTML = '<option value="">All Markets</option>';
      return;
    }
    marketSelect.innerHTML = '<option value="">All Markets</option>';
    marketsData[state].forEach(market => {
      const option = document.createElement('option');
      option.value = market;
      option.textContent = market;
      marketSelect.appendChild(option);
    });
  }

  function searchPrices() {
    const crop = document.getElementById('cropSelect').value;
    const state = stateSelect.value;
    const market = marketSelect.value;

    let data = [];
    if (state && marketsData[state]) {
      const markets = market ? [market] : marketsData[state];
      markets.forEach(m => {
        data.push({
          Market: m,
          min: 1500 + Math.floor(Math.random() * 200),
          max: 2000 + Math.floor(Math.random() * 200),
          modal: 1800 + Math.floor(Math.random() * 200),
          Date: new Date().toISOString().split('T')[0]
        });
      });
    } else {
      Object.values(marketsData).flat().forEach(m => {
        data.push({
          Market: m,
          min: 1500 + Math.floor(Math.random() * 200),
          max: 2000 + Math.floor(Math.random() * 200),
          modal: 1800 + Math.floor(Math.random() * 200),
          Date: new Date().toISOString().split('T')[0]
        });
      });
    }

    // compute stats
    const totalMarkets = data.length;
    const highest = Math.max(...data.map(d=>d.max));
    const lowest = Math.min(...data.map(d=>d.min));
    const average = Math.round(data.reduce((s,d)=>s+d.modal,0)/data.length);

    // show cards
    document.getElementById('statsRow').innerHTML = `
      <div class="col-md-3 col-6"><div class="stats-card"><h4>${totalMarkets}</h4><p>Total Markets</p></div></div>
      <div class="col-md-3 col-6"><div class="stats-card"><h4>₹${highest}</h4><p>Highest Price</p></div></div>
      <div class="col-md-3 col-6"><div class="stats-card"><h4>₹${lowest}</h4><p>Lowest Price</p></div></div>
      <div class="col-md-3 col-6"><div class="stats-card"><h4>₹${average}</h4><p>Average Price</p></div></div>
    `;

    // render table
    let html = \`<div class="section-title mt-4">Price Data for \${crop || 'All Crops'} \${state ? 'in '+state : ''}</div>\`;
    html += \`<div class="table-responsive"><table class="table table-bordered table-hover mb-0">
             <thead>
             <tr><th>Market Name</th><th>Min Price (₹/quintal)</th><th>Max Price (₹/quintal)</th><th>Modal Price (₹/quintal)</th><th>Date</th></tr>
           </thead><tbody>\`;
    data.forEach(item => {
      html += \`<tr>
        <td class="fw-bold">\${item.Market}</td>
        <td class="price-cell">₹\${item.min}</td>
        <td class="price-cell">₹\${item.max}</td>
        <td class="price-cell">₹\${item.modal}</td>
        <td>\${new Date(item.Date).toLocaleDateString('en-IN')}</td>
      </tr>\`;
    });
    html += '</tbody></table></div>';
    document.getElementById('priceResults').innerHTML = html;
  }
</script>
`;
