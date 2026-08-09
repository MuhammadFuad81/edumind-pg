/* Konfigurasi eksternal untuk Prompt Generator Bank Soal IPA-IPS-IPAS. */
(function () {
    const keterampilanSains = 'Murid menerapkan keterampilan proses: mengamati; mempertanyakan dan memprediksi; merencanakan dan melakukan penyelidikan; memproses dan menganalisis data; mengevaluasi dan merefleksi; serta mengomunikasikan hasil secara ilmiah.';
    window.PG_BANK_SOAL_CONFIG = {
        pilihanPerJenjang: {
            'SD/MI': { mapel: ['IPAS'], kelas: ['Fase B Kelas 3', 'Fase B Kelas 4', 'Fase C Kelas 5', 'Fase C Kelas 6'] },
            'SMP/MTs': { mapel: ['IPA', 'IPS'], kelas: ['Fase D Kelas 7', 'Fase D Kelas 8', 'Fase D Kelas 9'] },
            'SMA/MA': { mapel: ['IPA', 'IPS', 'Biologi', 'Fisika', 'Kimia', 'Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Sejarah Tingkat Lanjut', 'Antropologi'], kelas: ['Fase E Kelas 10', 'Fase F Kelas 11', 'Fase F Kelas 12'] },
            'SMK': { mapel: ['IPA', 'IPS', 'Biologi', 'Fisika', 'Kimia', 'Ekonomi', 'Geografi', 'Sosiologi', 'Sejarah', 'Sejarah Tingkat Lanjut', 'Antropologi'], kelas: ['Fase E Kelas 10', 'Fase F Kelas 11', 'Fase F Kelas 12'] }
        },
        cpPerMapelFase: {
            'IPAS|Fase B': 'Pada akhir Fase B, murid menjelaskan bentuk dan fungsi pancaindra; menganalisis siklus hidup makhluk hidup dan upaya pelestariannya; menghasilkan solusi pelestarian sumber daya alam sebagai mitigasi perubahan iklim; menyimpulkan perubahan wujud zat; menjelaskan sumber dan bentuk energi serta perubahan bentuk energi dalam kehidupan sehari-hari; membedakan jenis gaya dan pengaruhnya; menjelaskan peran, tugas, tanggung jawab, dan interaksi sosial di sekitar; mengenali letak kabupaten/kota dan provinsi dengan peta; mengklasifikasikan bentang alam dan keterkaitannya dengan profesi serta budaya; menganalisis sejarah masyarakat sekitar; serta menjelaskan nilai dan fungsi uang serta pengelolaan keuangan bijak. Murid menerapkan keterampilan proses: mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan penyelidikan dengan panduan pendidik, mengorganisasikan data sederhana, mengevaluasi dan merefleksi, serta mengomunikasikan hasil secara lisan dan tertulis.',
            'IPAS|Fase C': 'Pada akhir Fase C, murid merefleksikan sistem organ tubuh manusia dan cara menjaga kesehatan; menganalisis hubungan komponen biotik dan abiotik serta pengaruhnya terhadap ekosistem; menjelaskan gelombang bunyi dan cahaya dalam kehidupan sehari-hari; menghasilkan upaya penghematan energi dan pemanfaatan energi alternatif sebagai mitigasi perubahan iklim; menjelaskan tata surya serta kaitannya dengan rotasi dan revolusi bumi; menjelaskan letak dan kondisi geografis Indonesia dengan peta; meninjau sejarah perjuangan pahlawan di sekitar; menemukan keragaman budaya nasional berdasarkan kearifan lokal; serta menerapkan kegiatan ekonomi masyarakat sekitar. Murid menerapkan keterampilan proses mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan penyelidikan, mengolah dan menganalisis data, mengevaluasi dan merefleksi, serta mengomunikasikan hasil secara utuh.',
            'IPA|Fase D': 'Pada akhir Fase D, murid menelaah identifikasi makhluk hidup; menganalisis klasifikasi, sifat, dan perubahan materi; sistem organisasi kehidupan; interaksi makhluk hidup dan lingkungan dalam upaya perubahan iklim; pewarisan sifat; bioteknologi konvensional; pengukuran aspek fisis; gerak, gaya, tekanan, usaha dan energi; kalor; gelombang; kemagnetan dan kelistrikan; posisi bumi-bulan-matahari; serta keputusan untuk menghindari zat aditif dan adiktif berbahaya. Murid menerapkan keterampilan proses mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan penyelidikan, memproses dan menganalisis data, mengevaluasi dan merefleksi, serta mengomunikasikan hasil secara sistematis.',
            'IPA|Fase E': 'Pada akhir Fase E, murid menerapkan prinsip klasifikasi dan strategi pelestarian keanekaragaman hayati; mendeskripsikan peranan virus, bakteri, dan jamur; menganalisis interaksi komponen ekosistem dan pengaruhnya terhadap keseimbangan ekosistem; menggunakan sistem pengukuran dalam kerja ilmiah; menganalisis gerak dua dimensi; menganalisis pemanfaatan energi alternatif; menganalisis partikel penyusun materi dan menerapkan konsep stoikiometri; serta menerapkan konsep IPA untuk mengatasi permasalahan perubahan iklim. Murid menerapkan keterampilan proses mengamati, mempertanyakan dan memprediksi, merencanakan dan melakukan penyelidikan, memproses dan menganalisis data, mengevaluasi dan merefleksi, serta mengomunikasikan hasil secara sistematis.',
            'IPS|Fase D': 'Pada akhir Fase D, murid menjelaskan keberagaman kondisi geografis Indonesia dan konektivitas antarruang; memprediksi dampak perubahan iklim serta merefleksikan adaptasi dan mitigasi bencana; mengidentifikasi kegiatan ekonomi, harga, pasar, lembaga keuangan, dan perdagangan internasional; menelaah peran masyarakat dan negara dalam pertumbuhan ekonomi digital; mengelaborasi interaksi sosial, lembaga sosial, dinamika sosial, dan perubahan sosial budaya; menjelaskan konsep dasar sejarah; serta menganalisis keterhubungan masa lampau, kini, dan masa depan dalam sejarah lokal, nasional, dan global. Murid menerapkan keterampilan proses mengamati, menanya, mengumpulkan dan mengolah informasi, menguji dan menerapkan konsep, mengevaluasi, merefleksi, serta mengomunikasikan hasil penyelidikan.',
            'IPS|Fase E': 'Pada akhir Fase E, murid menjelaskan konsep dasar geografi serta fenomena geografi fisik melalui litosfer, atmosfer, dan hidrosfer sebagai ruang hidup; mengimplementasikan teknologi geospasial berupa peta, penginderaan jauh, dan SIG; menelaah hakikat ilmu ekonomi dan membedakan produk keuangan bank dan nonbank; menjelaskan fungsi sosiologi dan menelaah status serta peran individu dalam kelompok sosial; menganalisis keragaman manusia dan budaya dalam masyarakat multikultural; serta menelaah konsep dasar sejarah dan mengimplementasikan penelitian sejarah dari masa kerajaan Hindu-Buddha hingga kerajaan Islam. Murid menerapkan keterampilan proses mengamati, membuat pertanyaan, mengumpulkan dan menyimpulkan informasi, mengomunikasikan hasil analisis, merefleksi, dan menyusun tindak lanjut.',
            'Biologi|Fase F': 'Pada akhir Fase F, murid mengaitkan hubungan struktur dan fungsi organel sel; menerapkan prinsip bioproses dalam sel; menganalisis keterkaitan antarsistem organ dalam merespons stimulus; menerapkan prinsip pewarisan sifat, pertumbuhan dan perkembangan; mengaitkan mekanisme evolusi dengan keanekaragaman dan kelangsungan hidup organisme; serta menganalisis proses bioteknologi modern. ' + keterampilanSains,
            'Fisika|Fase F': 'Pada akhir Fase F, murid menganalisis hubungan gerak dan gaya serta pemanfaatannya; membuat karya penerapan hukum fluida; menganalisis kalor dan termodinamika untuk mengidentifikasi perubahan iklim; menganalisis gelombang dan penerapannya; mengevaluasi rangkaian listrik; menganalisis fenomena elektromagnetik; menganalisis teori dasar fisika modern dan pengaruhnya terhadap teknologi; serta menerapkan teori dasar digital dalam kehidupan sehari-hari. ' + keterampilanSains,
            'Kimia|Fase F': 'Pada akhir Fase F, murid menganalisis hubungan struktur atom dengan sistem periodik; membandingkan ikatan kimia dan kaitannya dengan bentuk molekul serta gaya antarmolekul; mengaitkan perubahan entalpi standar dengan sumber energi di lingkungan; menganalisis faktor laju reaksi dan kesetimbangan kimia; menjelaskan daya hantar listrik serta sifat koligatif larutan; menjelaskan sel elektrokimia dalam kehidupan sehari-hari; serta menjelaskan senyawa karbon dan makromolekul. ' + keterampilanSains,
            'Ekonomi|Fase F': 'Pada akhir Fase F, murid menjelaskan konsep dasar ekonomi; mengidentifikasi dan menganalisis masalah ekonomi serta keuangan, termasuk literasi ekonomi dan keuangan digital; memahami pendapatan nasional, pertumbuhan ekonomi, kemiskinan, kesenjangan, dan solusinya; ketenagakerjaan; uang, peredaran uang, inflasi, dan kebijakan moneter; akuntansi keuangan dasar; kebijakan fiskal, anggaran negara/daerah, perpajakan; serta ekonomi internasional. Murid mengamati, mempertanyakan, mengumpulkan dan menganalisis informasi ekonomi, menarik kesimpulan dan solusi, mengomunikasikan serta merefleksikan hasilnya, dan merencanakan projek kolaboratif.',
            'Geografi|Fase F': 'Pada akhir Fase F, murid menganalisis keuntungan posisi strategis Indonesia secara astronomis, geografis, dan geologis serta pemanfaatan sumber daya alam; memahami pola keanekaragaman hayati Indonesia dan dunia; karakteristik geografi penduduk Indonesia; perubahan iklim, kebencanaan, dan lingkungan hidup; serta kewilayahan, pembangunan, dan kerja sama antarnegara. Murid mengamati fenomena, mengajukan pertanyaan ilmiah, mengumpulkan serta mendokumentasikan data, menganalisis dan menyimpulkan, mengomunikasikan hasil melalui peta/grafik/tabel/infografis/media digital, merefleksi, dan membuat projek kolaboratif.',
            'Sosiologi|Fase F': 'Pada akhir Fase F, murid berpikir kritis dan kreatif, melakukan kajian literasi atas fenomena sosiologi, menganalisis, menyajikan, melaporkan, dan mengomunikasikan hasil kajian; menunjukkan kesadaran sebagai warga yang baik; serta menghasilkan projek inovatif digital atau nondigital. Murid menganalisis masalah sosial, konflik dan integrasi sosial, pemecahan masalah melalui pemberdayaan, kesetaraan dalam perbedaan sosial untuk masyarakat multikultural, serta hubungan perubahan sosial dalam kelompok/komunitas dan globalisasi; lalu merancang projek kolaboratif yang solutif untuk masyarakat harmonis.',
            'Sejarah|Fase F': 'Pada akhir Fase F, murid menjelaskan sejarah Masa Penjajahan Bangsa Barat, perlawanan rakyat daerah, Pergerakan Kebangsaan Indonesia, Pendudukan Jepang, Proklamasi dan mempertahankan kemerdekaan, masa pemerintahan Sukarno, Suharto, serta Reformasi. Murid menerapkan berpikir sejarah, literasi dan penelitian sejarah melalui inkuiri, serta mengevaluasi nilai sejarah bagi kehidupan masa kini; menggunakan keterampilan diakronis dan sinkronis, analisis/interpretasi, riset, literasi, analisis isu, dan pengambilan keputusan.',
            'Sejarah Tingkat Lanjut|Fase F': 'Pada akhir Fase F, murid menunjukkan kesadaran sejarah melalui berpikir sejarah, literasi, penelitian dan penulisan sejarah; mengaplikasikan sejarah dunia berwawasan global yang dikaitkan dengan sejarah Indonesia dalam projek digital atau nondigital; serta merefleksikan sejarah dunia dalam kehidupan sehari-hari. Murid mempelajari asal-usul manusia, peradaban dan pemikiran besar dunia, revolusi besar, Perang Dunia I dan II, Perang Dingin, serta peristiwa kontemporer abad ke-21 dengan proses berpikir historis dan keterampilan riset sejarah.',
            'Antropologi|Fase F': 'Pada akhir Fase F, murid menjelaskan konsep dasar Antropologi, sejarah perkembangan, ruang lingkup, pendekatan emik, relativisme budaya, thick description, dan holistik dalam menganalisis fenomena budaya; menjelaskan metode penelitian etnografi; memahami kebudayaan, bahasa, religi, organisasi sosial, keluarga, kekerabatan, dan problematika keberagaman budaya dalam masyarakat multikultural serta digital. Murid menerapkan etnografi sederhana, relativisme budaya, dan pendekatan emik-etik; menganalisis serta mengevaluasi temuan; dan memberi rekomendasi untuk pemahaman lintas budaya serta penghargaan terhadap keberagaman.'
        }
    };
})();

