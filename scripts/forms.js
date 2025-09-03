function handleForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (form.checkValidity()) {
            document.getElementById('form-status').textContent = 'Thank you! We will get back to you soon.';
            form.reset();
        } else {
            document.getElementById('form-status').textContent = 'Please fill in all required fields.';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleForm('admissions-form');
    handleForm('contact-form');
});

