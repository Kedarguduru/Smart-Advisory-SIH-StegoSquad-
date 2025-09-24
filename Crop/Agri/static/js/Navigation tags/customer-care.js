window.pages = window.pages || {};
window.pages['customer-care'] = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crop Connect - Customer Care</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background: url('https://res.cloudinary.com/dovax6xke/image/upload/f_auto,q_auto/v1/carrier/dur0tj29lobr4nlg7f0j') no-repeat center center/cover;
      color: #1b5e20;
    }

    .header {
      background: linear-gradient(135deg, rgba(0, 128, 0, 0.8), rgba(34, 139, 34, 0.7));
      backdrop-filter: blur(8px);
      color: white;
      padding: 30px 20px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }
    .header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
    }
    .header p {
      margin-top: 8px;
      font-size: 1rem;
      font-weight: 400;
    }

    .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
      gap: 30px;
    }

    /* Glassy box */
    .contact-box {
      background: rgba(255, 255, 255, 0.6);
      padding: 25px;
      border-radius: 16px;
      backdrop-filter: blur(14px);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
      width: 90%;
      max-width: 800px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .contact-box:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 30px rgba(0, 128, 0, 0.4);
    }

    .contact-box h3 {
      color: #145214;
      text-align: center;
      margin-bottom: 20px;
      font-weight: 600;
    }

    /* Team section */
    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    .team-member {
      flex: 1 1 150px;
      max-width: 180px;
      text-align: center;
      background: rgba(255,255,255,0.5);
      border-radius: 12px;
      padding: 15px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255,255,255,0.4);
    }
    .team-member:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 16px rgba(0, 128, 0, 0.3);
    }
    .team-member img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #1b5e20;
    }
    .team-member p {
      margin-top: 10px;
      font-weight: 600;
      color: #1b5e20;
    }

    /* Form */
    .form-group {
      width: 100%;
      margin-bottom: 15px;
    }
    .form-group label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid rgba(0,0,0,0.2);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.7);
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      border-color: #2e7d32;
      box-shadow: 0 0 8px rgba(46,125,50,0.5);
      outline: none;
      background: rgba(255, 255, 255, 0.9);
    }
    .form-group textarea {
      height: 120px;
    }

    /* Buttons */
    .btn, .submit-btn {
      background: linear-gradient(135deg, #2e7d32, #1b5e20);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s ease;
    }
    .btn:hover, .submit-btn:hover {
      background: linear-gradient(135deg, #43a047, #2e7d32);
      transform: scale(1.05);
      box-shadow: 0 4px 14px rgba(34, 139, 34, 0.4);
    }

    /* WhatsApp floating button */
    .whatsapp-btn {
      background: #25D366;
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 14px;
      border-radius: 50%;
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
      animation: float 3s infinite ease-in-out;
    }
    .whatsapp-btn:hover {
      transform: scale(1.1);
    }
    .whatsapp-btn img {
      width: 32px;
      height: 32px;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }

    /* Footer */
    .footer {
      text-align: center;
      padding: 15px;
      background: rgba(0, 128, 0, 0.8);
      color: white;
      font-size: 0.9rem;
    }
  </style>
</head>

<body>
  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/918500112747" class="whatsapp-btn" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
  </a>

  <div class="header">
    <h1>🌾 Crop-Connect Customer Care</h1>
    <p>మీ సేవలో మా సిబ్బంది ఎల్లప్పుడూ సిద్ధంగా ఉన్నారు</p>
  </div>

  <div class="main-container">
    <!-- Team -->
    <div class="contact-box">
      <h3>Our Team</h3>
      <div class="team">
        <div class="team-member"><img src="https://via.placeholder.com/150" alt=""><p>K.LALITH</p></div>
        <div class="team-member"><img src="https://via.placeholder.com/150" alt=""><p>G.KEDAR</p></div>
        <div class="team-member"><img src="https://via.placeholder.com/150" alt=""><p>Y.BHANU</p></div>
        <div class="team-member"><img src="https://via.placeholder.com/150" alt=""><p>K.PAVITHRA</p></div>
        <div class="team-member"><img src="https://via.placeholder.com/150" alt=""><p>K.MAHITHA</p></div>
        <div class="team-member"><img src="https://via.placeholder.com/150" alt=""><p>K.PRIYANKA</p></div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="contact-box">
      <h3>Contact Form</h3>
      <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div class="form-group">
          <label for="name" align="left">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email" align="left">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message" align="left">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>

    <!-- Contact Info -->
    <div class="contact-box">
      <h3>Contact Us</h3>
      <p><strong>Phone:</strong> +91 9440151948</p>
      <p><strong>Email:</strong> cropconnectofficial@gmail.com</p>
      <p><strong>Address:</strong> Hyderabad, Telangana</p>
      <a href="mailto:gudurukedar20@gmail.com" class="btn">Email Us</a>
      <a href="tel:+91 9440151948" class="btn">Call Us</a>
    </div>
  </div>
  <script>
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          alert('Message sent successfully!');
          this.reset();
        } else {
          throw new Error('Failed to send message');
        }
      }).catch(error => {
        alert('Error: ' + error.message);
      });
    });
  </script>
</body>
</html>

            `;