// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// import "./a.css"
// import logo from './images/logo.jpg'
// import profile from './images/profile.png'
// import cover from './images/cover.png'

// const ChatBot = () => {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate(); // for navigation

//   const handleSend = () => {
//     const userProfile = {
//       gender: "Male",
//       religion: "Others",
//       income: "1.5L to 3L",
//       education_qualification: "Doctrate",
//       "annual-percentage": "70-80",
//       country: "India"
//     };

//     axios.post("http://127.0.0.1:5000/filter_scholarships", userProfile)
//       .then(res => {
//         const resultData = res.data;
//         console.log("this part working ",resultData); 
//         //  navigate to /results and pass scholarship data
//         navigate('/results', { state: { scholarships: resultData } });
//         // navigate('/results', { state: { scholarships: resultData } });


//       })
//       .catch(err => {
//         console.error("Error fetching scholarships:", err);
//       });

//     setInput(""); // clear input field
//   };

//   return (
//     <div>
//       <div className='navbar'>
//         <img src={logo} alt="idk" className='w-[70px] h-[70px] rounded-full hover:cursor-pointer'/>
//         <div className='flex space-x-25 mt-[20px]'>
//           <h1 className='text-white text-2xl font-bold'>Home</h1>
//           <h1 className='text-white text-2xl font-bold'>Scholarships</h1>
//           <h1 className='text-white text-2xl font-bold'>Contact</h1>
//           <img src={profile} alt="Profile icon" className='w-[40px] h-[40px] mr-[40px]'/>
//         </div>
//       </div>

//       <div className='will-change-auto min-h-screen bg-[#0f1924]'>
//         <div className='main-img'>
//           <img src={cover} alt="Main Image" className='shadow-lg'/>
//         </div>
//         <div className='heading text-center text-white mt-4'>
//           <h1 className='text-4xl font-bold'>Welcome to ScholarBuddy</h1>
//           <h2 className='text-lg font-light'>I'm here to help you find the perfect scholarship</h2>
//         </div>

//         {/* Input Box */}
//         <div className='input-box flex flex-row items-center justify-center mt-10'>
//           <img src={profile} alt="Profile" className='w-[40px] h-[40px] mr-[12px]'/>
//           <input
//             type="text"
//             placeholder='Ask me anything...'
//             className='w-[600px] h-[50px] rounded-lg p-2 font-semibold text-white bg-[#223649]'
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button
//             onClick={handleSend}
//             className='font-bold text-2xl text-white w-[100px] h-[50px] rounded-lg ml-2 border-white border-[1px] bg-blue-400'
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ChatBot;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './a.css';
import logo from './images/logo.png';
import profile from './images/profile.png';
import coverImage from './images/cover.png';
import { Typewriter } from 'react-simple-typewriter';

