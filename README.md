# SunVision Solar Monitoring Web App

**SunVision** is a modern web application for monitoring and comparing data from solar power systems. It provides real-time tracking, filtering, and reference data, as well as a comparison dashboard for easy analysis.

## Features

- **Dashboard Home:** Quick access to all system pages.
- **Tracking Page:** View live panel, tank, and power data. Control the pump with a slider.
- **Filter Page:** Monitor filter-specific temperatures and electrical data.
- **Reference Page:** See reference system data for comparison.
- **Comparison Page:** Compare key parameters from all systems side by side in a responsive table.
- **Live Date & Time:** Always visible at the top of every page.
- **Modern UI:** Clean, responsive design with a custom color palette.
- **Navigation:** Fixed header with logo and page titles for easy navigation.

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Design:** Responsive layout, CSS Grid/Flexbox, custom color palette
- **API Integration:** Fetches live data from backend APIs (replace with your endpoints)

## Folder Structure

```
modern-web-app/
├── public/
│   ├── images/
│   │   └── logo.png
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   ├── tracking.js
│   │   ├── filter.js
│   │   ├── reference.js
│   │   └── comparison.js
│   ├── index.html
│   ├── tracking.html
│   ├── filter.html
│   ├── reference.html
│   └── comparison.html
└── README.md
```

## Setup & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/sunvision-solar-webapp.git
   cd sunvision-solar-webapp/public
   ```

2. **Open `index.html` in your browser.**

3. **API Endpoints:**  
   Update the API URLs in the JS files in `/scripts/` to match your backend endpoints.

4. **Customize:**  
   - Replace `logo.png` in `/images/` with your own logo if desired.
   - Adjust color palette in `/styles/main.css` as needed.

## Screenshots

> _Add screenshots of your dashboard, tracking, filter, reference, and comparison pages here._

## License

This project is licensed under the MIT License.

---

**SunVision** – Go Solar .. Go Green 🌞
