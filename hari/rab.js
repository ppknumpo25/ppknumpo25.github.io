// --- AREA PENGATURAN TUGAS ---
// Ubah, tambah, atau hapus tugas Anda di dalam daftar di bawah ini.
// Format Tanggal: "Bulan Hari, Tahun Jam:Menit:Detik" (Bulan dalam Bahasa Inggris)
document.addEventListener("DOMContentLoaded", function () {
  const tasks = [
    {
      title: "Ilmu Negara :<br> Membuat Pertanyaan",
      description:
        "buatlah pertanyaan dari pertanyaan tersebut silahkan untuk dijawab secera tertulis. <p style=text-align:;><b> 28 Oktober 2025 </p>",
      deadline: "Oct 28, 2025 11:59:59",
      jam: "1) 06:50 - 08:30 (R.B104)",
    },
    {
      title: "Ilmu Negara :<br> Book Chapter / Artikel",
      description:
        "Membuat book chapter atau Artikel+jurnal, Makalah+Video.<p style=text-align:;><b> 6 November 2025 </p>",
      deadline: "Nov 6, 2025 08:59:59",
      jam: "1) 06:50 - 08:30 (R.B104)",
    },
    {
      title: "Ilmu Politik :<br> Membuat Poster",
      description:
        "Poster membahas isu/problematika yang relevan dengan konsep teoritis ilmu politik.<p style=text-align:;><b> 29 Oktober 2025 </p>",
      deadline: "Oct 29, 2025 09:19:59",
      jam: "2) 09:20 - 11:00 (R.F401)",
    },
    {
      title: "Ilmu Politik :<br> Review 10 Artikel Ilmiah",
      description:
        "5 artikel Indonesia & 5 artikel internasional. <br><br> <p style=text-align:;><b> 14 Januari 2025 </p>",
      deadline: "Jan 14, 2026 09:19:59",
      jam: "2) 09:20 - 11:00 (R.F401)",
    },
    {
      title: "Ilmu Politik :<br> Analisis Sederhana",
      description:
        "Menghasilkan Presentasi Tokoh. <br><br> <p style=text-align:;><b> 06 November 2025 </p>",
      deadline: "Nov 06, 2025 06:49:59",
      jam: "1) 06:50 - 08:30 (R.F401)",
    },

    {
      title: "Pendidikan Ilmu Sosial :<br> Membuat Pertanyaan",
      description:
        "buatlah pertanyaan dari pertanyaan tersebut silahkan untuk dijawab secera tertulis. <p style=text-align:;><b> 28 November 2025 </p>",
      deadline: "Oct 28, 2025 11:59:59",
      jam: "3) 12:30 - 14:10 (R.F401)",
    },

    {
      title: "Pendidikan Ilmu Sosial :<br> Latar Belakang & Rumusan",
      description:
        "Membuat latar belakang dan rumusan dari judul yang sudah ditentukan.<p style=text-align:;><b> 19 November 2025 </p>",
      deadline: "Nov 19, 2025 12:30:59",
      jam: "3) 12:30 - 14:10 (R.F401)",
    },
  ];

  const container = document.querySelector(".task-container-rab");

  // Membuat HTML untuk setiap tugas
  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.id = `task-rab-${index}`;

    let descriptionHTML = task.description ? `<p>${task.description}</p>` : "";

    card.innerHTML = `
            <div class="jam"><p class="jampa">${task.jam}</p></div>
            <div class="titlediv"><h2>${task.title}</h2></div>
            ${descriptionHTML}
            <div class="countdown-wrapper">
                <div class="countdown" id="countdown-rab-${index}">
                    <div class="time-box" id="hari">
                        <div class="number" data-unit="days">0</div>
                        <div class="label">Hari</div>
                    </div>
                    <div class="time-box" id="jam">
                        <div class="number" data-unit="hours">0</div>
                        <div class="label">Jam</div>
                    </div>
                    <div class="time-box" id="menit">
                        <div class="number" data-unit="minutes">0</div>
                        <div class="label">Menit</div>
                    </div>
                    <div class="time-box" id="detik">
                        <div class="number" data-unit="seconds">0</div>
                        <div class="label">Detik</div>
                    </div>
                </div>
            </div>
        `;
    container.appendChild(card);
  });

  // Fungsi utama untuk mengupdate semua countdown
  function updateAllCountdowns() {
    const now = new Date().getTime();

    tasks.forEach((task, index) => {
      const countDownDate = new Date(task.deadline).getTime();
      const distance = countDownDate - now;

      const card = document.getElementById(`task-rab-${index}`);
      const countdownWrapper = card.querySelector(".countdown-wrapper");

      if (distance < 0) {
        // Jika waktu sudah habis
        countdownWrapper.innerHTML = `<div class="message overdue-msg">Tugas Selasai!</div>`;
        card.classList.add("overdue");
      } else {
        // Jika masih ada waktu
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownEl = document.getElementById(`countdown-rab-${index}`);
        countdownEl.querySelector('[data-unit="days"]').innerText = days;
        countdownEl.querySelector('[data-unit="hours"]').innerText = hours;
        countdownEl.querySelector('[data-unit="minutes"]').innerText = minutes;
        countdownEl.querySelector('[data-unit="seconds"]').innerText = seconds;

        // Tandai jika deadline sudah dekat (kurang dari 3 hari)
        if (days < 12) {
          card.classList.add("soon");
        }
      }
    });
  }

  // Jalankan fungsi update setiap detik
  setInterval(updateAllCountdowns, 1000);

  // Panggil fungsi sekali saat halaman dimuat
  updateAllCountdowns();
});
