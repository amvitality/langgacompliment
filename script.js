const compliments = [
    "You light up every room you walk into. 💡",
    "Your smile is my favorite thing in the world. 😊",
    "You make my life so much better, just by being in it. ❤️",
    "You're the most beautiful person inside and out. 🌸",
    "You inspire me every single day. 🌟",
    "You have the kindest heart, and I love you for it. 💕",
    "You are my everything, and I feel so lucky to have you. 🥰",
    "You are perfect in every way that matters. 🌷",
    "You're my dream come true. 🌈",
    "You make the world a brighter place. 🌞"
    
];

const complimentElement = document.getElementById('compliment');
const button = document.getElementById('generate-btn');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentElement.textContent = compliments[randomIndex];
});