// ================= IDENTITAS PG & SESSION =================
        // Kode unik per PG, dipakai supaya sesi login 1 PG tidak "bocor" ke PG lain
        const PG_CODE = "p1sp2pg2";
        const SESSION_KEY = "akds_session_" + PG_CODE;

        // Kredensial default (samakan di semua PG, ganti ke sistem auth sesungguhnya kalau sudah siap)
        const VALID_USERNAME = document.getElementById('login-screen').dataset.loginUsername;
        const VALID_PASSWORD = document.getElementById('login-screen').dataset.loginPassword;

        function handleLogin(event) {
            if (event) event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorBox = document.getElementById('login-error');

            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                errorBox.classList.add('hidden');
                sessionStorage.setItem(SESSION_KEY, 'active');
                showApp();
            } else {
                errorBox.classList.remove('hidden');
            }
            return false;
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

        window.addEventListener('load', function () {
            if (sessionStorage.getItem(SESSION_KEY) === 'active') {
                showApp();
            } else {
                showLogin();
            }
            updateJenjangDanPilihan();
        });

        // ================= PROTEKSI SOURCE CODE =================
        // Semua listener di bawah ini MENGABAIKAN elemen INPUT/TEXTAREA
        // supaya form generator tetap normal dipakai (ketik, pilih, copy-paste isian).

        // 1. Anti klik kanan
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        // 2. & 3. & 4. Anti Ctrl+U, Anti Ctrl+S, Anti F12
        document.addEventListener('keydown', function (e) {
            const tag = (e.target.tagName || '').toUpperCase();
            if (tag === 'INPUT' || tag === 'TEXTAREA') return;

            const k = e.key.toLowerCase();
            const isDevToolsKey = e.key === 'F12' ||
                (e.ctrlKey && (k === 'u' || k === 's')) ||
                (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j' || k === 'c'));

            if (isDevToolsKey) {
                e.preventDefault();
            }
        });

        // 5. Anti Copy Text (kecuali sedang di dalam form)
        document.addEventListener('copy', function (e) {
            const tag = (e.target.tagName || '').toUpperCase();
            if (tag === 'INPUT' || tag === 'TEXTAREA') return;
            e.preventDefault();
        });

        // 6. Anti Select Text — sudah dihandle lewat CSS user-select:none di atas

        // 7. Anti Drag Elemen (kecuali form)
        document.addEventListener('dragstart', function (e) {
            const tag = (e.target.tagName || '').toUpperCase();
            if (tag === 'INPUT' || tag === 'TEXTAREA') return;
            e.preventDefault();
        });

        // 8. Deteksi DevTools (peringatan di console, tidak mengunci halaman
        //    supaya tidak berisiko salah deteksi / mengganggu pengguna sah)
        (function () {
            const threshold = 160;
            let warned = false;
            setInterval(function () {
                const widthDiff = window.outerWidth - window.innerWidth;
                const heightDiff = window.outerHeight - window.innerHeight;
                if (widthDiff > threshold || heightDiff > threshold) {
                    if (!warned) {
                        console.log('%cAkses source code dibatasi.', 'color:red;font-size:16px;font-weight:bold;');
                        warned = true;
                    }
                } else {
                    warned = false;
                }
            }, 1000);
        })();

        // ================= FUNGSI KHUSUS PG: GENERATOR BANK SOAL =================

        // CP otomatis diringkas dari dokumen CP yang dilampirkan pengguna.
        // Kelas yang ditampilkan dibatasi pada fase yang tersedia dalam dokumen acuan.
        const PILIHAN_PER_JENJANG = window.PG_BANK_SOAL_CONFIG?.pilihanPerJenjang || {};
        const CP_PER_MAPEL_FASE = window.PG_BANK_SOAL_CONFIG?.cpPerMapelFase || {};

        function getFase(value) {
            return (value || '').split(' Kelas ')[0];
        }

        function updateCapaianPembelajaran() {
            const mapel = document.getElementById('mata_pelajaran').value;
            const faseKelas = document.getElementById('fase_kelas').value;
            const cp = CP_PER_MAPEL_FASE[`${mapel}|${getFase(faseKelas)}`];
            document.getElementById('capaian_pembelajaran').value = cp || 'CP belum tersedia untuk kombinasi Mata Pelajaran dan Fase/Kelas ini.';
            updateIndikatorSoal();
        }

        function updateMapelDanKelas() {
            const jenjang = document.getElementById('jenjang_pendidikan').value;
            const selectKelas = document.getElementById('fase_kelas');
            const pilihan = PILIHAN_PER_JENJANG[jenjang] || { kelas: [] };
            const kelasTersedia = pilihan.kelas;
            const kelasSebelumnya = selectKelas.value;
            selectKelas.innerHTML = kelasTersedia.map(kelas => `<option value="${kelas}">${kelas}</option>`).join('');
            if (kelasTersedia.includes(kelasSebelumnya)) selectKelas.value = kelasSebelumnya;
            else if (jenjang === 'SD/MI') selectKelas.value = 'Fase B Kelas 4';
            updateCapaianPembelajaran();
        }

        function updateJenjangDanPilihan() {
            const jenjang = document.getElementById('jenjang_pendidikan').value;
            const pilihan = PILIHAN_PER_JENJANG[jenjang] || { mapel: [] };
            const selectMapel = document.getElementById('mata_pelajaran');
            const mapelSebelumnya = selectMapel.value;

            selectMapel.innerHTML = pilihan.mapel.map(mapel => `<option value="${mapel}">${mapel}</option>`).join('');
            selectMapel.disabled = pilihan.mapel.length === 1;
            selectMapel.classList.toggle('bg-slate-100', pilihan.mapel.length === 1);
            selectMapel.title = pilihan.mapel.length === 1
                ? 'Mata pelajaran ditetapkan otomatis sesuai jenjang pendidikan.'
                : 'Pilih mata pelajaran yang tersedia untuk jenjang ini.';

            if (pilihan.mapel.includes(mapelSebelumnya)) selectMapel.value = mapelSebelumnya;
            updateMapelDanKelas();
        }

        function toggleJenisStimulus() {
            const stimulus = document.getElementById('stimulus_soal').value;
            const wrapper = document.getElementById('wrapper_jenis_stimulus');
            wrapper.style.display = (stimulus === 'Ya') ? '' : 'none';
        }
        toggleJenisStimulus();

        function getSelectedCheckboxes(name, fallback) {
            const boxes = document.querySelectorAll(`input[name="${name}"]:checked`);
            let values = [];
            boxes.forEach(cb => values.push(cb.value));
            return values.length > 0 ? values.join(', ') : fallback;
        }

        function updateIndikatorSoal() {
            const tp = document.getElementById('tujuan_pembelajaran').value.trim();
            const cp = document.getElementById('capaian_pembelajaran').value.trim();
            const indikator = tp
                ? `Peserta didik mampu ${tp.charAt(0).toLowerCase() + tp.slice(1)} sesuai CP yang berlaku.`
                : (cp ? 'Isi Tujuan Pembelajaran (TP) untuk menghasilkan indikator soal otomatis.' : 'CP dan TP diperlukan untuk menghasilkan indikator soal.');
            document.getElementById('indikator_soal').value = indikator;
        }

        function getJumlahPerBentuk() {
            const rincian = [];
            document.querySelectorAll('[data-jumlah-bentuk]').forEach(input => {
                const jumlah = Number(input.value) || 0;
                if (jumlah > 0) rincian.push(`${input.dataset.jumlahBentuk}: ${jumlah} butir`);
            });
            return rincian;
        }

        function validateForm() {
            const tp = document.getElementById('tujuan_pembelajaran').value.trim();
            if (!tp) {
                alert('Tujuan Pembelajaran (TP) wajib diisi sebelum menghasilkan prompt.');
                document.getElementById('tujuan_pembelajaran').focus();
                return false;
            }
            const total = Number(document.getElementById('jumlah_soal').value) || 0;
            const distribusi = getJumlahPerBentuk().reduce((sum, item) => sum + Number(item.match(/(\d+) butir$/)[1]), 0);
            if (total < 1 || distribusi !== total) {
                alert(`Jumlah soal total (${total}) harus sama dengan jumlah per bentuk (${distribusi}).`);
                return false;
            }
            const kesulitan = ['kesulitan_mudah', 'kesulitan_sedang', 'kesulitan_sulit']
                .reduce((sum, id) => sum + (Number(document.getElementById(id).value) || 0), 0);
            if (kesulitan !== 100) {
                alert(`Proporsi tingkat kesulitan harus tepat 100%. Saat ini: ${kesulitan}%.`);
                return false;
            }
            document.querySelectorAll('[data-jumlah-bentuk]').forEach(input => {
                const checkbox = document.querySelector(`input[name="bentuk_soal"][value="${input.dataset.jumlahBentuk}"]`);
                if (checkbox) checkbox.checked = (Number(input.value) || 0) > 0;
            });
            return true;
        }

        function muatContohIPAS() {
            document.getElementById('jenjang_pendidikan').value = 'SD/MI';
            updateJenjangDanPilihan();
            document.getElementById('fase_kelas').value = 'Fase B Kelas 4';
            document.getElementById('bab_ke').value = 'BAB 1';
            document.getElementById('judul_bab').value = 'Mengubah Bentuk Energi';
            document.getElementById('topik_unit').value = 'Perubahan energi di sekitar kita dan fotosintesis sebagai proses penting di Bumi';
            document.getElementById('tujuan_pembelajaran').value = 'Mengidentifikasi perubahan bentuk energi pada benda di sekitar serta menjelaskan peran fotosintesis dalam kehidupan.';
            document.getElementById('nama_file_referensi').value = 'IPAS_Kelas4_Bab1.pdf';
            document.getElementById('fokus_file_referensi').value = 'Bab 1, halaman 3-23';
            document.getElementById('jumlah_soal').value = '25';
            [['Pilihan Ganda', 15], ['Pilihan Ganda Kompleks', 0], ['Benar-Salah', 0], ['Menjodohkan', 0], ['Isian Singkat', 5], ['Uraian', 5], ['Studi Kasus', 0]].forEach(([nama, jumlah]) => {
                document.querySelector(`[data-jumlah-bentuk="${nama}"]`).value = jumlah;
                document.querySelector(`input[name="bentuk_soal"][value="${nama}"]`).checked = jumlah > 0;
            });
            document.getElementById('kesulitan_mudah').value = '40';
            document.getElementById('kesulitan_sedang').value = '40';
            document.getElementById('kesulitan_sulit').value = '20';
            updateCapaianPembelajaran();
            document.getElementById('outputPrompt').innerText = 'Contoh IPAS Kelas 4 telah dimuat.';
        }

        const KONFIGURASI_KEY = 'akds_bank_soal_lengkap_080826';
        function simpanKonfigurasi() {
            const data = {};
            document.querySelectorAll('#app-content input[id], #app-content textarea[id], #app-content select[id]').forEach(el => {
                data[el.id] = el.value;
            });
            document.querySelectorAll('#app-content input[type="checkbox"]').forEach((el, index) => { data[`checkbox_${index}`] = el.checked; });
            document.querySelectorAll('#app-content [data-jumlah-bentuk]').forEach(el => { data[`jumlah_${el.dataset.jumlahBentuk}`] = el.value; });
            localStorage.setItem(KONFIGURASI_KEY, JSON.stringify(data));
            alert('Konfigurasi terakhir tersimpan di perangkat ini.');
        }

        function muatKonfigurasi() {
            const data = JSON.parse(localStorage.getItem(KONFIGURASI_KEY) || 'null');
            if (!data) { alert('Belum ada konfigurasi tersimpan di perangkat ini.'); return; }
            document.getElementById('jenjang_pendidikan').value = data.jenjang_pendidikan || 'SD/MI';
            updateJenjangDanPilihan();
            Object.entries(data).forEach(([id, value]) => {
                const el = document.getElementById(id);
                if (el && id !== 'jenjang_pendidikan') el.value = value;
            });
            document.querySelectorAll('#app-content input[type="checkbox"]').forEach((el, index) => { el.checked = Boolean(data[`checkbox_${index}`]); });
            document.querySelectorAll('#app-content [data-jumlah-bentuk]').forEach(el => { el.value = data[`jumlah_${el.dataset.jumlahBentuk}`] || '0'; });
            updateCapaianPembelajaran();
            alert('Konfigurasi berhasil dimuat.');
        }

        function clearForm() {
            const textFields = ['nama_sekolah', 'bab_ke', 'judul_bab', 'topik_unit', 'capaian_pembelajaran',
                'tujuan_pembelajaran', 'fokus_file_referensi', 'jumlah_soal', 'proporsi_level',
                'catatan_peruntukan', 'catatan_khusus_penyusunan_soal', 'instruksiTambahan'];
            textFields.forEach(id => { document.getElementById(id).value = ''; });

            document.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });

            ['stimulus_soal', 'format_bank_soal',
             'sertakan_kunci_jawaban', 'sertakan_pembahasan', 'sertakan_pedoman_penskoran'].forEach(id => {
                document.getElementById(id).selectedIndex = 0;
            });

            document.getElementById('jenjang_pendidikan').value = 'SD/MI';
            document.getElementById('mata_pelajaran').value = 'IPAS';
            updateJenjangDanPilihan();
            document.getElementById('fase_kelas').value = 'Fase B Kelas 4';
            updateCapaianPembelajaran();

            toggleJenisStimulus();
            document.getElementById('outputPrompt').innerText = 'Formulir telah dibersihkan.';
        }

        function ubahBab(delta) {
            const input = document.getElementById('bab_ke');
            const match = (input.value || '').match(/\d+/);
            let n = match ? parseInt(match[0], 10) : 0;
            n = Math.max(1, n + delta);
            input.value = 'BAB ' + n;
        }

        function generatePromptBankSoal() {
            if (!validateForm()) return;
            const namaSekolah = document.getElementById('nama_sekolah').value || '[Nama Sekolah Belum Diisi]';
            const jenjang = document.getElementById('jenjang_pendidikan').value;
            const faseKelas = document.getElementById('fase_kelas').value;
            const mapel = document.getElementById('mata_pelajaran').value || '[Mata Pelajaran Belum Diisi]';
            const babKe = document.getElementById('bab_ke').value.trim() || '[BAB Ke- Belum Diisi]';
            const judulBab = document.getElementById('judul_bab').value || '[Judul Bab Belum Diisi]';
            const topikUnit = document.getElementById('topik_unit').value || '[Topik/Unit Pembelajaran Belum Diisi]';
            const cp = document.getElementById('capaian_pembelajaran').value || '[CP Belum Diisi]';
            const tp = document.getElementById('tujuan_pembelajaran').value || '[TP Belum Diisi]';
            const indikator = document.getElementById('indikator_soal').value || '[Indikator Soal Belum Tersedia]';
            const namaFile = document.getElementById('nama_file_referensi').value.trim() || 'Nama file tidak dicantumkan';
            const fokusFile = document.getElementById('fokus_file_referensi').value.trim();

            const dimensiProfilLulusan = getSelectedCheckboxes('dimensi_profil_lulusan', 'Keimanan, Kewargaan, Nalar Kritis');
            const bentukSoal = getSelectedCheckboxes('bentuk_soal', 'Pilihan Ganda, Uraian');
            const jumlahSoal = document.getElementById('jumlah_soal').value || '20';
            const jumlahPerBentuk = getJumlahPerBentuk().join('; ');

            const levelKognitif = getSelectedCheckboxes('level_kognitif', 'L1 (Knowing), L2 (Applying), L3 (Reasoning)');
            const proporsiLevel = document.getElementById('proporsi_level').value.trim() || 'Proporsi seimbang otomatis antar level yang dipilih';
            const proporsiKesulitan = `Mudah ${document.getElementById('kesulitan_mudah').value}%, Sedang ${document.getElementById('kesulitan_sedang').value}%, Sulit ${document.getElementById('kesulitan_sulit').value}%`;

            const konteksSoal = getSelectedCheckboxes('konteks_soal', 'Kehidupan Sehari-hari');
            const stimulusSoal = document.getElementById('stimulus_soal').value;
            const jenisStimulus = stimulusSoal === 'Ya' ? getSelectedCheckboxes('jenis_stimulus', 'Teks Bacaan') : 'Tidak menggunakan stimulus';
            const gayaBahasa = document.getElementById('gaya_bahasa_soal').value;

            const catatanPeruntukan = document.getElementById('catatan_peruntukan').value.trim();

            const formatBankSoal = document.getElementById('format_bank_soal').value;
            const komponenBankSoal = getSelectedCheckboxes('komponen_bank_soal', 'Nomor Soal, Butir Soal, Kunci Jawaban');
            const sertakanKunci = document.getElementById('sertakan_kunci_jawaban').value;
            const sertakanPembahasan = document.getElementById('sertakan_pembahasan').value;
            const sertakanPedoman = document.getElementById('sertakan_pedoman_penskoran').value;

            const catatanKhusus = document.getElementById('catatan_khusus_penyusunan_soal').value || 'Tidak ada catatan khusus.';
            const instruksiTambahan = document.getElementById('instruksiTambahan').value.trim();

            const instruksiFile = `### 0. PARAMETER KETAT (WAJIB DIPATUHI MUTLAK — BACA DAN EVALUASI TERLEBIH DAHULU SEBELUM MENYUSUN SOAL)

**A. Referensial (Validitas Mutlak):**
- **JIKA** pada percakapan ini pengguna turut melampirkan (upload) file PDF materi ajar bernama "${namaFile}" untuk ${babKe} — "${judulBab}" (Topik/Unit: ${topikUnit}): WAJIB jadikan ISI FILE TERSEBUT sebagai SATU-SATUNYA ACUAN UTAMA dan sumber kebenaran materi soal. DILARANG KERAS menyusun soal yang menyimpang, menambah topik di luar cakupan file, atau bertentangan dengan isi file tersebut — ini untuk menjamin seluruh butir soal tetap berada dalam lingkup CP resmi dan menghindari halusinasi informasi di luar buku teks rujukan. Field CP dan TP pada parameter di bawah HANYA berfungsi sebagai konteks pelengkap, BUKAN pengganti isi file.${fokusFile ? `\n  Fokuskan pembacaan file pada bagian: "${fokusFile}".` : ''}
- **JIKA TIDAK ADA** file yang dilampirkan pada percakapan ini: ABAIKAN poin di atas sepenuhnya, dan susun soal secara MANDIRI berdasarkan seluruh parameter form di bawah ini tanpa memerlukan file tambahan apa pun.

**B. Variasi Stimulus Edukatif:**
- Untuk setiap batch pengerjaan, WAJIB gunakan jenis stimulus yang berbeda-beda dan beragam dari pilihan (${jenisStimulus}). Stimulus harus bersifat kontekstual, menarik, memiliki unsur keterbaruan, dan menginspirasi siswa berpikir kritis. DILARANG mengulang jenis stimulus yang sama secara berturut-turut jika lebih dari satu jenis dipilih.

**C. Presisi Level Kognitif:**
- WAJIB patuhi perbedaan mendalam pada level kognitif yang dipilih (${levelKognitif}): L1 (Knowing) menguji kemampuan standar minimum mengingat dan memahami materi; L2 (Applying) menguji kemampuan aplikasi konsep dalam situasi berbeda/konteks nyata; L3 (Reasoning) menguji kemampuan penalaran kritis melalui analisis, evaluasi, dan kreasi. DILARANG mencampuradukkan karakteristik antar level.

**D. Aturan Non-Repetisi & Independensi Butir Soal:**
- Jika satu stimulus digunakan untuk lebih dari satu soal, DILARANG KERAS membuat butir soal yang jawabannya sudah tertera pada soal sebelumnya dalam stimulus yang sama. Setiap soal harus berdiri sendiri secara logika.

--- KONTEKS STRUKTUR SISTEM AKDS ---
- Pilar Utama: Pilar 1 — KURIKULUM & PEMBELAJARAN
- Sub-Pilar Kerja: Sub-Pilar 2 — Asesmen dan Evaluasi Pembelajaran
- Nama Produk: Bank Soal (Generator Bank Soal Dinamis Berbasis BAB sesuai Permendikdasmen No. 13 Tahun 2025)`;

            const promptText = `Bertindaklah sebagai Pakar Evaluasi Pendidikan Senior, Ahli Kurikulum Merdeka, dan Spesialis Penyusun Bank Soal Sekolah berbasis Deep Learning (berkesadaran, bermakna, dan menggembirakan). Tugas Anda adalah menyusun Master Database Bank Soal yang lengkap, valid, kontekstual, dan siap pakai berdasarkan parameter berikut.

${instruksiFile}

1. IDENTITAS SATUAN PENDIDIKAN
- Nama Sekolah: ${namaSekolah}
- Jenjang Pendidikan: ${jenjang}
- Fase/Kelas: ${faseKelas}
- Mata Pelajaran: ${mapel}

2. BAB & KOMPETENSI
- BAB Ke-: ${babKe}
- Judul Bab: ${judulBab}
- Topik/Unit Pembelajaran: ${topikUnit}
- Capaian Pembelajaran (CP): ${cp}
- Tujuan Pembelajaran (TP) yang Diukur: ${tp}
- Indikator Soal Otomatis: ${indikator}
- Sumber Materi: ${namaFile}${fokusFile ? ` (${fokusFile})` : ''}

3. DIMENSI PROFIL LULUSAN
- Dimensi yang Diintegrasikan: ${dimensiProfilLulusan}

4. BENTUK SOAL & KUANTITAS
- Bentuk Soal: ${bentukSoal}
- Kuantitas (n) Total: ${jumlahSoal} butir
- Distribusi Wajib per Bentuk: ${jumlahPerBentuk}
- Proporsi Tingkat Kesulitan: ${proporsiKesulitan}

5. PRESISI LEVEL KOGNITIF
- Level Kognitif: ${levelKognitif}
- Proporsi Level: ${proporsiLevel}

6. KONTEKS & STIMULUS
- Konteks Soal: ${konteksSoal}
- Gunakan Stimulus: ${stimulusSoal}
- Jenis Stimulus: ${jenisStimulus}
- Bahasa dan Gaya Soal: ${gayaBahasa}

7. CATATAN PERUNTUKAN (INFORMATIF, BUKAN FILTER)
${catatanPeruntukan ? `- ${catatanPeruntukan}` : '- Tidak dicantumkan. Guru memiliki otonomi penuh menggunakan output soal ini untuk kebutuhan asesmen apa pun (diagnostik, formatif, sumatif, ujian sekolah, latihan, dll) sesuai kebutuhan di lapangan.'}

8. FORMAT & KOMPONEN BANK SOAL
- Format Bank Soal: ${formatBankSoal}
- Komponen yang Dicantumkan: ${komponenBankSoal}
- Sertakan Kunci Jawaban: ${sertakanKunci}
- Sertakan Pembahasan: ${sertakanPembahasan}
- Sertakan Pedoman Penskoran: ${sertakanPedoman}

9. CATATAN KHUSUS
- Catatan Khusus Penyusunan Soal: ${catatanKhusus}
${instruksiTambahan ? `\n10. INSTRUKSI TAMBAHAN DARI PENGGUNA:\n${instruksiTambahan}\n` : ''}
--------------------------------------------------
TUGAS ANDA (AI):
Susun Master Database Bank Soal ini ke dalam format "${formatBankSoal}" yang rapi, mencantumkan seluruh komponen yang diminta (${komponenBankSoal}), dengan Kuantitas (n) ${jumlahSoal} butir soal sesuai distribusi wajib per bentuk (${jumlahPerBentuk}), Dimensi Profil Lulusan (${dimensiProfilLulusan}), Level Kognitif (${levelKognitif}) sesuai Proporsi Level (${proporsiLevel}), dan tingkat kesulitan (${proporsiKesulitan}). Setiap butir soal harus jelas kaitannya dengan TP dan indikator soal. Gunakan ${gayaBahasa}. WAJIB patuhi seluruh Parameter Ketat pada bagian 0 secara mutlak. Jangan ada bagian yang terpotong atau menggunakan placeholder.${instruksiTambahan ? ' Perhatikan dan ikuti juga instruksi tambahan dari pengguna di atas.' : ''}`;

            document.getElementById('outputPrompt').innerText = promptText;
        }

        function copyToClipboard() {
            const promptBox = document.getElementById('outputPrompt');
            const currentText = promptBox.innerText;

            if (currentText.includes('Isi data di formulir') || currentText.trim() === '') {
                alert('Silakan klik "Hasilkan Prompt Bank Soal" terlebih dahulu!');
                return;
            }

            navigator.clipboard.writeText(currentText).then(() => {
                const btnText = document.getElementById('copyText');
                btnText.innerText = 'Tersalin!';
                setTimeout(() => {
                    btnText.innerText = 'Salin Prompt';
                }, 2000);
            }).catch(err => {
                alert('Gagal menyalin teks secara otomatis: ' + err);
            });
        }

        function downloadPromptTxt() {
            const currentText = document.getElementById('outputPrompt').innerText;
            if (currentText.includes('Isi data di formulir') || currentText.includes('telah dimuat') || currentText.trim() === '') {
                alert('Silakan hasilkan prompt terlebih dahulu sebelum mengunduhnya.');
                return;
            }
            const blob = new Blob([currentText], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'prompt-bank-soal.txt';
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(url);
        }
