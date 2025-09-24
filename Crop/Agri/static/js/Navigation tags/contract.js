window.pages = window.pages || {};
window.pages['contract'] = `
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Poppins', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: url('https://res.cloudinary.com/dovax6xke/image/upload/f_auto,q_auto/v1/carrier/dur0tj29lobr4nlg7f0j') no-repeat center center/cover;
      color: #333;
    }

    header {
      background: rgba(46,125,50,0.8);
      backdrop-filter: blur(6px);
      padding: 1rem 2rem;
      text-align: center;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    header h1 { font-size: 1.8rem; margin: 0; }

    .container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }
    .card {
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
      transition: transform 0.2s;
    }
    .card:hover { transform: translateY(-5px); }
    .icon { font-size: 2rem; color: #2e7d32; margin-bottom: 1rem; }
    .card h2 { font-size: 1.3rem; color: #2e7d32; margin-bottom: 0.8rem; }
    .form-group { margin-bottom: 1rem; }
    label { font-weight: 600; display: block; margin-bottom: 0.4rem; }
    input {
      width: 100%;
      padding: 0.6rem;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 6px;
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(4px);
    }

    /* Checkbox list */
    .checkbox-list label {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0.8rem;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 8px;
      margin-bottom: 0.8rem;
      font-size: 1.05rem;
      cursor: pointer;
      background: rgba(255,255,255,0.6);
      backdrop-filter: blur(6px);
      transition: background 0.3s;
    }
    .checkbox-list input { width: 20px; height: 20px; cursor: pointer; }
    .checkbox-list label:hover { background: rgba(200,255,200,0.5); }

    button {
      background: rgba(46,125,50,0.9);
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 1.5rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }
    button:hover {
      background: rgba(27,94,32,0.95);
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(0,0,0,0.3);
    }

    /* Contract Page */
    :root { --label-width: 200px; --max-width: 820px; --accent: #2e7d32; }
    .doc-container {
      max-width: var(--max-width);
      margin: 28px auto;
      padding: 28px 36px;
      border-radius: 16px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(10px);
    }
    h2 { font-family: Georgia, "Times New Roman", serif; text-align: center; text-decoration: underline; margin: 0 0 18px 0; color: var(--accent); font-size: 22px; }
    .details { display: grid; grid-template-columns: var(--label-width) 1fr; column-gap: 24px; row-gap: 12px; align-items: start; margin-bottom: 18px; }
    .lbl { font-weight: 700; white-space: nowrap; }
    .val { word-break: break-word; }
    .row { display: grid; grid-template-columns: var(--label-width) 1fr; column-gap: 24px; margin-bottom: 18px; align-items: start; }
    .row .row-label { font-weight: 700; padding-top: 4px; white-space: nowrap; }
    .row ul { margin: 0; padding-left: 20px; }
    .row ul li { margin: 6px 0; }
    p.body-text { margin-top: 8px; margin-bottom: 26px; line-height: 1.6; text-align: left; }
    .signature { margin-top: 40px; text-align: right; font-style: italic; }
    .signature .line { display: inline-block; width: 260px; border-top: 1px solid #111; padding-top: 6px; }
    .actions { display:flex; justify-content:flex-end; margin-bottom:18px; }
    .btn { background: var(--accent); color: white; padding: 8px 14px; border-radius: 8px; border: none; cursor:pointer; font-weight:700; }
    .btn:hover { background: #1b5e20; }
    @media (max-width:720px){ .details, .row { grid-template-columns: 1fr; } .lbl, .row .row-label { white-space: normal; } .signature { text-align: left; } }

    /* Hide pages initially */
    #contractPage { display: none; }
  </style>

  <header>
    <h1>🌾 Farming Contract – IoT & Drone Services</h1>
    <h2 style="font-size:1.4rem; margin-top:6px; font-weight:500; color:white;">
     వ్యవసాయ ఒప్పందం – ఐఓటీ & డ్రోన్ సేవలు
  </h2>
  </header>

  <!-- Form Page -->
  <form id="formPage" class="container">
    <div class="grid">
      <!-- Farmer Details -->
      <div class="card">
        <i class="fas fa-user icon"></i>
        <h2>Farmer Details</h2>
        <div class="form-group">
          <label for="fname" align="left">Farmer Name</label>
          <input type="text" id="fname" name="name" required placeholder="Enter farmer name">
        </div>
        <div class="form-group">
          <label for="village" align="left">Village</label>
          <input type="text" id="village" name="village" required placeholder="Enter village name">
        </div>
        <div class="form-group">
          <label for="contact" align="left">Contact Number</label>
          <input type="tel" id="contact" name="contact" required placeholder="Enter contact number">
        </div>
      </div>

      <!-- IoT Devices -->
      <div class="card">
        <i class="fas fa-microchip icon"></i>
        <h2>IoT Devices</h2>
        <div class="checkbox-list">
          <label><input type="checkbox" name="iot" value="Soil Moisture Sensor 🌱"> Soil Moisture Sensor 🌱</label>
          <label><input type="checkbox" name="iot" value="Temperature Sensor 🌡"> Temperature Sensor 🌡</label>
          <label><input type="checkbox" name="iot" value="Water Pump Controller 💧"> Water Pump Controller 💧</label>
          <label><input type="checkbox" name="iot" value="pH Sensor 🌍"> pH Sensor 🌍</label>
        </div>
      </div>

      <!-- Drone Services -->
      <div class="card">
        <i class="fas fa-helicopter icon"></i>
        <h2>Drone Services</h2>
        <div class="checkbox-list">
          <label><input type="checkbox" name="drone" value="Seed Planting / Aerial Seeding 🌱"> Seed Planting / Aerial Seeding 🌱</label>
          <label><input type="checkbox" name="drone" value="Soil and Field Analysis 🌍"> Soil and Field Analysis 🌍</label>
          <label><input type="checkbox" name="drone" value="Thermal / Infrared Mapping 🌡"> Thermal / Infrared Mapping 🌡</label>
          <label><input type="checkbox" name="drone" value="Livestock Monitoring 🐄"> Livestock Monitoring 🐄</label>
          <label><input type="checkbox" name="drone" value="Fertilizer Spraying / Spilling 💧"> Fertilizer Spraying / Spilling 💧</label>
        </div>
      </div>
    </div>
    <button type="submit">Submit Contract</button>
  </form>

  <!-- Contract Page -->
  <div id="contractPage" class="doc-container">
    <div class="actions">
      <button class="btn" onclick="window.print()">Print Contract</button>
    </div>
    <h2>Farming Contract Agreement</h2>

    <div class="details">
      <div class="lbl">Farmer Name:</div>
      <div id="farmerName" class="val"></div>
      <div class="lbl">Village:</div>
      <div id="farmerVillage" class="val"></div>
      <div class="lbl">Contact:</div>
      <div id="farmerContact" class="val"></div>
    </div>

    <div class="row">
      <div class="row-label">IoT Devices Selected:</div>
      <div><ul id="iotList"></ul></div>
    </div>

    <div class="row">
      <div class="row-label">Drone Services Selected:</div>
      <div><ul id="droneList"></ul></div>
    </div>

    <p class="body-text">
      This contract confirms that the farmer has chosen the above IoT devices and drone services for farming assistance.
      The selected technologies will be provided and maintained according to the terms agreed upon with the service provider.
    </p>

    <div class="signature">
      <div class="line">Farmer Signature</div>
    </div>
  </div>
            `;