async function loadList(url, elementId, limit) {
    try {
        const res = await fetch(url);
        const items = await res.json();
        const list = document.getElementById(elementId);
        items.slice(0, limit).forEach(item => {
            const li = document.createElement('li');
            if (item.url) {
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.title;
                li.appendChild(a);
            } else {
                li.textContent = item.title;
            }
            list.appendChild(li);
        });
    } catch (e) {
        console.error('Failed to load', url, e);
    }
}

loadList('data/news.json', 'news-list', 3);
loadList('data/events.json', 'events-list', 3);

