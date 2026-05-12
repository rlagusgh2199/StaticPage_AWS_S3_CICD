// 버튼과 메시지를 표시할 요소를 가져옵니다.
const button = document.getElementById('testButton');
const messageText = document.getElementById('resultMessage');

// 버튼에 클릭 이벤트 리스너를 추가합니다.
button.addEventListener('click', function() {
    // 현재 시간을 가져옵니다.
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    // 메시지 영역에 텍스트를 출력합니다.
    messageText.innerText = `✅ JavaScript 정상 작동! (확인 시간: ${timeString})`;

    // 버튼 색상을 초록색으로 변경해 봅니다.
    button.style.backgroundColor = '#28a745';
    button.innerText = '테스트 완료';
});