// Karanlık mod geçişi
const toggleButton = document.getElementById("darkToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dil değiştirme
const translations = {
  en: {
    title: "MY ACCOUNTS ⬇️",
    about: "About Me - Personal Info & Goals",
    privacy: "Privacy Policy - Data Use & Protection",
    instagram: "Instagram",
    telegram: "Telegram",
    tiktok: "TikTok",
  },
  tr: {
    title: "HESAPLARIM ⬇️",
    about: "Hakkımda - Kişisel Bilgiler ve Hedefler",
    privacy: "Gizlilik Politikası - Veri Kullanımı ve Korunması",
    instagram: "Instagram",
    telegram: "Telegram",
    tiktok: "TikTok",
  },
  ru: {
    title: "МОИ АККАУНТЫ ⬇️",
    about: "Обо мне - Личная информация и цели",
    privacy: "Политика конфиденциальности - Использование и защита данных",
    instagram: "Инстаграм",
    telegram: "Телеграм",
    tiktok: "ТикТок",
  }
};

document.getElementById("language").addEventListener("change", function () {
  const lang = this.value;
  const t = translations[lang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("aboutLink").innerText = t.about;
  document.getElementById("privacyLink").innerText = t.privacy;
  document.getElementById("ig").innerText = t.instagram;
  document.getElementById("tg").innerText = t.telegram;
  document.getElementById("tt").innerText = t.tiktok;
});
