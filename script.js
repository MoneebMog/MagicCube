const square = document.getElementById("square");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  
  square.style.transform = `rotateX(${y * 180}deg) rotateY(${x * 180}deg)`;
});
