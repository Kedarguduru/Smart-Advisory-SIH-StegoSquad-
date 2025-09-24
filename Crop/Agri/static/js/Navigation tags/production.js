window.pages = window.pages || {};
window.pages['production'] = `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crop Connect - Production Process</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: url('https://res.cloudinary.com/dovax6xke/image/upload/f_auto,q_auto/v1/carrier/dur0tj29lobr4nlg7f0j') no-repeat center center/cover;
            color: green;
        }
        .header {
            background: rgba(0, 128, 0, 0.75);
            backdrop-filter: blur(6px);
            color: white;
            padding: 20px;
            text-align: center;
        }
        .main-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            gap: 20px;
            padding: 20px;
        }
        .process-box {
            background: rgba(255,255,255,0.4);
            padding: 20px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            width: 80%;
            max-width: 700px;
            border: 1px solid rgba(255,255,255,0.3);
        }
        .process-box h3 {
            color: green;
            text-align: center;
        }
        .stages {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .stage {
            background: rgba(255, 255, 255, 0.40);
            border-radius: 10px;
            padding: 18px;
            box-shadow: 0 2px 8px rgba(0,128,0,0.08);
            display: flex;
            align-items: center;
            gap: 18px;
        }
        .stage img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
            border: 2.5px solid green;
        }
        .stage-details {
            flex: 1;
        }
        .stage-title {
            font-weight: bold;
            font-size: 1.1em;
            color: green;
        }
        /* Buttons - reuse glassy button styles */
        .btn {
            background: rgba(42, 82, 152, 0.7);
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(6px);
            border: 1px solid rgba(255,255,255,0.3);
            text-decoration: none;
            display: inline-block;
        }
        .btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.3);
            transition: all 0.4s ease;
            transform: skewX(-45deg);
        }
        .btn:hover::before {
            left: 100%;
        }
        .btn:hover {
            background: rgba(30,60,114,0.85);
            box-shadow: 0 0 20px rgba(42,82,152,0.6);
            transform: scale(1.05);
        }
        .footer {
            text-align: center;
            padding: 10px;
            background: rgba(0, 128, 0, 0.75);
            backdrop-filter: blur(6px);
            color: white;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Crop Connect Production Process</h1>
        <p>Witness how crops flourish through each stage of growth</p>
    </div>
    <div class="main-container">
        <div class="process-box">
            <h3 align="center">How the Crop Develops</h3>
            <div class="stages">
                <div class="stage">
                    <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=90&q=80" alt="Seed Stage">
                    <div class="stage-details">
                        <div class="stage-title">1. Seed Selection & Sowing</div>
                        <div>High-quality seeds are selected and sown in fertile soil, ensuring healthy germination.</div>
                    </div>
                </div>
                <div class="stage">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=90&q=80" alt="Sprout Stage">
                    <div class="stage-details">
                        <div class="stage-title">2. Germination</div>
                        <div>Crops begin to sprout, with roots anchoring into the soil and shoots reaching for sunlight.</div>
                    </div>
                </div>
                <div class="stage">
                    <img src="https://images.unsplash.com/photo-1444395341179-39c1948d6762?auto=format&fit=crop&w=90&q=80" alt="Growth Stage">
                    <div class="stage-details">
                        <div class="stage-title">3. Vegetative Growth</div>
                        <div>Robust stems and leaves develop rapidly, supported by regular irrigation and nutrient application.</div>
                    </div>
                </div>
                <div class="stage">
                    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=90&q=80" alt="Flowering Stage">
                    <div class="stage-details">
                        <div class="stage-title">4. Flowering & Pollination</div>
                        <div>Plants flower, attracting pollinators and beginning the process of fruit or grain formation.</div>
                    </div>
                </div>
                <div class="stage">
                    <img src="https://images.unsplash.com/photo-1455252940874-6dcff7c296af?auto=format&fit=crop&w=90&q=80" alt="Fruiting Stage">
                    <div class="stage-details">
                        <div class="stage-title">5. Maturation & Harvest</div>
                        <div>Crops mature fully, ready for harvest and distribution through Crop Connect’s platforms.</div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#contact" class="btn">Contact Our Experts</a>
    </div>
</body>
</html>

     `;