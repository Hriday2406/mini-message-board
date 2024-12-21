const messages = [
  {
    id: 0,
    user: "Hriday2406",
    text: "Hi everyone! Welcome to my app <3",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
  {
    id: 1,
    user: "Jubin NaughtyLaal",
    text: "Agar Lara Dutta ki shaadi Brian Lara se ho jaye, to shaadi ke baad uska naam kya hoga? XD",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
  {
    id: 2,
    user: "Tasha",
    text: "Meow Meow Meow Meow T_T",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
  {
    id: 3,
    user: "Billy Butcher",
    text: "Chalo guys tum enjoy karo, mai jaa raha hun sone. Good night :)",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
  {
    id: 4,
    user: "Model",
    text: "Nikhil Kya bollee hoo!! XD",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
  {
    id: 5,
    user: "Body Builder",
    text: "Yaar tu mere se pyaar karti hai ya nahi karti T_T",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
  {
    id: 6,
    user: "Cycloid",
    text: "Aaj mai shoulder maar ke aya hun :)",
    added: new Date(),
    // added: "15:35 - 21/12/2024",
  },
];

async function getMessages() {
  return JSON.stringify(messages);
}

async function getMessage(id) {
  return messages.find((msg) => msg.id === id);
}

async function addNewMessage(user, text) {
  try {
    messages.push({
      id: messages[messages.length - 1].id + 1,
      user: user,
      text: text,
      added: new Date(),
    });
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getMessages,
  getMessage,
  addNewMessage,
};
