import { useState } from "react";

function App() {
  const [question, setQuestion] = useState('Do you love Kane?')
  const [clickedNo, setClickedNo] = useState(false)
  const onPressYes = () => {
    setQuestion(clickedNo ? "Why are you clicking yes now 🥺, Too Late" : "Kane loves you Loads ♥️ Call Kane Now 🥺")
    
  }

  const onPressNo = () => {
    setQuestion("Kane is Sad 💔, Raghel broke Kane's Heart 😖, Raghel Doesn't love Kane, Raghel is Bad Bad Bad")
    setClickedNo(true)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Today's Quiz for Ms. Raghel Merlin Kirubai 🤨</h1>
        <h2>{question}</h2>
      </div>
      <div style={{ display: 'flex', width: '50%', justifyContent: 'space-around' }}>
        <button onClick={onPressYes}>Yes</button>
        <button onClick={onPressNo}>No</button>
      </div>
    </div>
  );
}

export default App;
