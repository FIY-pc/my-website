// 获取按钮和欢迎文字容器
const button = document.getElementById("welcome_button");
const welcomeText = document.getElementById("welcome_text");

// 添加按钮点击事件
button.addEventListener("click", function() {
    // 切换容器的显示和隐藏状态
    welcomeText.classList.toggle("collapsed");
});
