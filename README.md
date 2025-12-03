# SERVA Frontend UI Assignment

This project is a frontend implementation of the **Vehicle Details Page** from the Figma design provided by SERVA. It focuses on a clean, reusable component structure and responsive UI using React and Tailwind CSS.

---

## Live Demo
[https://serva-ui-assignment.vercel.app/](https://serva-ui-assignment.vercel.app/)

---

## Features
- Fully responsive layout
- Reusable React components
- Tailwind CSS for styling
- Tabs with active state handling
- KPI cards, Income & Expenses chart (Recharts)
- Vehicle Information, Registration, Insurance, Ownership cards
- Hover effects and responsive typography
- Two-column layout with left/right sections

---

## Tech Stack
- **React** (v19.2.0)  
- **Vite** (v7.2.4)  
- **Tailwind CSS** (v4.1.17)  
- **Recharts** (v3.5.1)  
- **Redux Toolkit** (v2.5.0)  
- **React Icons**  
- **clsx & tailwind-merge** for className handling

---

## Project Structure

├── node_modules/          (standard dependency folder, not expanded)
├── public/
│   └── vite.svg           (icon file)
├── src/
│   ├── assets/            (folder for static assets, not expanded)
│   ├── components/
│   │   ├── common/
│   │   │   └── icons/     (subfolder for icon components, not expanded)
│   │   ├── layouts/
│   │   │   └── vehicle/   (subfolder for vehicle-specific layouts, not expanded)
│   │   ├── routes/
│   │   │   └── vehicle/
│   │   │       ├── left-row/      (subfolder)
│   │   │       ├── right-row/     (subfolder)
│   │   │       └── VehicleTabs/
│   │   │           └── page.jsx   (file: likely a React component for tabs)
│   │   └── constant/     (folder for constants, not expanded)
│   ├── hooks/            (folder for custom React hooks, not expanded)
│   ├── store/            (folder for state management, e.g., Redux, not expanded)
│   ├── utils/
│   │   └── utils.jsx     (utility functions file)
│   ├── App.jsx           (main app component)
│   ├── App.css           (app styles)
│   └── main.jsx          (entry point)
├── .gitignore            (Git ignore file)
├── index.html            (HTML template)
├── package-lock.json     (dependency lockfile)
├── package.json          (project manifest)
├── README.md             (project documentation)
├── tailwind.config.js    (Tailwind CSS configuration)
└── vite.config.js        (Vite build tool configuration)

**Notes on decisions:**
- **Styling:** Tailwind CSS for fast prototyping and responsive design.  
- **Charts:** Recharts library for clean and customizable chart components.  
- **State Management:** Redux Toolkit used for tabs and any state that could expand.  
- **Responsiveness:** Mobile-first design with breakpoints for tablets and desktops.  
- **Reusability:** Components structured to be reusable across pages.

---

## Installation & Running Locally

1. Clone the repository:
```bash
git clone https://github.com/abdulrahman-2/SERVA---UI-Assignment.git

Install dependencies:
npm install

Run the development server:
npm run dev

Open your browser at:
http://localhost:5173
