document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
                
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const molecules = document.querySelectorAll('.molecule');
  
    molecules.forEach(molecule => {
      const container = molecule.parentElement;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
  
      let x = Math.random() * containerWidth;
      let y = Math.random() * containerHeight;
      let angle = Math.random() * 2 * Math.PI;
      let speed = 0.5 + Math.random() * 1.5; // различна скорост
      let size = 70 + Math.random() * 300;    // различен размер
      let rotation = Math.random() * 360;     // начална ротация
      let scale = 1;                          // начално мащабиране
      let scaleDirection = 1;                 // посока за пулсиране
  
      molecule.style.width = `${size}px`;
      molecule.style.position = 'absolute';
      molecule.style.left = `${x}px`;
      molecule.style.top = `${y}px`;
  
      function move() {
        x += Math.cos(angle) * speed;
        y += Math.sin(angle) * speed;
  
        // Bounce от стените
        if (x <= 0 || x >= containerWidth - size) angle = Math.PI - angle;
        if (y <= 0 || y >= containerHeight - size + 30) angle = -angle;
  
        // Update позиция
        molecule.style.left = `${x}px`;
        molecule.style.top = `${y}px`;
  
        // Въртене
        rotation += 1; // скорост на въртене
        if (rotation >= 360) rotation -= 360;
  
        // Пулсиране
        if (scale >= 1.05) scaleDirection = -1;
        if (scale <= 0.95) scaleDirection = 1;
        scale += 0.002 * scaleDirection;
  
        // Приложение на трансформации
        molecule.style.transform = `rotate(${rotation}deg) scale(${scale})`;
  
        requestAnimationFrame(move);
      }
  
      move();
    });
  });
  