// 获取主图容器和所有画廊图片
const mainImageContainer = document.getElementById('main-image');
const galleryImages = document.querySelectorAll('.gallery img');

// 为每个画廊图片添加点击事件监听器
galleryImages.forEach(img => {
    img.addEventListener('click', function () {

        // 将当前点击的图片路径设置为主图的src属性
        mainImageContainer.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
    });
});