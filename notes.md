# Installation:

**Install:** ``nodejs``, ``vscode`` or anyother editor, create repository in ``github``, add it in local folder which you created(like, initializing git, creating readme file, staging it, commiting it, and remote adding repository, push it.)


we can do:
```powershell
npx create-react-app 01basicreact 
```

``npx``- node package executive

**But,**

``create-react-app`` takes too much time, because it is bulky and installs packages which we don't even need.

## Description
``cd 01basicreact``

Go to ``package.json``, because there is a way to learn react.
We can see, versions, dependencies, and scripts(which run projects, or build in production environment, testing, ejecting).

``npm run start``

``npm run build``

``npm run test``

``npm run eject``

## Using Vite instead of create-react-app

``npm create vite@latest``

Needed to install create-vite@6.1.1, so installed it with yes.

I choosed  ``folder name`` and then choosed ``react`` and ``javascript``.

Then, went to project folder:

``cd 01vitereact``
then,

``npm install``

then,

``npm run dev``

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```


# React Fiber notes:
- **React Fiber** is implementation of React's core algorithm(updating virtual DOM).
- The goal of React Fiber is to increase it's suitability for areas like animation, layout, and gestures.
- The reason was React's previous way of updating ui was very fast which posed problem for these three areas.
- Headline feature is **incremental rendering:** ability to split rendering work into chunks and spread it out over multiple frames. (whole tree is not covered, but only small parts of tree are updated.)

- **Key features:** ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives(we can call it hydration(javascript injection in web layout, after web layout is already loaded)).

## Reconciliation(prerequisites):
**reconciliation**
- The algorithm React uses to diff one tree with another to determine which parts need to be changed.

**update**
- A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

**Central Idea of React's API**
- to think of updates as if they cause the entire app to re-render. This allows the developer to reason declaratively, rather than worry about how to efficiently transition the app from any particular state to another (A to B, B to C, C to D, and so on).

- Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called **reconciliation.**

**Reconciliation** is the algorithm behind what is popularly understood as the "virtual DOM." 

**A high-level description goes something like this:** when you render a React application, a tree(under jsx, we make an object) of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment-for example, in the case of a browser application it's translated to a set of DOM operations. When the app is updated (usually via ``setState``), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the **reconciler**, the high-level algorithm described in the React docs.

The key points are:
- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of list is performed using **keys**. **Keys** should be "*stable, predictable, and unique*." (most important related to interviews, for instance, there is an array, loop the arrays, give values in list, buttons, paragraphs. There is a concept why keys should be used? without keys also, we can use it as React only gives warnings. why use keys? Fiber algorithm, to improve the performance of lists, in each iterations,(whether is ui, list,), we have to use keys.)

### Reconciliation vs rendering:
DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native.

Thus, keypoints that we need to understand right now is:
- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities- an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

## What is fiber?
This the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and eventually makes sense.

**Primary Goal:** The Fiber primary goal is to enable React to take advantage of scheduling. Specifically, we need to be able to 
- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

# TailwindCSS installaton:

The way to install tailwindcss, is just go to official documentation of tailwincss.com and do according to your requirements.

since, we are using ``vite`` framework, we will use framework guides to install ``tailwindcss``:

- First step is to create the project using vite, which we did earlier using ``npn create vite@latest`` and named it ``0tailwindprops``.
- Since, ``tailwindcss`` is a css framework that helps us developers build a responsive and customizable web interfaces, the why not use ``css`` only? 
  - **Utility-first:** Tailwind CSS provides a set of utility classes that developers can combine to style elements. This allows developers to create designs without writing custom CSS or leaving the HTML.
  - **Responsive:** Tailwind CSS is built with responsiveness in mind.
  - **Extensible:** Developers can extend the default set of utilites using the ``tailwind.config.js`` file.
  - **Performance-oriented:** Tailwind css encourages developers to "purge" unused styles.
  - There is no predefined classes for elements like buttons or tables.
  - Tailwind supports pattern-based safelisting for situations where you need to safelist a lot of classes.
  - It provides the ``h-fit`` utility class, which ensures the element's height dynamically adapts to it's content's size.
- After, going inside the project folder, we just did ``npm install -D tailwindcss postcss autoprefixer``, this install tailwindcss and it's depedencies. So, why ``-D``, it for devDependencies, we saw in ``package.json``, it is for development environment. 
- Then, again, we installed used ``npx tailwindcss init -p``, which provided us with the ``tailwind.config.js`` and ``postcss.config.js`` file inside the project folder. ``npx`` stands for node package executive.

# A React interview question on counter (video: 8[chai_aur_react_8](https://www.youtube.com/watch?v=tOYkV6Yhrhs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=8))



