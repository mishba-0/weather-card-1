  const seasonSelect = document.getElementById('seasonSelect');
    const cardContainer = document.getElementById('cardContainer');

    const seasonData = {
      winter: {
        title: 'Winter Season',
        text: 'Cold, snowy, and cozy vibes.',
        img: 'https://cdn.pixabay.com/animation/2025/01/05/02/03/02-03-02-262_512.gif'
      },
      autumn: {
        title: 'Autumn Season',
        text: 'Beautiful falling leaves and cool breeze.',
        img: 'https://media.tenor.com/mKxsjcv8o1cAAAAM/autumn-leaves.gif'
      },
      spring: {
        title: 'Spring Season',
        text: 'Flowers bloom and nature wakes up.',
        img: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2FyZWlpNGp0NGRuM3I1azlka2N1OXd4eTlpdDQxNWQ1M2VneGowNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4OonvHaF1Yxt0o1w1V/giphy.webp'
      },
      summer: {
        title: 'Summer Season',
        text: 'Sunshine, beaches, and warmth.',
        img: 'https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTk2Y2djNzUzOTRjNDB3OHk0MGFncXhsdDZjb3k1bWRlbGxlbzQzZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LpkhKVwp6dpCg/giphy.webp'
      }
    };

    seasonSelect.addEventListener('change', () => {
      const selected = seasonSelect.value;
      cardContainer.innerHTML = ''; // clear previous card
      if(seasonData[selected]){
        const data = seasonData[selected];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${data.img}" alt="${data.title}">
          <div class="card-body">
            <h3 class="card-title">${data.title}</h3>
            <p class="card-text">${data.text}</p>
            <a href="#" class="btn">Learn More</a>
          </div>
        `;
        cardContainer.appendChild(card);
      }
    });