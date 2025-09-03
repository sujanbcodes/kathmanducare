async function loadEvents() {
    try {
        const res = await fetch('data/events.json');
        const events = await res.json();
        const list = document.getElementById('events-full');
        events.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            list.appendChild(li);
        });
    } catch (e) {
        console.error('Failed to load events', e);
    }
}

document.addEventListener('DOMContentLoaded', loadEvents);