const ChatBot = () => {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([
    { sender: 'bot', text: "Hi! I'm ScholarBuddy 🤖" },
    { sender: 'bot', text: "Would you like me to suggest scholarships for you? (yes/no)" }
  ]);
  const [questionStep, setQuestionStep] = useState(0);
  const [userProfile, setUserProfile] = useState({});
  const [startQuestions, setStartQuestions] = useState(false);
  const navigate = useNavigate();

  const questions = [
    { key: 'gender', text: "What is your gender? (e.g. Male/Female/Other)" },
    { key: 'religion', text: "What is your religion? (e.g. Hindu/Muslim/Others)" },
    { key: 'income', text: "What is your family income? (e.g. Upto 1.5L / 1.5L to 3L / Above 3L)" },
    { key: 'education_qualification', text: "What is your highest education qualification? (e.g. Undergraduate / Postgraduate / Doctrate)" },
    { key: 'annual-percentage', text: "What is your annual academic percentage? (e.g. 60-70 / 70-80 / 80-90 / 90-100)" }
  ];

  useEffect(() => {
    document.querySelector('.chat-box')?.scrollTo({ top: 99999, behavior: 'smooth' });
  }, [conversation]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg = { sender: 'user', text: inputText };
    setConversation(prev => [...prev, userMsg]);

    const text = inputText.trim().toLowerCase();

    // Step 0: Wait for "yes" or "no"
    if (!startQuestions && questionStep === 0) {
      if (text === 'yes') {
        setStartQuestions(true);
        setTimeout(() => {
          setConversation(prev => [...prev, { sender: 'bot', text: questions[0].text }]);
        }, 500);
        setQuestionStep(1);
      } else {
        setConversation(prev => [...prev, { sender: 'bot', text: "Alright! Let me know if you change your mind." }]);
      }
      setInputText('');
      return;
    }

    // Step 1+: Collect answers
    if (startQuestions && questionStep > 0 && questionStep <= questions.length) {
      const currentKey = questions[questionStep - 1].key;
      setUserProfile(prev => ({ ...prev, [currentKey]: inputText }));

      if (questionStep === questions.length) {
        // All answers collected
        setConversation(prev => [
          ...prev,
          { sender: 'bot', text: "Thank you! Fetching scholarships for you..." }
        ]);

        const completeProfile = {
          ...userProfile,
          [currentKey]: inputText,
          country: "India" // Add fixed field if needed
        };

        try {
          const res = await axios.post('http://127.0.0.1:5000/filter_scholarships', completeProfile);
          const resultData = res.data;
          navigate('/results', { state: { scholarships: resultData } });
        } catch (err) {
          console.error("Error fetching scholarships:", err);
          setConversation(prev => [...prev, { sender: 'bot', text: "Something went wrong. Please try again later." }]);
        }
      } else {
        // Ask next question
        setTimeout(() => {
          setConversation(prev => [...prev, { sender: 'bot', text: questions[questionStep].text }]);
        }, 500);
        setQuestionStep(prev => prev + 1);
      }

      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className='min-h-screen bg-[#0f172a] py-6 m-0 p-0'>
      {/* Header */}
      <div className="w-full bg-[#0f172a] py-4 px-6 flex justify-between items-center shadow-md">
        <img src={logo} alt="logo" className="w-16 h-16 rounded-full cursor-pointer" />
        <div className="flex-1 flex justify-center items-center space-x-10">
          <h1 className="text-white text-lg sm:text-xl font-semibold font-serif hover:text-yellow-400 cursor-pointer transition">Home</h1>
          <h1 className="text-white text-lg sm:text-xl font-semibold font-serif hover:text-yellow-400 cursor-pointer transition">Scholarships</h1>
          <h1 className="text-white text-lg sm:text-xl font-semibold font-serif hover:text-yellow-400 cursor-pointer transition">Contact</h1>
        </div>
        <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
      </div>
  
      {/* Banner */}
      <div className='heading text-center mt-2 animate-fade-in flex flex-col items-center justify-center'>
        <img src={coverImage} alt='ScholarBuddy Logo' className='logo-image mb-4 rounded-xl shadow-lg' />
        <h1 className='text-5xl font-extrabold text-white font-serif'>
          <span className='bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
            <Typewriter
              words={['ScholarBuddy']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={150}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className='text-lg text-gray-300 mt-3 max-w-2xl px-4 sm:px-0 font-serif'>
          Your AI companion for personalized scholarship assistance and smart application support.
        </p>
      </div>
  
      {/* Chatbox */}
      <div className="chat-container max-w-4xl mx-auto mt-8 px-4 transition duration-500">
        <div className="chat-box bg-white bg-opacity-10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl h-[400px] overflow-y-auto space-y-4 border border-white border-opacity-20 scroll-smooth">
          {conversation.map((msg, idx) => (
            <div
              key={idx}
              className={`message text-[16px] font-serif leading-relaxed p-4 rounded-2xl w-fit max-w-[80%] shadow-md ${
                msg.sender === 'user'
                  ? 'ml-auto bg-blue-600 text-white rounded-br-sm'
                  : 'mr-auto bg-gray-100 text-gray-800 rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
  
        {/* Input Area */}
        <div className='input-box flex flex-col items-center justify-center mt-8 sm:flex-row relative'>
          <input
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Type your answer here...'
            className='flex-1 px-6 py-4 rounded-full shadow-inner text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 bg-white bg-opacity-90 font-serif'
          />
          <button
            onClick={handleSend}
            className='px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full shadow-lg transition duration-300 font-serif'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default ChatBot;
