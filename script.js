document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.login-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert(btn.getAttribute('data-role') + " Giriş Sayfasına Yönlendiriliyorsunuz.");
        });
    });

    const langBtn = document.getElementById('lang-btn');
    const langText = document.getElementById('lang-text');
    langBtn.addEventListener('click', () => {
        langText.innerText = (langText.innerText === 'English') ? 'Türkçe' : 'English';
    });
});