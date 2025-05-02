const setup = () => {
    const historyContainer = document.getElementById('history');
    const commandInput = document.getElementById('commandInput');
    const goBtn = document.getElementById('goBtn');

    const commandMap = {
        '/g': { name: "Google", urlPrefix: "https://www.google.com/search?q=", class: "card-google" },
        '/y': { name: "Youtube", urlPrefix: "https://www.youtube.com/results?search_query=", class: "card-youtube" },
        '/x': { name: "Twitter", urlPrefix: "https://x.com/hashtag/", class: "card-twitter" },
        '/i': { name: "Instagram", urlPrefix: "https://www.instagram.com/explore/tags/", class: "card-instagram" }
    };

    let historyArray = JSON.parse(localStorage.getItem("searchHistory")) || [];

    function renderCard(item) {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
      <div class="card ${item.class}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.text}</p>
          <a href="${item.url}" target="_blank" class="btn btn-dark">Go!</a>
        </div>
      </div>
    `;
        historyContainer.appendChild(col);
    }

    function handleCommand(commandStr) {
        const match = commandStr.match(/^\/\w\s.+/);
        if (!match) {
            alert("Fout commando! Gebruik bv. '/g zoekterm'");
            return;
        }

        const [prefix, ...queryParts] = commandStr.split(" ");
        const query = queryParts.join(" ");
        const cmd = commandMap[prefix];

        if (!cmd) {
            alert("Onbekende prefix!");
            return;
        }

        const url = prefix === '/x'
            ? `${cmd.urlPrefix}${encodeURIComponent(query)}`
            : `${cmd.urlPrefix}${encodeURIComponent(query).replace(/%20/g, "+")}`;

        const entry = {
            title: cmd.name,
            text: query,
            url: url,
            class: cmd.class
        };

        historyArray.push(entry);
        localStorage.setItem("searchHistory", JSON.stringify(historyArray));
        renderCard(entry);
        window.open(url, '_blank');
        commandInput.value = '';
    }

    goBtn.addEventListener('click', () => {
        handleCommand(commandInput.value.trim());
    });

    historyArray.forEach(item => renderCard(item));
};

window.addEventListener("load", setup);
