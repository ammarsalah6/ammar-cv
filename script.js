// تغيير السمة بين الفاتحة والداكنة
const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;
const moonIcon = themeSwitcher.querySelector('i');

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    } else {
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
    }
});

// طباعة البطاقة
const printBtn = document.querySelector('.print-btn');
printBtn.addEventListener('click', () => {
    window.print();
});

// تأثيرات تفاعلية للمهارات
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.boxShadow = 'none';
    });
});