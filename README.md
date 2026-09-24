# 🚀 Development Technologies Stack Management App

A modern and responsive **Development Technologies Stack Management App** built with React. This application helps users explore and manage different development technologies and organize them by technology stack in a clean and user-friendly interface.

## ✨ Features

* 🧩 **Technology Stack Management** — View and organize different development technologies such as frontend, backend, database, tools, and more.
* 🔔 **Toast Notifications** — Provides instant feedback when users perform actions using React Toast.
* 📱 **Responsive & Modern UI** — Built with Tailwind CSS to provide a clean interface that works across mobile, tablet, and desktop devices.

## 🛠️ Technologies Used

* ⚛️ **React** — Building reusable UI components
* 🎨 **Tailwind CSS** — Styling and responsive layouts
* 🔔 **React Toast** — Displaying user notifications
* 🎯 **Lucide React** — Providing modern UI icons
* ⏳ **React Suspense** — Handling loading states while data is being loaded
* 📜 **JavaScript / JSX** — Application logic and UI development
* 📄 **JSON** — Storing and loading development technology data

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that allows us to write HTML-like code inside JavaScript.

It makes React components easier to write and understand.

For example:
```jsx
const title = <h1>Development Technologies</h1>;
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data that belongs to a component and can change over time.

Props are normally read-only, while state can be updated.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a component to **store and update data**.

In this project, I used it to manage application data and UI-related states, such as the selected technology stack and technology data.

Example:

```jsx
const [active, setActive] = useState<sting>("Home");
```

When the state changes, React updates the UI.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` allows us to run code after a component renders.

I used it to **load the development technology data from a JSON file when the application starts**.

Example:

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then(res => res.json())
    .then(data => setTechnologies(data));
}, []);
```

The empty dependency array `[]` means the effect runs when the component is initially loaded.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React know which item has changed, been added, or removed.

Example:

```jsx
technologies.map(technology => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

The `id` should be unique for every technology.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI based on a condition.

For example, if no technologies are available, we can show an empty message:

```jsx
{technologies.length === 0 ? (
  <p>No technologies available.</p>
) : (
  <TechnologyList technologies={technologies} />
)}
```

Here, the empty message is displayed when there are no technologies.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

```jsx
<TechnologyCard technology={technology} />
```

The child receives the data through its props:

```jsx
function TechnologyCard({ technology }:technologyType) {
  return <h2>{technology.name}</h2>;
}
```

To send something back to the parent, the parent can pass a **function as a prop**.

```jsx
<TechnologyCard onSelect={handleSelect} />
```

The child can call that function:

```jsx
<button onClick={() => onSelect(technology)}>
  Select
</button>
```

So the basic communication is:

```text
Parent
   ↓
  Props
   ↓
Child
   ↓
Callback Function
   ↓
Parent
```

---

## 📁 Project Structure

A typical project structure:

```text
src/
├── components/
│   ├── TechCard.jsx
│   ├── TechGrid.jsx
│   └── ...
├── data/
│   └── technologies.json
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

---

## 🧑‍💻 Tech Stack

```text
React
Tailwind CSS
React Toast
Lucide React
React Suspense
JavaScript
JSON
```

---

## ❤️ About the Project

This project was built to practice **React component development, state management, data fetching, conditional rendering, props, callbacks, and responsive UI design** while creating a practical development technology stack management application.

**Built with React ⚛️**
