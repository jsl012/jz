// 产品数据
const products = [
    { name: '羊肉水饺', price: 20, description: '鲜嫩多汁的羊肉水饺' },
    { name: '牛肉水饺', price: 18, description: '香浓可口的牛肉水饺' },
    { name: '素三鲜水饺', price: 12, description: '健康美味的素三鲜水饺' },
    { name: '鸡蛋韭菜水饺', price: 12, description: '经典搭配的鸡蛋韭菜水饺' },
    { name: '鲜肉香菇水饺', price: 12, description: '香菇与鲜肉的完美结合' },
    { name: '鲜肉芹菜水饺', price: 12, description: '清脆芹菜与鲜嫩肉馅' },
    { name: '鲜肉大葱水饺', price: 12, description: '大葱的香气与肉的鲜美' },
    { name: '鲜肉胡萝卜馄饨', price: 12, description: '营养均衡的美味搭配' },
    { name: '皮蛋鲜肉馄饨', price: 12, description: '独特口感的创新馄饨' },
    { name: '玉米鲜肉馄饨', price: 12, description: '甜糯玉米与鲜肉的组合' },
    { name: '虾仁鲜肉馄饨', price: 18, description: '鲜美可口的虾仁馄饨' },
    { name: '鲜肉馄饨', price: 12, description: '传统美味的鲜肉馄饨' }
];

// 初始化轮播图
document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.mySwiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });

    generateProductList();

    // 处理表单提交
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('表单提交:', { name, email, message });
        
        this.reset();
        alert('感谢您的留言，我们会尽快回复！');
    });
});

function generateProductList() {
    const productList = document.getElementById('productList');
    if (!productList) {
        console.error('Product list element not found');
        return;
    }
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-3 mb-4';
        let cardContent = `
            <div class="card product-card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">价格: ¥${product.price}</p>
                </div>
            </div>
        `;
        
        if (product.name === '玉米鲜肉馄饨' || product.name === '虾仁鲜肉馄饨' || product.name === '皮蛋鲜肉馄饨' || product.name === '鲜肉香菇水饺' || product.name === '鲜肉馄饨' || product.name === '鲜肉胡萝卜馄饨' || product.name === '鲜肉芹菜水饺' || product.name === '羊肉水饺' || product.name === '牛肉水饺' || product.name === '鸡蛋韭菜水饺' || product.name === '素三鲜水饺' || product.name === '鲜肉大葱水饺') {
            let backgroundImage;
            switch(product.name) {
                case '玉米鲜肉馄饨':
                    backgroundImage = 'imgs/mmexport1715244187614(2).png';
                    break;
                case '虾仁鲜肉馄饨':
                    backgroundImage = 'imgs/mmexport1715244226856.jpg';
                    break;
                case '皮蛋鲜肉馄饨':
                    backgroundImage = 'imgs/mmexport1715244193674.jpg';
                    break;
                case '鲜肉香菇水饺':
                    backgroundImage = 'imgs/mmexport1715244187614(1).png';
                    break;
                case '鲜肉馄饨':
                    backgroundImage = 'imgs/mmexport1715244179700(1).png';
                    break;
                case '鲜肉胡萝卜馄饨':
                    backgroundImage = 'imgs/mmexport1715244179700(2).png';
                    break;
                case '鲜肉芹菜水饺':
                    backgroundImage = 'imgs/mmexport1715244187614(3).png';
                    break;
                case '羊肉水饺':
                case '牛肉水饺':
                    backgroundImage = 'imgs/mmexport1715244347241.jpg';
                    break;
                case '鸡蛋韭菜水饺':
                    backgroundImage = 'imgs/IMG20240704153133.jpg';
                    break;
                case '素三鲜水饺':
                    backgroundImage = 'imgs/IMG_20240920_200321.jpg';
                    break;
                case '鲜肉大葱水饺':
                    backgroundImage = 'imgs/IMG_20240920_200034.jpg';
                    break;
            }
            cardContent = `
                <div class="card product-card" style="background-image: url('${backgroundImage}'); background-size: cover; background-position: center; height: 200px;">
                    <div class="card-body" style="background-color: rgba(0,0,0,0.5); color: white;">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">价格: ¥${product.price}</p>
                    </div>
                </div>
            `;
        }
        
        productCard.innerHTML = cardContent;
        productList.appendChild(productCard);
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});