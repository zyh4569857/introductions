// 成就数据
const achievements = [
    { 
        title: "个人成长训练营", 
        date: "2023年暑假", 
        description: "参与为期一月的个人成长训练营，完成近30次讨论，输出大量思维导图和课后思考，带领团队获得千人答辩比赛第二名。", 
        image: "videos/48d2c39ccf34f850ea0475f89d64a8d1.mp4",
        isVideo: true
    },
    { 
        title: "考研微信群运营", 
        date: "目前进行中", 
        description: "运营200多人的考研微信群，积累丰富管理经验，组织多次学习活动，提升群体参与度和目标感。", 
        image: "images/微信图片_20240924223415.jpg"
    },
    // 如果有更多成就，可以在这里添加...
];

// 作品集数据
const portfolioItems = [
    { title: "项目1", image: "project1.jpg", description: "项目1描述" },
    { title: "项目2", image: "project2.jpg", description: "项目2描述" },
    // 添加更多作品...
];

// 加载成就
function loadAchievements(start, count) {
    const container = document.getElementById('achievements-container');
    for (let i = start; i < start + count && i < achievements.length; i++) {
        const achievement = achievements[i];
        const card = document.createElement('div');
        card.className = 'col-md-6 achievement-card mb-4';
        let mediaContent;
        if (achievement.isVideo) {
            mediaContent = `
                <video controls class="w-100 mb-3">
                    <source src="${achievement.image}" type="video/mp4">
                    您的浏览器不支持 video 标签。
                </video>
            `;
        } else {
            mediaContent = `<img src="${achievement.image}" class="img-fluid mb-3" alt="${achievement.title}">`;
        }
        card.innerHTML = `
            <div class="card">
                ${mediaContent}
                <div class="card-body">
                    <h3 class="card-title"><i class="fas fa-trophy"></i> ${achievement.title}</h3>
                    <p class="card-text"><i class="fas fa-info-circle"></i> ${achievement.description}</p>
                    <p class="card-text"><small class="text-muted"><i class="far fa-calendar-alt"></i> ${achievement.date}</small></p>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
}

// 加载作品集
function loadPortfolio() {
    const container = document.getElementById('portfolio-container');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'col-md-4 portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="img-fluid">
            <h3><i class="fas fa-folder-open"></i> ${item.title}</h3>
            <p><i class="fas fa-info-circle"></i> ${item.description}</p>
        `;
        container.appendChild(portfolioItem);
    });
}

// 初始加载
document.addEventListener('DOMContentLoaded', () => {
    loadAchievements(0, 3);
    loadPortfolio();

    // 加载更多成就
    const loadMoreBtn = document.getElementById('load-more');
    let currentCount = 3;
    loadMoreBtn.addEventListener('click', () => {
        loadAchievements(currentCount, 3);
        currentCount += 3;
        if (currentCount >= achievements.length) {
            loadMoreBtn.style.display = 'none';
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});