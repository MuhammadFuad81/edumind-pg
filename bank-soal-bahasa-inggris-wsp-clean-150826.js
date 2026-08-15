const PG_CODE = 'bank_soal_bahasa_inggris_150826';
        const SESSION_KEY = 'akds_session_' + PG_CODE;
        const AUTOSAVE_KEY = 'akds_autosave_' + PG_CODE;

        const PILIHAN_KELAS = {
            'SD/MI': ['Fase A Kelas 1', 'Fase A Kelas 2', 'Fase B Kelas 3', 'Fase B Kelas 4', 'Fase C Kelas 5', 'Fase C Kelas 6'],
            'SMP/MTs': ['Fase D Kelas 7', 'Fase D Kelas 8', 'Fase D Kelas 9'],
            'SMA/MA': ['Fase E Kelas 10', 'Fase F Kelas 11', 'Fase F Kelas 12'],
            'SMK': ['Fase E Kelas 10', 'Fase F Kelas 11', 'Fase F Kelas 12']
        };

        const CAPAIAN_PEMBELAJARAN = {
            A: 'Keterangan: Capaian Pembelajaran Bahasa Inggris tidak tersedia untuk Fase A (Kelas 1 dan 2). Berdasarkan dokumen CP, pembelajaran Bahasa Inggris diwajibkan mulai Fase B karena pada Fase A murid masih berfokus pada kemampuan literasi dalam Bahasa Indonesia.',
            B: 'Fase B - Menyimak-Berbicara: Memahami dan merespon teks lisan atau teks multimodal sederhana tentang kehidupan sehari-hari baik secara verbal atau non-verbal sesuai konteks. Membaca-Memirsa: Memahami teks tulis pendek sederhana atau teks multimodal tentang kehidupan sehari-hari dan meresponsnya secara verbal atau non-verbal sesuai konteks. Menulis-Mempresentasikan: Mengomunikasikan gagasan tentang topik sehari-hari dalam teks tulis pendek atau teks multimodal sesuai konteks.',
            C: 'Fase C - Menyimak-Berbicara: Memahami alur informasi teks secara keseluruhan dan merespon teks lisan atau teks multimodal sederhana tentang topik sehari-hari secara lisan dengan kalimat pendek dan sederhana sesuai konteks. Membaca-Memirsa: Memahami alur informasi secara keseluruhan, gagasan utama dan informasi rinci dari beragam teks pendek atau teks multimodal tentang topik sehari-hari dan meresponnya sesuai konteks. Menulis-Mempresentasikan: Mengomunikasikan ide dan pengalamannya melalui berbagai jenis teks tulis sederhana atau teks multimodal tentang topik sehari-hari sesuai konteks.',
            D: 'Fase D - Menyimak-Berbicara: Memahami alur informasi secara keseluruhan, gagasan utama dan informasi rinci dari teks lisan tentang topik sehari-hari atau yang sesuai dengan minat; menggunakan Bahasa Inggris untuk mengungkapkan gagasan dan pengalaman dalam berbagai jenis teks secara lisan dengan kalimat sederhana dan majemuk, baik formal maupun informal sesuai konteks. Membaca-Memirsa: Memahami alur informasi, informasi tersurat dan tersirat dari berbagai jenis teks tertulis atau teks multimodal tentang topik sehari-hari atau yang sesuai dengan minat dan meresponnya sesuai konteks. Menulis-Mempresentasikan: Mengomunikasikan gagasan dan pengalaman dalam berbagai jenis teks tertulis atau multimodal tentang topik sehari-hari atau yang sesuai dengan minat dengan mulai menggunakan kalimat sederhana dan majemuk, struktur teks, dan unsur kebahasaan yang tepat; mengungkapkan pendapat dan mempertahankan argumen.',
            E: 'Fase E - Menyimak-Berbicara: Memahami alur informasi secara keseluruhan, gagasan utama dan detail dalam teks lisan fiksi dan nonfiksi mengenai berbagai topik yang relevan dengan kehidupan sehari-hari atau isu terkini; menggunakan Bahasa Inggris untuk mengungkapkan pendapat dan mempertahankan argumen. Membaca-Memirsa: Memahami alur informasi secara keseluruhan, menganalisis dan menyimpulkan informasi tersurat dan tersirat dari berbagai jenis teks fiksi dan nonfiksi tertulis atau teks multimodal tentang topik sehari-hari atau isu terkini. Menulis-Mempresentasikan: Mengomunikasikan gagasan dan pengalaman secara tertulis atau multimodal dalam berbagai jenis teks fiksi dan nonfiksi menggunakan berbagai media presentasi untuk mencapai tujuan tertentu dengan struktur teks dan unsur kebahasaan yang tepat; mengungkapkan pendapat dan mempertahankan argumen.',
            F: 'Fase F - Menyimak-Berbicara: Memahami alur informasi secara keseluruhan dari teks lisan fiksi dan nonfiksi tentang isu terkini atau topik terkait mata pelajaran lain; menggunakan Bahasa Inggris untuk mengungkapkan pendapat dan mempertahankan argumen. Membaca-Memirsa: Mengevaluasi informasi tersurat dan tersirat dari berbagai jenis teks fiksi dan nonfiksi tertulis atau teks multimodal tentang isu terkini atau topik terkait mata pelajaran lain. Menulis-Mempresentasikan: Mengomunikasikan gagasan atau pengalaman secara tertulis atau multimodal dalam berbagai jenis teks fiksi dan nonfiksi dengan struktur teks dan unsur kebahasaan yang tepat dan kompleks menggunakan berbagai media presentasi untuk mencapai tujuan yang berbeda-beda; menunjukkan strategi koreksi dalam kaidah menulis; mengungkapkan pendapat dan mempertahankan argumen.'
        };

        const JUMLAH_BENTUK = [
            ['Pilihan Ganda', 'jumlah_pg'],
            ['Pilihan Ganda Kompleks', 'jumlah_pg_kompleks'],
            ['Benar-Salah', 'jumlah_benar_salah'],
            ['Menjodohkan', 'jumlah_menjodohkan'],
            ['Isian Singkat', 'jumlah_isian'],
            ['Uraian', 'jumlah_uraian'],
            ['Studi Kasus', 'jumlah_studi_kasus']
        ];

        function handleLogin(event) {
            if (event) event.preventDefault();
            const loginScreen = document.getElementById('login-screen');
            const validUsername = loginScreen.dataset.loginUsername || 'edumind';
            const validPassword = loginScreen.dataset.loginPassword || '';
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorBox = document.getElementById('login-error');

            if (username === validUsername && password === validPassword) {
                errorBox.classList.add('hidden');
                sessionStorage.setItem(SESSION_KEY, 'active');
                showApp();
            } else {
                errorBox.classList.remove('hidden');
            }
            return false;
        }

        function togglePasswordVisibility() {
            const input = document.getElementById('password');
            const button = document.getElementById('toggle-password');
            const icon = document.getElementById('password-eye-icon');
            const showPassword = input.type === 'password';

            input.type = showPassword ? 'text' : 'password';
            icon.className = showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
            button.setAttribute('aria-pressed', String(showPassword));
            button.setAttribute('aria-label', showPassword ? 'Sembunyikan password' : 'Tampilkan password');
            button.title = showPassword ? 'Sembunyikan password' : 'Tampilkan password';
            input.focus();
        }

        function handleLogout() {
            sessionStorage.removeItem(SESSION_KEY);
            showLogin();
        }

        function showApp() {
            document.getElementById('login-screen').classList.add('hidden');
            const app = document.getElementById('app-screen');
            app.classList.remove('hidden');
            app.classList.add('flex');
        }

        function showLogin() {
            const app = document.getElementById('app-screen');
            app.classList.add('hidden');
            app.classList.remove('flex');
            document.getElementById('login-screen').classList.remove('hidden');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }

        function updateJenjangDanPilihan(preferredClass) {
            const jenjang = document.getElementById('jenjang_pendidikan').value;
            const select = document.getElementById('fase_kelas');
            const previous = preferredClass || select.value;
            const classes = PILIHAN_KELAS[jenjang] || [];
            select.innerHTML = classes.map(value => `<option value="${value}">${value}</option>`).join('');
            if (classes.includes(previous)) select.value = previous;
            else if (jenjang === 'SD/MI') select.value = 'Fase B Kelas 3';
            updateCapaianPembelajaran();
            scheduleAutosave();
        }

        function updateCapaianPembelajaran() {
            const faseKelas = document.getElementById('fase_kelas').value;
            const match = faseKelas.match(/Fase\s+([A-F])/);
            const fase = match ? match[1] : 'B';
            const cpField = document.getElementById('capaian_pembelajaran');
            const status = document.getElementById('cp-status');
            cpField.value = CAPAIAN_PEMBELAJARAN[fase] || CAPAIAN_PEMBELAJARAN.B;

            if (status) {
                if (fase === 'A') {
                    status.textContent = 'Tidak ada CP Bahasa Inggris untuk Fase A. Dokumen resmi menetapkan pembelajaran wajib mulai Fase B.';
                    status.className = 'text-[11px] text-amber-700 mt-1 font-semibold';
                } else {
                    status.textContent = 'CP resmi Bahasa Inggris diperbarui otomatis berdasarkan fase yang dipilih.';
                    status.className = 'text-[11px] text-emerald-700 mt-1';
                }
            }
            scheduleAutosave();
        }

        function updateIndikatorSoal() {
            const tp = document.getElementById('tujuan_pembelajaran').value.trim();
            if (tp) {
                document.getElementById('indikator_soal').value = `Peserta didik mampu menunjukkan ketercapaian tujuan berikut melalui jawaban yang tepat: ${tp}`;
            }
            scheduleAutosave();
        }

        function toggleJenisStimulus() {
            const wrapper = document.getElementById('wrapper_jenis_stimulus');
            wrapper.style.display = document.getElementById('stimulus_soal').value === 'Ya' ? '' : 'none';
            scheduleAutosave();
        }

        function ubahBab(delta) {
            const input = document.getElementById('bab_ke');
            const match = (input.value || '').match(/\d+/);
            let value = match ? parseInt(match[0], 10) : 1;
            value = Math.max(1, value + delta);
            input.value = 'BAB ' + value;
            scheduleAutosave();
        }

        function getSelectedCheckboxes(name, fallback) {
            const values = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(item => item.value);
            return values.length ? values.join(', ') : fallback;
        }

        function updateJumlahSoalTotal() {
            let total = 0;
            JUMLAH_BENTUK.forEach(([name, id]) => {
                const value = Math.max(0, Number(document.getElementById(id).value) || 0);
                total += value;
                const checkbox = document.querySelector(`input[name="bentuk_soal"][value="${name}"]`);
                if (checkbox) checkbox.checked = value > 0;
            });
            document.getElementById('jumlah_soal').value = total;
            scheduleAutosave();
        }

        function getDistribusiBentuk() {
            return JUMLAH_BENTUK
                .map(([name, id]) => [name, Math.max(0, Number(document.getElementById(id).value) || 0)])
                .filter(([, count]) => count > 0)
                .map(([name, count]) => `${name}: ${count} butir`)
                .join('; ');
        }

        function showValidation(message, isError = true) {
            const box = document.getElementById('validation-message');
            box.textContent = message;
            box.className = isError
                ? 'p-3 rounded-xl border text-sm allow-select bg-red-50 border-red-200 text-red-700'
                : 'p-3 rounded-xl border text-sm allow-select bg-emerald-50 border-emerald-200 text-emerald-700';
            box.classList.remove('hidden');
            if (isError) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        function hideValidation() {
            document.getElementById('validation-message').classList.add('hidden');
        }

        function validateForm() {
            const required = [
                ['nama_sekolah', 'Nama Sekolah'],
                ['bab_ke', 'BAB Ke-'],
                ['judul_bab', 'Judul Bab'],
                ['topik_unit', 'Topik/Unit Pembelajaran'],
                ['capaian_pembelajaran', 'CP/kompetensi acuan'],
                ['tujuan_pembelajaran', 'Tujuan Pembelajaran'],
                ['indikator_soal', 'Indikator Soal']
            ];
            for (const [id, label] of required) {
                const element = document.getElementById(id);
                if (!element.value.trim()) {
                    showValidation(`${label} wajib diisi.`);
                    element.focus();
                    return false;
                }
            }

            updateJumlahSoalTotal();
            const total = Number(document.getElementById('jumlah_soal').value) || 0;
            if (total < 1) {
                showValidation('Jumlah soal harus lebih dari 0.');
                return false;
            }

            const difficulty = ['kesulitan_mudah', 'kesulitan_sedang', 'kesulitan_sulit']
                .reduce((sum, id) => sum + (Number(document.getElementById(id).value) || 0), 0);
            if (difficulty !== 100) {
                showValidation(`Total proporsi tingkat kesulitan harus 100%. Saat ini ${difficulty}%.`);
                return false;
            }
            hideValidation();
            return true;
        }

        function loadContohBahasaInggrisKelas3() {
            document.getElementById('jenjang_pendidikan').value = 'SD/MI';
            updateJenjangDanPilihan('Fase B Kelas 3');
            document.getElementById('fase_kelas').value = 'Fase B Kelas 3';
            document.getElementById('mata_pelajaran').value = 'Bahasa Inggris';
            document.getElementById('bab_ke').value = 'BAB 1';
            document.getElementById('judul_bab').value = 'Hello! How Are You?';
            document.getElementById('topik_unit').value = 'Greetings, leave-taking, thanking, apologizing, serta ungkapan sederhana untuk memperkenalkan diri dalam konteks kehidupan sehari-hari';
            document.getElementById('capaian_pembelajaran').value = CAPAIAN_PEMBELAJARAN.B;
            document.getElementById('tujuan_pembelajaran').value = 'Memahami dan merespon ungkapan sapaan, perpisahan, terima kasih, dan permintaan maaf; menggunakan ungkapan tersebut secara lisan dalam dialog sederhana; serta menulis kalimat perkenalan diri yang sangat sederhana sesuai konteks.';
            document.getElementById('indikator_soal').value = 'Peserta didik mampu memilih ungkapan greeting dan leave-taking yang tepat, melengkapi dialog sederhana, mencocokkan ungkapan dengan responsnya, serta menulis perkenalan diri singkat menggunakan kosakata dan pola kalimat yang sesuai.';
            document.getElementById('nama_file_pdf').value = '';
            document.getElementById('bab_sumber').value = 'Bab 1';
            document.getElementById('halaman_sumber').value = '';
            document.getElementById('fokus_file_referensi').value = 'Greetings, leave-taking, thanking, apologizing, dan self-introduction sederhana';
            document.getElementById('bahasa_soal').value = 'Bahasa Inggris sederhana dengan petunjuk Bahasa Indonesia seperlunya, sesuai usia siswa SD';
            document.getElementById('gaya_soal').value = 'Berbasis konteks kehidupan sehari-hari';
            const counts = { jumlah_pg: 15, jumlah_pg_kompleks: 0, jumlah_benar_salah: 0, jumlah_menjodohkan: 0, jumlah_isian: 5, jumlah_uraian: 5, jumlah_studi_kasus: 0 };
            Object.entries(counts).forEach(([id, value]) => { document.getElementById(id).value = value; });
            updateJumlahSoalTotal();
            updateCapaianPembelajaran();
            showValidation('Contoh Bahasa Inggris Kelas 3 Bab 1 berhasil dimuat.', false);
            saveFormState();
        }

        function clearForm() {
            localStorage.removeItem(AUTOSAVE_KEY);
            loadContohBahasaInggrisKelas3();
            document.getElementById('nama_sekolah').value = '';
            document.getElementById('outputPrompt').textContent = 'Formulir telah direset ke contoh Bahasa Inggris Kelas 3 Bab 1.';
            hideValidation();
            saveFormState();
        }

        function getFormState() {
            const state = {};
            document.querySelectorAll('#app-content input[id], #app-content textarea[id], #app-content select[id]').forEach(element => {
                state[element.id] = element.value;
            });
            state.checkboxes = Array.from(document.querySelectorAll('#app-content input[type="checkbox"]')).map(element => ({ name: element.name, value: element.value, checked: element.checked }));
            return state;
        }

        function saveFormState() {
            try {
                localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(getFormState()));
                const status = document.getElementById('autosave-status');
                if (status) status.textContent = 'Konfigurasi terakhir tersimpan otomatis di perangkat ini.';
            } catch (error) {
                const status = document.getElementById('autosave-status');
                if (status) status.textContent = 'Penyimpanan otomatis tidak tersedia pada browser ini.';
            }
        }

        let autosaveTimer;
        function scheduleAutosave() {
            clearTimeout(autosaveTimer);
            autosaveTimer = setTimeout(saveFormState, 300);
        }

        function restoreFormState() {
            let state;
            try { state = JSON.parse(localStorage.getItem(AUTOSAVE_KEY) || 'null'); } catch (error) { state = null; }
            if (!state) return false;
            if (state.jenjang_pendidikan) document.getElementById('jenjang_pendidikan').value = state.jenjang_pendidikan;
            updateJenjangDanPilihan(state.fase_kelas);
            Object.entries(state).forEach(([id, value]) => {
                if (id === 'checkboxes' || id === 'jenjang_pendidikan' || id === 'fase_kelas') return;
                const element = document.getElementById(id);
                if (element) element.value = value;
            });
            if (state.fase_kelas) document.getElementById('fase_kelas').value = state.fase_kelas;
            (state.checkboxes || []).forEach(item => {
                const element = document.querySelector(`input[type="checkbox"][name="${item.name}"][value="${item.value}"]`);
                if (element) element.checked = item.checked;
            });
            updateJumlahSoalTotal();
            toggleJenisStimulus();
            return true;
        }

        function generatePromptBankSoal() {
            if (!validateForm()) return;

            const value = id => document.getElementById(id).value.trim();
            const namaSekolah = value('nama_sekolah');
            const jenjang = value('jenjang_pendidikan');
            const faseKelas = value('fase_kelas');
            const mapel = value('mata_pelajaran');
            const babKe = value('bab_ke');
            const judulBab = value('judul_bab');
            const topikUnit = value('topik_unit');
            const cp = value('capaian_pembelajaran');
            const tp = value('tujuan_pembelajaran');
            const indikator = value('indikator_soal');
            const namaPdf = value('nama_file_pdf') || 'Tidak dicantumkan';
            const babSumber = value('bab_sumber') || babKe;
            const halamanSumber = value('halaman_sumber') || 'Tidak dicantumkan';
            const fokusFile = value('fokus_file_referensi') || topikUnit;
            const totalSoal = value('jumlah_soal');
            const distribusi = getDistribusiBentuk();
            const bentukSoal = getSelectedCheckboxes('bentuk_soal', 'Sesuai distribusi jumlah per bentuk');
            const dimensi = getSelectedCheckboxes('dimensi_profil_lulusan', 'Nalar Kritis, Kreativitas, Komunikasi');
            const level = getSelectedCheckboxes('level_kognitif', 'L1 (Knowing), L2 (Applying), L3 (Reasoning)');
            const proporsiLevel = value('proporsi_level') || 'Seimbang dan sesuai karakter materi';
            const kesulitan = `Mudah ${value('kesulitan_mudah')}%, Sedang ${value('kesulitan_sedang')}%, Sulit ${value('kesulitan_sulit')}%`;
            const konteks = getSelectedCheckboxes('konteks_soal', 'Kehidupan Sehari-hari, Lingkungan Sekolah, Budaya dan Komunikasi Global');
            const gunakanStimulus = value('stimulus_soal');
            const stimulus = gunakanStimulus === 'Ya' ? getSelectedCheckboxes('jenis_stimulus', 'Teks Bacaan') : 'Tidak menggunakan stimulus';
            const bahasa = value('bahasa_soal');
            const gaya = value('gaya_soal');
            const peruntukan = value('catatan_peruntukan') || 'Fleksibel untuk asesmen diagnostik, formatif, sumatif, latihan, atau ujian sesuai kebutuhan guru';
            const formatBank = value('format_bank_soal');
            const formatOutput = value('format_output_ai');
            const komponen = getSelectedCheckboxes('komponen_bank_soal', 'Nomor Soal, Butir Soal, Kunci Jawaban');
            const kunci = value('sertakan_kunci_jawaban');
            const pembahasan = value('sertakan_pembahasan');
            const penskoran = value('sertakan_pedoman_penskoran');
            const catatan = value('catatan_khusus_penyusunan_soal') || 'Hindari soal jebakan dan gunakan redaksi yang santun, jelas, serta sesuai usia peserta didik.';
            const tambahan = value('instruksiTambahan');

            const prompt = `Bertindaklah sebagai pakar pembelajaran Bahasa Inggris, ahli evaluasi pendidikan, dan penyusun bank soal Kurikulum Merdeka yang teliti. Susun bank soal yang valid, komunikatif, sesuai fase perkembangan bahasa, kontekstual, dan siap digunakan berdasarkan parameter berikut.

### 0. ATURAN SUMBER MATERI - WAJIB
- Jika file materi ajar dilampirkan dalam percakapan ini, baca file tersebut terlebih dahulu dan jadikan sebagai ACUAN UTAMA. Jangan mengarang kosakata, struktur bahasa, fungsi sosial, jenis teks, atau materi di luar cakupan file.
- Nama file yang diharapkan: ${namaPdf}
- Bagian rujukan: ${babSumber}; ${halamanSumber}
- Fokus materi: ${fokusFile}
- CP pada formulir dipetakan otomatis dari dokumen resmi Bahasa Inggris sesuai fase. Selaraskan TP dan indikator dengan CP tersebut serta isi file materi yang dilampirkan; jangan memperluas soal keluar dari materi file.
- Jika tidak ada file yang dilampirkan, gunakan CP/kompetensi, TP, indikator, topik, dan catatan pada formulir sebagai batas materi.
- Pastikan kosakata, ejaan, tata bahasa, tanda baca, fungsi sosial, struktur teks, unsur kebahasaan, dan penggunaan Bahasa Inggris akurat serta sesuai tingkat kemampuan murid.
- Gunakan konteks yang santun, inklusif, komunikatif, menghargai keragaman budaya, dan relevan dengan kehidupan murid di Indonesia.

### 1. IDENTITAS
- Nama Sekolah: ${namaSekolah}
- Jenjang: ${jenjang}
- Fase/Kelas: ${faseKelas}
- Mata Pelajaran: ${mapel}

### 2. BAB DAN KOMPETENSI
- BAB: ${babKe}
- Judul Bab: ${judulBab}
- Topik/Unit: ${topikUnit}
- CP/Kompetensi Acuan: ${cp}
- Tujuan Pembelajaran: ${tp}
- Indikator Soal: ${indikator}

### 3. STRUKTUR BANK SOAL
- Total Soal: ${totalSoal} butir
- Distribusi Wajib: ${distribusi}
- Bentuk Soal: ${bentukSoal}
- Tingkat Kesulitan: ${kesulitan}
- Level Kognitif: ${level}
- Proporsi Level: ${proporsiLevel}
- Dimensi Profil Lulusan: ${dimensi}

### 4. KONTEKS DAN PENYAJIAN
- Konteks: ${konteks}
- Gunakan Stimulus: ${gunakanStimulus}
- Jenis Stimulus: ${stimulus}
- Bahasa: ${bahasa}
- Gaya: ${gaya}
- Peruntukan: ${peruntukan}

### 5. FORMAT OUTPUT
- Format Bank Soal: ${formatBank}
- Format Output dari AI: ${formatOutput}
- Komponen: ${komponen}
- Sertakan Kunci Jawaban: ${kunci}
- Sertakan Pembahasan: ${pembahasan}
- Sertakan Pedoman Penskoran: ${penskoran}

### 6. CATATAN
- Catatan Khusus: ${catatan}${tambahan ? `\n- Instruksi Tambahan: ${tambahan}` : ''}

### TUGAS AKHIR
Susun tepat ${totalSoal} butir sesuai distribusi wajib (${distribusi}). Pastikan setiap soal terhubung dengan TP dan indikator, tidak berulang, tidak saling membocorkan jawaban, serta seluruh jawaban dapat diverifikasi dari file atau parameter materi. Jika satu stimulus digunakan untuk beberapa soal, setiap butir harus tetap independen. Cantumkan sumber halaman pada setiap kelompok soal apabila file menyediakan nomor halaman.

${formatOutput.includes('.docx') ? 'Buat hasil akhir sebagai file Microsoft Word (.docx) yang rapi, siap diunduh, dengan tabel yang tidak terpotong. Lampirkan file tersebut pada jawaban.' : 'Tampilkan hasil lengkap langsung dalam percakapan tanpa placeholder atau bagian yang terpotong.'}`;

            document.getElementById('outputPrompt').textContent = prompt;
            document.getElementById('output-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            showValidation('Prompt berhasil dibuat.', false);
            saveFormState();
        }

        function copyToClipboard() {
            const text = document.getElementById('outputPrompt').textContent;
            if (!text || text.includes('Isi data pada formulir')) {
                showValidation('Hasilkan prompt terlebih dahulu sebelum menyalin.', true);
                return;
            }
            navigator.clipboard.writeText(text).then(() => {
                const label = document.getElementById('copyText');
                label.textContent = 'Tersalin!';
                setTimeout(() => { label.textContent = 'Salin Prompt'; }, 1800);
            }).catch(() => showValidation('Prompt tidak dapat disalin otomatis. Pilih teks pada kotak output lalu salin secara manual.', true));
        }

        function downloadPromptTxt() {
            const text = document.getElementById('outputPrompt').textContent;
            if (!text || text.includes('Isi data pada formulir')) {
                showValidation('Hasilkan prompt terlebih dahulu sebelum mengunduh.', true);
                return;
            }
            const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'prompt-bank-soal-bahasa-inggris.txt';
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('login-button').addEventListener('click', handleLogin);
            document.getElementById('login-form').addEventListener('submit', handleLogin);
            document.getElementById('password').addEventListener('keydown', event => {
                if (event.key === 'Enter') handleLogin(event);
            });

            if (!restoreFormState()) updateJenjangDanPilihan('Fase B Kelas 3');
            updateJumlahSoalTotal();
            toggleJenisStimulus();

            document.querySelectorAll('#app-content input, #app-content textarea, #app-content select').forEach(element => {
                element.addEventListener('change', scheduleAutosave);
                if (!element.readOnly) element.addEventListener('input', scheduleAutosave);
            });

            if (sessionStorage.getItem(SESSION_KEY) === 'active') showApp();
            else showLogin();
        });

        document.addEventListener('contextmenu', event => event.preventDefault());


