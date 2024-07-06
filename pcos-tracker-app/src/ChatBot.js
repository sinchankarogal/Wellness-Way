// import React, { useState, useEffect } from 'react';
// import './ChatBot.css';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const welcomeMessage = [
//       { text: 'Hello! I am your friendly PCOS chatbot.', sender: 'bot' },
//       { text: 'I can help you understand more about PCOS, its symptoms, and treatments.', sender: 'bot' }
//     ];
//     setMessages(welcomeMessage);
//   }, []);

//   const handleSendMessage = (message) => {
//     const newUserMessage = { text: message, sender: 'user' };
//     const newMessages = [...messages, newUserMessage];
//     setMessages(newMessages);

//     setTimeout(() => {
//       let replyMessages = [...newMessages];

//       switch (message.toLowerCase()) {
//         case 'hello':
//           replyMessages.push(
//             { text: 'Hi there! How can I help you? Choose one of the options below:', sender: 'bot' },
//             { text: '1. What is PCOS?', sender: 'bot' },
//             { text: '2. Symptoms', sender: 'bot' },
//             { text: '3. Treatment', sender: 'bot' }
//           );
//           break;
//           case 'hi':
//           replyMessages.push(
//             { text: 'Hi there! How can I help you? Choose one of the options below:', sender: 'bot' },
//             { text: '1. What is PCOS?', sender: 'bot' },
//             { text: '2. Symptoms', sender: 'bot' },
//             { text: '3. Treatment', sender: 'bot' }
//           );
//           break;
//         case '1':
//         case 'what is pcos?':
//           replyMessages.push({ text: 'Polycystic ovary syndrome (PCOS) is a common endocrine disorder affecting women of reproductive age. It is characterized by a combination of symptoms and hormonal imbalances that can impact a woman’s menstrual cycle, fertility, appearance, and metabolic health.', sender: 'bot' });
//           break;
//         case '2':
//         case 'symptoms':
//           replyMessages.push({ text: 'Polycystic ovary syndrome (PCOS) presents with a variety of symptoms that can vary in intensity among individuals. Common symptoms include irregular menstrual cycles, excessive hair growth (hirsutism) on the face and body, acne, and weight gain. Many women with PCOS also experience thinning hair on the scalp and darkening of the skin in certain areas, such as the neck and under the breasts. Additionally, PCOS is associated with insulin resistance, which can lead to increased risk for type 2 diabetes and other metabolic complications.', sender: 'bot' });
//           break;
//         case '3':
//         case 'treatment':
//           replyMessages.push({ text: 'Treatment for PCOS is tailored to the individual’s symptoms and goals, such as managing symptoms or improving fertility. Lifestyle modifications, including weight loss through diet and exercise, are often recommended to improve insulin sensitivity and reduce symptoms. Medications may include hormonal contraceptives to regulate menstrual cycles, anti-androgens to reduce excessive hair growth, and metformin to improve insulin resistance. For women seeking to conceive, fertility treatments such as clomiphene citrate, letrozole, or assisted reproductive technologies may be utilized. Regular monitoring and follow-up care are essential to manage the condition effectively.', sender: 'bot' });
//           break;
//         default:
//           replyMessages.push({ text: "I'm just a simple chatbot. How can I assist you?", sender: 'bot' });
//       }

//       setMessages(replyMessages);
//     }, 1000);
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-messages">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.sender}`}>
//             <strong>{message.sender === 'user' ? '👩‍🦰You' : '🤖 Bot'}:</strong> {message.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Type a message..."
//         onKeyPress={(e) => {
//           if (e.key === 'Enter') {
//             handleSendMessage(e.target.value);
//             e.target.value = '';
//           }
//         }}
//         className="chatbot-input"
//       />
//     </div>
//   );
// };

// export default ChatBot;

import React, { useState, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const welcomeMessage = [
      { text: 'Hello! I am your friendly PCOS chatbot.', sender: 'bot' },
      { text: 'I can help you understand more about PCOS, its symptoms, and treatments.', sender: 'bot' },
      { text: 'How can I assist you today?', sender: 'bot' }
    ];
    setMessages(welcomeMessage);
  }, []);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    const newUserMessage = { text: message, sender: 'user' };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setUserInput('');

    setTimeout(() => {
      let replyMessages = [...newMessages];

      switch (message.toLowerCase()) {
        case 'hello':
        case 'hi':
          replyMessages.push(
            { text: 'Hi there! How can I help you? Choose one of the options below:', sender: 'bot' },
            { text: '1. What is PCOS?', sender: 'bot' },
            { text: '2. Symptoms', sender: 'bot' },
            { text: '3. Treatment', sender: 'bot' },
            { text: '4. Symptom Tracker', sender: 'bot' },
            { text: '5. Read Blog Articles', sender: 'bot' }
          );
          break;
        case '1':
        case 'what is pcos?':
          replyMessages.push({ text: 'Polycystic ovary syndrome (PCOS) is a common endocrine disorder affecting women of reproductive age. It is characterized by a combination of symptoms and hormonal imbalances that can impact a woman’s menstrual cycle, fertility, appearance, and metabolic health.', sender: 'bot' });
          break;
        case '2':
        case 'symptoms':
          replyMessages.push({ text: 'Common symptoms of PCOS include irregular menstrual cycles, excessive hair growth, acne, weight gain, and thinning hair on the scalp.', sender: 'bot' });
          break;
        case '3':
        case 'treatment':
          replyMessages.push({ text: 'Treatment for PCOS includes lifestyle changes, medications, and sometimes fertility treatments. Consult your healthcare provider for personalized advice.', sender: 'bot' });
          break;
        case '4':
        case 'symptom tracker':
          replyMessages.push({ text: 'You can track your symptoms using our Symptom Tracker tool available on the website.', sender: 'bot' });
          break;
        case '5':
        case 'read blog articles':
          replyMessages.push({ text: 'Visit our blog section for insightful articles on PCOS management, lifestyle tips, and personal stories.', sender: 'bot' });
          break;
        default:
          replyMessages.push({ text: "I'm just a simple chatbot. How can I assist you?", sender: 'bot' });
      }

      setMessages(replyMessages);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <strong>{message.sender === 'user' ? '👩‍🦰 You' : '🤖 Bot'}:</strong> {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        placeholder="Type a message..."
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage(e.target.value);
            e.target.value = '';
          }
        }}
        className="chatbot-input"
      />
    </div>
  );
};

export default ChatBot;
