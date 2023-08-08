// HTML-dən "circle" klassına sahib bütün elementləri toplayırıq
const circles = document.querySelectorAll(".circle");

// "progress" ID-li elementi seçirik
const progress = document.getElementById("progress");

// "prev" və "next" ID-ləri olan düymələri seçirik
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// İndeksi 1 olaraq təyin edirik
let currentActive = 1;

// Yeniləmə funksiyası
function update() {
  // Bütün "circle" elementləri üzərində dönəcək dövr
  circles.forEach((circle, index) => {
    // İndeks (sıra) 1-dən başlayır, aktif addımın indeksi ilə müqayisə edirik
    if (index + 1 <= currentActive) {
      // Elementi "active" klassı ilə təzələyirik
      circle.classList.add("active");
    } else {
      // Elementdən "active" klassını çıxarıb normallaşdırırıq
      circle.classList.remove("active");
    }

    // Aktiv elementləri tapırıq
    const actives = document.querySelectorAll(".active");

    // İlerləmə çubuğunun genişliyini hesablayırıq
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    // Aktif addım 1-dir, "prev" düyməsi deaktiv edilir
    if (currentActive === 1) {
      prev.disabled = true;
    }
    // Aktif addım son addımdır, "next" düyməsi deaktiv edilir
    else if (currentActive === circles.length) {
      next.disabled = true;
    }
    // Digər hallarda "prev" və "next" düymələri aktivdir
    else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
}

// "next" düyməsinə klik edildikdə
nextBtn.addEventListener("click", () => {
  // Aktif addımı bir vahid artırırıq
  currentActive++;

  // Aktif addımın ümumi addımlardan çox olmamasını yoxlayırıq
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  // Yeniləmə funksiyasını çağırırıq
  update();
});

// "prev" düyməsinə klik edildikdə
prevBtn.addEventListener("click", () => {
  // Aktif addımı bir vahid azaldırıq
  currentActive--;

  // Aktif addımın 1-dən az olmamasını yoxlayırıq
  if (currentActive < 1) {
    currentActive = 1;
  }

  // Yeniləmə funksiyasını çağırırıq
  update();
});
