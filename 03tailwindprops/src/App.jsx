import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)

  const gods = [
    { godName: "Rama", description: "An incarnation of Lord Vishnu.", imgProps: { imgUrl: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/01/HD-wallpaper-lord-rama-blue-lord-ram-god-jai-shri-ram.jpg?size=*:900", alt: "Rama" } },
    { godName: "Krishna", description: "The eighth avatar of Vishnu.", imgProps: { imgUrl: "https://i.pinimg.com/236x/ac/06/2c/ac062c1db6fc8646b7ac8a40e4317042.jpg", alt: "Krishna" } },
    { godName: "Shiva", description: "The destroyer among the Trimurti.", imgProps: {imgUrl: "https://cdn.pixabay.com/photo/2024/02/08/03/45/ai-generated-8560118_640.png", alt: "Shiva"}},
    { godName: "Shashank", description: "The Moon god", imgProps: {imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRC9GGzW9i5KcgcA9hM-ZlP1ioSUTnfM_fDQ&s", alt: "Moon"}}
  ];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      {gods.map((god, index) => (
        <Card
          key={index}
          godName={god.godName}
          description={god.description}
          imgProps={god.imgProps}
          />
      ))}
    </>
  )
}

export default App
