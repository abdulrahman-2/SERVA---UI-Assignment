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

src/ – Main source code

assets/ – Static assets (images, icons)

components/ – Reusable components

common/icons/ – Icon components

layouts/vehicle/ – Vehicle-specific layout components

routes/vehicle/ – Vehicle page structure

left-row/ – Left column components

right-row/ – Right column components

VehicleTabs/page.jsx – Tab component

constant/ – App constants

hooks/ – Custom React hooks

store/ – Redux state management

utils/utils.jsx – Utility functions

App.jsx – Main app component

main.jsx – Entry point

public/ – Public assets (vite.svg)

Config & metadata:

package.json / package-lock.json – Dependencies

tailwind.config.js – Tailwind CSS setup

vite.config.js – Vite configuration

.gitignore – Ignored files

index.html – HTML template

README.md – Project documentation

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
