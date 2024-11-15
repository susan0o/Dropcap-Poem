const startBtn = document.getElementById('start-btn');
const startTtl = document.getElementById('start-title');

const reset = () => {
    startTtl.textContent = 'Fire and Ice';
    startBtn.style.display = 'block';
};

startBtn.addEventListener('click', () => {
  startTtl.textContent = 'Its on Bitches!';
  startBtn.style.display = 'none';
  setTimeout(reset, 3000);
});
