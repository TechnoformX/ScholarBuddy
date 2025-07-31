import React, { useEffect, useState } from 'react';
import './a.css';
import { Typewriter } from 'react-simple-typewriter';
import coverImage from './cover.png';

const ChatBot = () => {
  const [inputText, setInputText] = useState('');
  const [conversation, setConversation] = useState([
    { sender: 'bot', text: 'Hi! I\'m ScholarBuddy. Ask me anything about scholarships 👋' }
  ]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Delay ensures transition is visible
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const newMessage = { sender: 'user', text: inputText };
    setConversation([...conversation, newMessage]);

    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText })
      });

      const data = await response.json();
      const botReply = { sender: 'bot', text: data.response };
      setConversation((prev) => [...prev, botReply]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      setConversation((prev) => [...prev, { sender: 'bot', text: 'Something went wrong. Please try again.' }]);
    }

    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[var(--color-dark-bg-1)] to-[var(--color-dark-bg-2)] py-6'>
      <div className='heading text-center mt-2 animate-fade-in flex flex-col items-center justify-center'>
        <img src={coverImage} alt='ScholarBuddy Logo' className='logo-image mb-4 rounded-xl shadow-lg' />
        <h1 className='text-5xl font-extrabold text-white'>
          <span className='gradient-text'>
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
        <p className='text-lg text-gray-300 mt-3 max-w-2xl px-4 sm:px-0'>
          Your AI companion for personalized scholarship assistance and smart application support.
        </p>
      </div>

      <div
        className={`chat-container max-w-4xl mx-auto mt-8 px-4 transform transition duration-500 ${
          animate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className='chat-box bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg h-[400px] overflow-y-auto space-y-4 border border-white border-opacity-20'>
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`message p-3 rounded-xl w-fit max-w-[80%] ${
                msg.sender === 'user'
                  ? 'ml-auto bg-blue-500 text-white rounded-br-none'
                  : 'mr-auto bg-gray-200 text-gray-900 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className='input-box flex flex-col items-center justify-center mt-10 sm:flex-row relative'>
          <input
            type='text'
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='Ask me anything about scholarships...'
            className='flex-1 px-6 py-4 rounded-full shadow-inner text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4 bg-white bg-opacity-90'
          />
          <button
            onClick={handleSend}
            className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition duration-200'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
