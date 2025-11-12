function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}


axios.get('https://personajes-5271.restdb.io/rest/Personajes-2', {
    headers: {
        'Content-Type': 'application/json',
        'x-apikey': '665a00309dbb48069e715f6e'
    }
})
.then(response => {
    const characters = response.data;
    const charactersContainer = document.querySelector('#charactersContainer');
    const searchBarPersonajes = document.querySelector('#searchBarPersonajes');

    function displayCharacters(characters) {
        charactersContainer.innerHTML = '';
        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');
            card.innerHTML = `
                <img src="${character.imagen}" alt="${character.Personaje}" class="character-image">
                <div class="character-info">
                    <h2>${character.Personaje}</h2>
                    <p><strong>Raza:</strong> ${character.Raza}</p>
                    <p><strong>Planeta de origen:</strong> ${character['Planeta de origen']}</p>
                    <p><strong>Edad (aproximada):</strong> ${character['Edad aproximada']}</p>
                    <p><strong>Universo:</strong> ${character.Universo}</p>
                </div>
            `;
            charactersContainer.appendChild(card);
        });
    }

    displayCharacters(characters);

    searchBarPersonajes.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredCharacters = characters.filter(character => 
            character.Personaje.toLowerCase().includes(searchString)
        );
        displayCharacters(filteredCharacters);
    });
})
.catch(error => {
    console.error('Error al obtener datos de la API:', error);
});

function setupSearchBar(searchBarId, listId, itemSelector) {
    const searchBar = document.querySelector(searchBarId);
    const list = document.querySelector(listId);
    const items = list.querySelectorAll(itemSelector);

    searchBar.addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        items.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = itemName.includes(searchString) ? '' : 'none';
        });
    });
}

setupSearchBar('#searchBarSerie', '#seriesList', 'li');
setupSearchBar('#searchBarManga', '#mangaList', 'li');
setupSearchBar('#searchBarPeliculas', '#peliculasList', 'li');
setupSearchBar('#searchBarVideojuegos', '#videojuegosList', 'li');


window.addEventListener('scroll', () => {
    const scrollButton = document.querySelector('.scroll-to-top');
    scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
