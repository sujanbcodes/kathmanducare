async function loadStaff() {
    try {
        const res = await fetch('data/staff.json');
        const staff = await res.json();
        const container = document.getElementById('staff-list');
        staff.forEach(member => {
            const card = document.createElement('div');
            card.className = 'staff-card';
            card.innerHTML = `<h3>${member.name}</h3><p>${member.role}</p><p>${member.subjects}</p>`;
            container.appendChild(card);
        });
    } catch (e) {
        console.error('Failed to load staff', e);
    }
}

document.addEventListener('DOMContentLoaded', loadStaff);

