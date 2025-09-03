async function loadNews() {
    try {
        const res = await fetch('data/news.json');
        const news = await res.json();
        const list = document.getElementById('news-full');
        news.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            list.appendChild(li);
        });
    } catch (e) {
        console.error('Failed to load news', e);
    }
}

document.addEventListener('DOMContentLoaded', loadNews);

