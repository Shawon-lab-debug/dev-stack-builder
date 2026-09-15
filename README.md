Project Name: Dev Stack Builder

Description: 

A modern and responsive React website that helps developers explore popular technologies and build their own personalized development stack. Users can browse technologies, add them to their stack, remove individual technologies, or clear the entire stack.


Technologies Used:

* React.js
* JavaScript (ES6+)
* Vite
* CSS3
* JSON
* React-Toastify

**React Questions & Answers**

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

JSX makes React components easier to write and understand because we can describe the UI structure directly inside our JavaScript code.


### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. When state changes, React re-renders the component.


### 3. What does the useState hook do, and where did you use it in this project?

The useState hook allows a React component to store and update data.

I used useState in the Technologies component to store the technologies selected by the user.

jsx: const [stack, setStack] = useState([]);


When a user adds or removes a technology, `setStack()` updates the state and React updates the UI automatically.

I also used useState in the Navbar to control the mobile menu.


### 4. What does the useEffec hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component.

It can be used for tasks such as fetching data, working with APIs, setting timers, or interacting with external systems.

In this project, useEffect is used to handle the loading state while the technology JSON data is being prepared for display.


The loading state allows the website to show a loading spinner before displaying the technology cards.


### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the key prop to identify each item in a list.

A unique key helps React understand which items were added, removed, or changed. This allows React to update the UI efficiently.

In this project, each technology has a unique `id`, so I used it as the key:

jsx:

technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))


### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

I used conditional rendering in the Stack component.

When the stack is empty, the website displays an empty message:

jsx: 

{stack.length === 0 ? (
  <div className="empty-stack">
    <p>Your stack is empty</p>
    <span>Add technologies to build your stack.</span>
  </div>
) : (
  stack.map((technology) => (
    // Stack items
  ))
)}

If the stack contains technologies, the selected technologies are displayed instead.


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component through **props**.

For example, the `Technologies` component passes a technology object and an `onAdd` function to `TechnologyCard`:

jsx:

<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
  isAdded={stack.some((item) => item.id === technology.id)}
/>


The child component can then call the function received through props.

For example:

jsx:

<button onClick={() => onAdd(technology)}>
  + Add to Stack
</button>


This allows the child component to send an action back to the parent, while the actual state remains managed by the parent component.

**Responsive Design**

The website is responsive and adapts to:

* Desktop
* Laptop
* Tablet
* Mobile

The technology cards use a responsive grid:

* 3 columns on desktop
* 2 columns on tablet
* 1 column on mobile

**Notifications**

This project uses **React-Toastify** to display notifications for:

* Technology added to stack
* Duplicate technology warning
* Technology removed
* Remove All action