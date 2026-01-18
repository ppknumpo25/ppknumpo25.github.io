// --- AREA PENGATURAN TUGAS ---
    // Ubah, tambah, atau hapus tugas Anda di dalam daftar di bawah ini.
    // Format Tanggal: "Bulan Hari, Tahun Jam:Menit:Detik" (Bulan dalam Bahasa Inggris)
        document.addEventListener('DOMContentLoaded', function(){

               const tasks = [
                  
        {
            title: "Pancasila :<br> Analisis Sederhana",
            description: "Menghasilkan Presentasi. <br><br> <p style=text-align:;><b> 16 Oktober 2025 </p>",
            deadline: "Oct 16, 2025 06:49:59",
            jam: "1) 06:50 - 08:30 (R.F401)",       
        },
        
        {
            title: "Pancasila :<br> Studi Kasus",
            description: "Menghasilkan laporan 7-10 halaman dan produk kreatif.<p style=text-align:;><b> 6 November 2025 </p>",
            deadline: "Nov 6, 2025 06:49:59",
            jam: "1) 06:50 - 08:30 (R.F401)",
        },
        {
            title: "Pancasila :<br> Riset Sederhana",
            description: "Menghasilkan laporan singkat 5 halaman dan produk kreatif. <p style=text-align:;><b> 18 Desember 2025 </p>",
            deadline: "Dec 18, 2025 06:49:59",
            jam: "1) 06:50 - 08:30 (R.B104)",       
        },
        {
            title: "Pengantar Ilmu Hukum :<br> Membuat Makalah",
            description: "membuat makalah dan dipresentasikan. <p style=text-align:;><b> 24 November 2025 </p>",
            deadline: "Nov 24, 2025 06:49:59",
            jam: "2) 10:10 - 11:50 (R.B104)",       
        },
        {
            title: "Teori Pembelajaran :<br> Merangkum & Poster",
            description: "Deadline bertahap: 16, 23, & 30 Oktober. Countdown menuju deadline pertama. <p style=text-align:;><b> 16 Oktober 2025 </p>",
            deadline: "Oct 16, 2025 12:19:59",
            jam: "3) 12:30 - 14:10 (R.B104)",
        },

    ];

    const container = document.querySelector('.task-container-kam');

    // Membuat HTML untuk setiap tugas
    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.className = 'task-card';
        card.id = `task-kam-${index}`;

        let descriptionHTML = task.description ? `<p>${task.description}</p>` : '';

        card.innerHTML = `
            <div class="jam"><p class="jampa">${task.jam}</p></div>
            <div class="titlediv"><h2>${task.title}</h2></div>
            ${descriptionHTML}
            <div class="countdown-wrapper">
                <div class="countdown" id="countdown-kam-${index}">
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

            const card = document.getElementById(`task-kam-${index}`);
            const countdownWrapper = card.querySelector('.countdown-wrapper');

            if (distance < 0) {
                // Jika waktu sudah habis
                countdownWrapper.innerHTML = `<div class="message overdue-msg">Tugas Selasai!</div>`;
                card.classList.add('overdue');
            } else {
                // Jika masih ada waktu
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const countdownEl = document.getElementById(`countdown-kam-${index}`);
                countdownEl.querySelector('[data-unit="days"]').innerText = days;
                countdownEl.querySelector('[data-unit="hours"]').innerText = hours;
                countdownEl.querySelector('[data-unit="minutes"]').innerText = minutes;
                countdownEl.querySelector('[data-unit="seconds"]').innerText = seconds;

                // Tandai jika deadline sudah dekat (kurang dari 3 hari)
                if(days < 12) {
                    card.classList.add('soon');
                }
            }
        });
    }

    // Jalankan fungsi update setiap detik
    setInterval(updateAllCountdowns, 1000);

    // Panggil fungsi sekali saat halaman dimuat
    updateAllCountdowns();
});