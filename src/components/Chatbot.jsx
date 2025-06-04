import React, { useState, useEffect, useRef } from 'react';
import './styling/Chatbot.css';

const pairs = [
  // Greetings
  [/hi|hello|hey|hola/i, 
   ["Welcome to Soluna Jewelry ✨ How may I assist you in finding something truly special?",
    "Hello and welcome! Looking for timeless elegance or a radiant new piece?",
    "Hi there! I'm here to help you discover your next favorite piece 💍",
    "Greetings from Soluna Jewelry! Let's find something that shines just for you.",
    "Hey! Need help choosing a gift, exploring collections, or tracking an order? I'm here for you."]],

  // How are you
  [/how are you\?/i, 
   ["I'm sparkling with joy, thank you! How can I assist with your jewelry needs today?"]],

  // Meaning of jewelry
  [/(.*)meaning of jewelry(.*)|(.*)what is jewelry(.*)/i, 
   ["Jewelry is more than adornment—it's a personal expression, a symbol of love, status, or memory, crafted to last a lifetime. Would you like to explore pieces that tell your story?"]],

  // History or significance
  [/(.*)history of jewelry(.*)|(.*)why is jewelry important(.*)/i, 
   ["Jewelry has been worn for thousands of years to signify love, celebration, wealth, and cultural identity. Every piece tells a unique story—just like you."]],

  // Gift occasions
  [/(.*)gift(.*)|(.*)present(.*)/i, 
   ["Jewelry makes a beautiful gift for birthdays, anniversaries, weddings, or just because 💝. Want suggestions based on the occasion or budget?"]],

  // Rings
  [/(.*)ring(.*)/i, 
   ["We offer engagement, wedding, and fashion rings in gold, platinum, and more. Looking for something classic or custom?"]],

  // Necklaces
  [/(.*)necklace(.*)/i, 
   ["Our necklaces range from dainty chains to bold statement pieces. Shopping for yourself or a loved one?"]],

  // Bracelets
  [/(.*)bracelet(.*)/i, 
   ["From delicate bangles to charm bracelets, we have something for every wrist. Would you like to browse our newest styles?"]],

  // Earrings
  [/(.*)earring(.*)/i, 
   ["Studs, hoops, drops—we have earrings for every style and moment. Need hypoallergenic options or gemstone accents?"]],

  // Custom jewelry
  [/(.*)custom(.*)|personalized(.*)/i, 
   ["Yes, we offer custom jewelry! Design your own piece or personalize with initials, birthstones, or meaningful symbols."]],

  // Materials
  [/(.*)gold(.*)|silver(.*)|diamond(.*)|gem(.*)/i, 
   ["We use ethically sourced diamonds and precious metals like 14k/18k gold, platinum, and sterling silver. Looking for a specific gemstone or setting?"]],

  // Authenticity
  [/(.*)authentic(.*)|real(.*)|genuine(.*)/i, 
   ["Absolutely. Every piece is crafted with certified materials and comes with a certificate of authenticity."]],

  // Packaging
  [/(.*)packaging(.*)|box(.*)|unboxing(.*)/i, 
   ["Our pieces come in premium packaging—perfect for gifting. Want to know what's included in the box?"]],

  // Jewelry care
  [/(.*)care(.*)|clean(.*)/i, 
   ["To keep your jewelry shining, clean it gently with a soft cloth. Avoid chemicals and store it in a dry place. Need a full care guide?"]],

  // Shipping
  [/(.*)shipping(.*)/i, 
   ["We offer free domestic shipping and international delivery options. Want to track your order or know delivery times?"]],

  // Returns and refunds
  [/(.*)return(.*)|refund(.*)/i, 
   ["Returns are accepted within 30 days for unworn items in original condition. Need help starting a return?"]],

  // Support/contact
  [/(.*)contact(.*)|support(.*)/i, 
   ["Our support team is always here. Email us at support@solunajewelry.com or call 1-800-SOLUNA."]],
   //Watches 
   [/(.*)watch(.*)/i, 
   ["Our watches are pure gold and silver or also if you want a custom made one feel free to contact us"]],

  // Showroom/store hours
  [/(.*)store(.*)|location(.*)|hours(.*)|showroom(.*)/i, 
   ["Our flagship showroom is open Mon–Sat, 10am to 7pm. Would you like to schedule a private visit or virtual appointment?"]],

  // Collections
  [/(.*)collection(.*)|new(.*)|latest(.*)/i, 
   ["Our newest collection blends timeless elegance with modern trends. Want a sneak peek or browse online?"]],

  // Catch-all
  [/(.*)/i, 
   ["I'm here to help with anything about Soluna Jewelry. Could you rephrase that or ask about a specific piece or service?"]],
];

const reflections = {
  "i am": "you are",
  "i was": "you were",
  "i": "you",
  "i'm": "you are",
  "i'd": "you would",
  "i've": "you have",
  "i'll": "you will",
  "my": "your",
  "you are": "I am",
  "you were": "I was",
  "you've": "I have",
  "you'll": "I will",
  "your": "my",
  "yours": "mine",
  "you": "me",
  "me": "you"
};

class Chat {
  constructor(pairs, reflections) {
    this.pairs = pairs;
    this.reflections = reflections;
  }

  respond(str) {
    for (let i = 0; i < this.pairs.length; i++) {
      const pair = this.pairs[i];
      const regex = pair[0];
      if (regex.test(str)) {
        const responses = pair[1];
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "I'm here to help with anything about Soluna Jewelry. Could you rephrase that or ask about a specific piece or service?";
  }
}

const chatbot = new Chat(pairs, reflections);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Soluna Jewelry ✨ Your virtual assistant is here. How may I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = { text: chatbot.respond(inputValue), sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-avatar">
          <div className="avatar-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
          <div className="avatar-status"></div>
        </div>
        <div className="chatbot-title">
          <h2>Soluna Jewelry Assistant</h2>
          <p>Always here to help</p>
        </div>
        <div className="chatbot-header-icons">
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.sender === 'bot' && (
              <div className="bot-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            )}
            <div className="message-content">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chatbot-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;