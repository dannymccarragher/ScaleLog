# ⚖️ ScaleLog

**ScaleLog** is a modern full-stack weight tracking application that helps users visualize their fitness progress with beautiful charts and simple logging. Designed to be **responsive**, **intuitive**, and **clean**, this app lets you stay on top of your goals with ease.

## 🚀 Features

- 📆 **Log weights** by date and view them in a sortable table
- 📈 **Visualize trends** with a dynamic line chart powered by Chart.js
- 💾 **Data stored persistently** using MySQL
- 🎨 **Clean, responsive UI** with custom CSS styling
- 📊 **Grid-based layout** that stacks nicely across all screen sizes

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Styling | Charting |
|----------|---------|----------|---------|----------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) | ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge) | ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) | ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge) | ![Chart.js](https://img.shields.io/badge/-Chart.js-FF6384?logo=chartdotjs&logoColor=white&style=for-the-badge) |

---

## ⚙️ Getting Started

### 1. Clone the Repo
git clone https://github.com/dannymccarragher/scalelog.git

cd scalelog

2. Install Dependencies

npm install

3. Configure Database

Ensure MySQL is running locally or hosted.

Create the weight_entries table:

CREATE TABLE weight_entries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  weight DECIMAL(5,2) NOT NULL,
  date DATE NOT NULL,
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

4. Add .env File (if needed)

DATABASE_URL=mysql://user:password@localhost:3306/scalelog

PORT=5000

5. Run the Development Server
npm run dev



