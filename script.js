// --- 1. 다크 모드 토글 기능 ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 브라우저 로컬 저장소에서 이전 테마 설정 불러오기
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateBtnText(savedTheme);
}

// 버튼 클릭 시 테마 변경
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // 테마 적용 및 저장
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateBtnText(newTheme);
});

// 테마에 따라 버튼 텍스트 변경
function updateBtnText(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerText = '☀️ 라이트 모드';
    } else {
        themeToggleBtn.innerText = '🌙 다크 모드';
    }
}

// --- 2. 부드러운 스크롤 (Smooth Scroll) 기능 ---
// 상단 네비게이션 링크를 클릭했을 때 해당 섹션으로 부드럽게 이동합니다.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 기본 앵커 이동 방지
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if(targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});