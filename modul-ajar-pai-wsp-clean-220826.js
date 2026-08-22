const PG_CODE = "modul_ajar_pai_220826";
const SESSION_KEY = "akds_session_" + PG_CODE;
const loginConfig = document.getElementById("login-screen");
const VALID_USERNAME = loginConfig.dataset.loginUsername || "edumind";
const VALID_PASSWORD = loginConfig.dataset.loginPassword || "";
function handleLogin(event) {
event.preventDefault();
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
}
function togglePasswordVisibility() {
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('password-eye-icon');
const willShow = passwordInput.type === 'password';
passwordInput.type = willShow ? 'text' : 'password';
toggleButton.setAttribute('aria-label', willShow ? 'Sembunyikan password' : 'Tampilkan password');
toggleButton.setAttribute('aria-pressed', String(willShow));
eyeIcon.classList.toggle('fa-eye', !willShow);
eyeIcon.classList.toggle('fa-eye-slash', willShow);
passwordInput.focus();
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
document.getElementById('password').type = 'password';
document.getElementById('toggle-password').setAttribute('aria-label', 'Tampilkan password');
document.getElementById('toggle-password').setAttribute('aria-pressed', 'false');
document.getElementById('password-eye-icon').className = 'fa-solid fa-eye text-sm';
}
window.addEventListener('load', function () {
if (sessionStorage.getItem(SESSION_KEY) === 'active') {
showApp();
} else {
showLogin();
}
});
(function bindLoginEventsEarly() {
const loginForm = document.getElementById('login-form');
if (loginForm) {
loginForm.addEventListener('submit', function (event) { handleLogin(event); });
}
const togglePasswordButton = document.getElementById('toggle-password');
if (togglePasswordButton) togglePasswordButton.addEventListener('click', togglePasswordVisibility);
})();
// ==== PROTEKSI SOURCE CODE ====
document.addEventListener('contextmenu', function (e) {
e.preventDefault();
});
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
document.addEventListener('copy', function (e) {
const tag = (e.target.tagName || '').toUpperCase();
if (tag === 'INPUT' || tag === 'TEXTAREA') return;
e.preventDefault();
});
document.addEventListener('dragstart', function (e) {
const tag = (e.target.tagName || '').toUpperCase();
if (tag === 'INPUT' || tag === 'TEXTAREA') return;
e.preventDefault();
});
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
const FASE_OPTIONS_BY_JENJANG = {
"SD/MI": ["Fase A Kelas 1", "Fase A Kelas 2", "Fase B Kelas 3", "Fase B Kelas 4", "Fase C Kelas 5", "Fase C Kelas 6"],
"SMP/MTs": ["Fase D Kelas 7", "Fase D Kelas 8", "Fase D Kelas 9"],
"SMA/MA": ["Fase E Kelas 10", "Fase F Kelas 11", "Fase F Kelas 12"],
"SMK": ["Fase E Kelas 10", "Fase F Kelas 11", "Fase F Kelas 12"]
};
const CP_PAI_BY_PHASE = {
A: {
"Al Quran dan Hadis": "Memahami huruf hijaiah berharakat, huruf hijaiah bersambung, Surah al-Fātiḥah, beberapa surah pendek Al-Qur’an, dan hadis tentang kebersihan.",
"Akidah": "Memahami rukun iman, iman kepada Allah Swt., beberapa asmaulhusna, dan iman kepada malaikat.",
"Akhlak": "Memahami akhlak terhadap Allah Swt. dengan menyucikan dan memuji-Nya dan akhlak terhadap diri sendiri.",
"Fikih": "Memahami rukun Islam, syahadatain, tata cara bersuci, salat fardu, azan, ikamah, zikir, dan berdoa setelah salat.",
"Sejarah Peradaban Islam": "Memahami kisah beberapa nabi dan rasul."
},
B: {
"Al Quran dan Hadis": "Memahami beberapa surah pendek, ayat Al-Qur’an dan hadis tentang kewajiban salat dan menjaga hubungan baik dengan sesama.",
"Akidah": "Memahami sifat-sifat Allah Swt., beberapa asmaulhusna, iman kepada kitab-kitab Allah Swt. dan rasul-rasul Allah Swt.",
"Akhlak": "Memahami akhlak terhadap Allah Swt. dengan berbaik sangka kepada-Nya, akhlak terhadap orang tua, keluarga, dan pendidik.",
"Fikih": "Memahami puasa, salat jumat dan salat sunah, balig dan tanggung jawab yang menyertainya (taklīf).",
"Sejarah Peradaban Islam": "Memahami kisah Nabi Muhammad saw. sebelum dan sesudah menjadi rasul periode Makkah."
},
C: {
"Al Quran dan Hadis": "Memahami beberapa surah pendek dan ayat Al-Qur’an serta hadis tentang keragaman.",
"Akidah": "Memahami beberapa asmaulhusna, iman kepada hari akhir, qadā’ dan qadr.",
"Akhlak": "Memahami akhlak terhadap Allah Swt. dengan berdoa dan bertawakal kepada-Nya, akhlak terhadap teman, tetangga, non muslim, hewan, dan tumbuhan.",
"Fikih": "Memahami puasa sunah, zakat, infak, sedekah, hadiah, makanan dan minuman yang halal dan haram.",
"Sejarah Peradaban Islam": "Memahami kisah Nabi Muhammad saw. periode Madinah dan khulafaurasyidin."
},
D: {
"Al Quran dan Hadis": "Memahami ayat Al-Qur’an dan hadis tentang pentingnya iman, takwa, toleransi, cinta tanah air, semangat keilmuan dan sabar dalam menghadapi musibah dan ujian.",
"Akidah": "Memahami rukun iman dan hal-hal yang dapat meneguhkan iman.",
"Akhlak": "Memahami ikhlas, bersyukur kepada Allah Swt., cinta rasul, husnuzan, kasih sayang kepada sesama dan lingkungan alam.",
"Fikih": "Memahami ketentuan sujud, salat, kewajiban terhadap jenazah, haji dan umrah, penyembelihan hewan, kurban, akikah, dan rukhsah dalam perspektif mazhab fikih.",
"Sejarah Peradaban Islam": "Memahami peradaban Bani Umayyah, Abbasiyyah, Fatimiyah, Turki Usmani, Syafawi, dan Mughal."
},
E: {
"Al Quran dan Hadis": "Memahami ayat Al-Qur’an dan hadis tentang perintah berlomba-lomba dalam kebaikan, larangan pergaulan bebas, dan zina.",
"Akidah": "Memahami beberapa cabang iman (syu‘ab al-īmān).",
"Akhlak": "Memahami manfaat menghindari penyakit hati.",
"Fikih": "Memahami sumber hukum Islam dan pentingnya menjaga lima prinsip dasar hukum Islam (al-kulliyāt al-khamsah).",
"Sejarah Peradaban Islam": "Memahami sejarah masuknya Islam ke Indonesia dan peran tokoh ulama dalam penyebarannya."
},
F: {
"Al Quran dan Hadis": "Memahami ayat Al-Qur’an dan hadis tentang pentingnya berpikir kritis, ilmu pengetahuan dan teknologi, memelihara kehidupan manusia, dan moderasi beragama.",
"Akidah": "Memahami beberapa cabang iman (syu‘ab al-īmān), keterkaitan antara iman, Islam, dan ihsan.",
"Akhlak": "Memahami manfaat menghindari penyakit sosial; memahami adab bermasyarakat dan etika digital dalam Islam.",
"Fikih": "Memahami ketentuan khotbah, tablig dan dakwah, muamalah, munakahat, dan mawāris.",
"Sejarah Peradaban Islam": "Memahami peran tokoh ulama dalam perkembangan peradaban Islam di dunia dan peran organisasi-organisasi Islam di Indonesia."
}
};
const MAPEL_CP_ELEMENTS = {
"Pendidikan Agama Islam": ["Al Quran dan Hadis", "Akidah", "Akhlak", "Fikih", "Sejarah Peradaban Islam"],
"Al Quran dan Hadis": ["Al Quran dan Hadis"],
"Akidah dan Akhlak": ["Akidah", "Akhlak"],
"Fikih": ["Fikih"],
"Sejarah Kebudayaan Islam": ["Sejarah Peradaban Islam"]
};
function updateFaseOptionsByJenjang(preserveCurrent) {
const jenjang = document.getElementById("jenjang_pendidikan").value;
const select = document.getElementById("fase_kelas");
const current = select.value;
const options = FASE_OPTIONS_BY_JENJANG[jenjang] || FASE_OPTIONS_BY_JENJANG["SD/MI"];
select.innerHTML = "";
options.forEach(value => {
const option = document.createElement("option");
option.value = value;
option.textContent = value;
select.appendChild(option);
});
select.value = preserveCurrent && options.includes(current) ? current : options[0];
updateCapaianPembelajaran();
}
function updateCapaianPembelajaran() {
const faseKelas = document.getElementById("fase_kelas").value;
const mapel = document.getElementById("mata_pelajaran").value;
const faseMatch = faseKelas.match(/Fase\s+([A-F])/);
const fase = faseMatch ? faseMatch[1] : "A";
const phaseData = CP_PAI_BY_PHASE[fase];
const elements = MAPEL_CP_ELEMENTS[mapel] || MAPEL_CP_ELEMENTS["Pendidikan Agama Islam"];
document.getElementById("capaian_pembelajaran").value =
`Fase ${fase} (${faseKelas})\n` + elements.map(element => `${element}: ${phaseData[element]}`).join("\n");
}
function configureAutomaticFields() {
const fieldIds = [
"tujuan_pembelajaran", "pemahaman_bermakna", "pertanyaan_pemantik",
"lintas_disiplin_ilmu", "topik_kegiatan_pembelajaran", "langkah_pendahuluan",
"langkah_inti", "langkah_penutup", "asesmen_awal", "asesmen_formatif", "asesmen_sumatif",
"kebutuhan_siswa", "penguatan_karakter", "refleksi_guru", "strategi_pengayaan", "strategi_remidial"
];
fieldIds.forEach(id => {
const field = document.getElementById(id);
if (!field) return;
field.value = "Diisi otomatis oleh AI berdasarkan konteks utama yang Anda isi.";
field.readOnly = true;
field.classList.add("bg-slate-100", "text-slate-500", "cursor-not-allowed");
});
const cpField = document.getElementById("capaian_pembelajaran");
cpField.readOnly = true;
cpField.setAttribute("aria-readonly", "true");
cpField.classList.add("bg-slate-100", "text-slate-600", "cursor-not-allowed");
updateFaseOptionsByJenjang(true);
document.getElementById("jenjang_pendidikan").addEventListener("change", function () { updateFaseOptionsByJenjang(false); });
document.getElementById("fase_kelas").addEventListener("change", updateCapaianPembelajaran);
document.getElementById("mata_pelajaran").addEventListener("change", updateCapaianPembelajaran);
}
function generatePrompt() {
const namaSekolah = document.getElementById("nama_sekolah").value || "[Nama Satuan Pendidikan]";
const jenjang = document.getElementById("jenjang_pendidikan").value;
const faseKelas = document.getElementById("fase_kelas").value;
const namaPenyusun = document.getElementById("nama_penyusun").value || "[Nama Penyusun]";
const guruKelasMapel = document.getElementById("guru_kelas_mapel").value.trim();
const nipPenyusun = document.getElementById("nip_penyusun").value.trim();
// Mata pelajaran dipilih pengguna dari daftar rumpun PAI.
const mapel = document.getElementById("mata_pelajaran").value;
const tahunAjaran = document.getElementById("tahun_ajaran").value || "[Tahun Ajaran]";
const alokasi = document.getElementById("alokasi_waktu").value || "[Alokasi Waktu]";
const lingkupMateri = document.getElementById("lingkup_materi_semester").value || "[Belum diisi]";
const nomorBab = document.getElementById("nomor_bab").value.trim();
const judulBab = document.getElementById("judul_bab").value.trim();
const topik = document.getElementById("topik_unit_pembelajaran").value || "[Topik Pembelajaran]";
const durasiAwal = document.getElementById("durasi_kegiatan_awal").value || "10 menit";
const durasiInti = document.getElementById("durasi_kegiatan_inti").value || "50 menit";
const kompetensiAwal = document.getElementById("kompetensi_awal").value || "[Belum diisi]";
const targetPD = document.getElementById("target_peserta_didik").value;
const jumlahPD = document.getElementById("jumlah_peserta_didik").value || "[Belum diisi]";
const cp = document.getElementById("capaian_pembelajaran").value;
const pendekatanPBM = document.getElementById("pendekatan_pembelajaran").value;
const konteksOtomatis = `Mata Pelajaran ${mapel}; Jenjang/Kelas ${jenjang} / ${faseKelas}; Fase/Elemen ${faseKelas}; Lingkup Materi/Semester ${lingkupMateri}; Bab ${nomorBab || 'sesuai materi'} - ${judulBab || 'sesuai materi'}; Topik/Unit ${topik}.`;
const tp = `Susun 2-4 TP yang spesifik, terukur, dan relevan dengan CP serta ${konteksOtomatis}`;
const pemahamanBermakna = "Susun secara kontekstual dari materi dan topik di atas.";
const pertanyaanPemantik = "Susun 2-3 pertanyaan yang sesuai usia dan topik.";
const lintasDisiplin = "Tentukan keterkaitan lintas disiplin yang relevan.";
const topikKegiatan = "Rumuskan dari lingkup materi, bab, dan topik/unit di atas.";
const modelPBM = document.getElementById("model_pembelajaran").value;
const mediaSumber = document.getElementById("media_dan_sumber_belajar").value || `Tentukan media, alat, dan sumber belajar yang relevan berdasarkan ${konteksOtomatis}`;
const tautanBahanAjar = document.getElementById("tautan_bahan_ajar_digital").value.trim();
const tautanVideo = document.getElementById("tautan_video_pembelajaran").value.trim();
const langkahPnd = "Susun langkah Orientasi, Apersepsi, dan Motivasi yang relevan dengan konteks otomatis.";
const langkahInt = "Pilih model yang sesuai, ikuti sintaks resminya secara berurutan, dan terapkan diferensiasi sesuai konteks otomatis.";
const langkahPnt = "Susun langkah penguatan, refleksi murid, tindak lanjut, dan penutup yang sesuai.";
const asesmenAwl = "Susun asesmen diagnostik sesuai kesiapan belajar yang diperlukan oleh materi/topik.";
const asesmenFor = "Susun teknik, instrumen, rubrik, dan keterangan yang relevan untuk sikap, pengetahuan, dan keterampilan.";
const asesmenSum = "Susun teknik, instrumen, rubrik, dan keterangan yang relevan untuk pengetahuan dan keterampilan.";
const kebutuhan = "Susun asumsi umum yang aman dan strategi dukungan fleksibel sesuai jenjang/fase serta materi; jangan mengarang diagnosis atau data individu.";
const karakter = "Susun nilai keimanan, ketakwaan, akhlak mulia, adab, kejujuran, tanggung jawab, toleransi, dan karakter lain yang relevan dengan materi.";
const refleksi = "Susun sedikitnya 6 butir refleksi spesifik terhadap pelaksanaan pembelajaran, ketercapaian TP, kebutuhan murid, alokasi waktu, serta tindak lanjut.";
const strategiPengayaan = "Susun kegiatan pengayaan bertingkat bagi murid yang telah mencapai kompetensi.";
const strategiRemidial = "Susun strategi remedial bertahap yang sesuai CP dan materi.";
const kotaTanggal = document.getElementById("kota_tanggal_pengesahan").value.trim();
const namaKepsek = document.getElementById("nama_kepala_sekolah").value || "[Nama Kepala Sekolah]";
const nipKepsek = document.getElementById("nip_kepala_sekolah").value.trim();
const instruksiTambahan = document.getElementById("instruksiTambahan").value.trim();
let profilLulusan = [];
document.querySelectorAll('input[name="profil_lulusan"]:checked').forEach(cb => profilLulusan.push(cb.value));
let metodePBM = [];
document.querySelectorAll('input[name="metode_pembelajaran"]:checked').forEach(cb => metodePBM.push(cb.value));
let kemitraan = [];
document.querySelectorAll('input[name="kemitraan_pembelajaran"]:checked').forEach(cb => kemitraan.push(cb.value));
let strategiDif = [];
document.querySelectorAll('input[name="diferensiasi_pembelajaran"]:checked').forEach(cb => strategiDif.push(cb.value));
let lampiran = [];
document.querySelectorAll('input[name="lampiran_pendukung"]:checked').forEach(cb => lampiran.push(cb.value));
const promptText = `Bertindaklah sebagai Pakar Desain Instruksional Pendidikan Agama Islam, Konsultan Kurikulum Merdeka/Pembelajaran Mendalam Kemendikdasmen, dan Guru PAI senior. Susun draf lengkap "MODUL AJAR PAI" yang resmi, rapi, komprehensif, moderat, kontekstual, dan siap pakai, dengan STRUKTUR & URUTAN BAGIAN mengikuti format acuan sekolah kami, berdasarkan parameter berikut:
--- KONTEKS SISTEM AKDS ---
Pilar 1 - KURIKULUM & PEMBELAJARAN | Sub-Pilar 1 - Perencanaan Kurikulum dan Pembelajaran | Dokumen: Modul Ajar (Perangkat Ajar Resmi Guru)
--- SAMPUL ---
Mapel: ${mapel} | Jenjang/Kelas: ${jenjang} - ${faseKelas} | Pendekatan: ${pendekatanPBM}
Bab: ${nomorBab || '[otomatis]'} - ${judulBab || '[otomatis]'} | Topik: ${topik}
--- IDENTITAS PENYUSUN ---
1. Nama Penyusun: ${namaPenyusun}${nipPenyusun ? ` (NIP. ${nipPenyusun})` : ''}
2. Guru Kelas/Guru Mapel: ${guruKelasMapel || faseKelas}
3. Institusi: ${namaSekolah}
--- INFORMASI UMUM ---
4. Mata Pelajaran: ${mapel}
5. Tahun Ajaran: ${tahunAjaran}
6. Jenjang/Kelas: ${jenjang} / ${faseKelas}
7. Fase/Elemen: ${faseKelas}
8. Lingkup Materi/Semester: ${lingkupMateri}
9. Alokasi Waktu: ${alokasi} (Awal ±${durasiAwal}, Inti ±${durasiInti})
--- IDENTIFIKASI ---
10. Kompetensi Awal/Prasyarat Siswa (poin a, b, c... label tebal di awal tiap poin): "${kompetensiAwal}"
11. Dimensi Profil Lulusan (centang dari 8 dimensi resmi: Keimanan dan Ketakwaan terhadap Tuhan YME, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, Komunikasi):
${profilLulusan.length > 0 ? profilLulusan.map(p => `- ${p}`).join('\n') : '- Penalaran Kritis\n- Kolaborasi'}
12. Sarana dan Prasarana (turunkan dari media/sumber belajar jadi daftar bernomor)
13. Target Peserta Didik: ${targetPD}
14. Jumlah Murid: ${jumlahPD}
--- KOMPONEN INTI ---
15. Capaian Pembelajaran (CP) per Fase/Elemen: "${cp}"
(Susun tabel Elemen/Ruang Lingkup | CP Relevan sesuai dokumen CP resmi untuk mata pelajaran dan fase terpilih. Jangan menciptakan nama elemen atau rumusan CP. Jika dokumen CP atau materi rujukan tidak dilampirkan, beri penanda bahwa rumusan tersebut harus diverifikasi guru.)
--- DESAIN PEMBELAJARAN (9 poin bernomor persis) ---
16. (1) Capaian Pembelajaran: ringkas CP di atas.
17. (2) Tujuan Pembelajaran (TP): susun 2-4 TP yang spesifik, terukur, dan relevan dengan CP serta konteks berikut: ${konteksOtomatis}
18. (3) Pemahaman Bermakna: susun secara kontekstual dari materi dan topik di atas.
19. (4) Pertanyaan Pemantik: susun 2-3 pertanyaan yang sesuai usia dan topik.
20. (5) Lintas Disiplin Ilmu: tentukan keterkaitan yang relevan.
21. (6) Topik Pembelajaran: rumuskan dari lingkup materi, bab, dan topik/unit di atas.
22. (7) Praktik Pedagogis - Pendekatan: ${pendekatanPBM} | Metode: ${metodePBM.length > 0 ? metodePBM.join(', ') : 'Diskusi, Tanya Jawab'} | Model: ${modelPBM}
23. (8) Kemitraan Pembelajaran: ${kemitraan.length > 0 ? kemitraan.join('; ') : 'Lingkungan sekolah; Lingkungan luar sekolah (Orang Tua)'}
24. (9) Pemanfaatan Digital (TPACK): Bahan ajar${tautanBahanAjar ? ` (${tautanBahanAjar})` : ' [tautan bila ada]'}; Video${tautanVideo ? ` (${tautanVideo})` : ' [tautan bila ada]'}
--- SARANA, MEDIA & SUMBER BELAJAR ---
25. Media, Alat, dan Sumber Belajar Utama (jadi dasar poin Sarana-Prasarana & Daftar Pustaka di Lampiran): "${mediaSumber}"
--- PENGALAMAN BELAJAR (3 tahap: Awal, Inti, Penutup - tiap tahap daftar langkah bernomor urut, sisipkan label kompetensi dalam kurung tebal spt (Bernalar Kritis), (KSE: Kesadaran Diri) dsb sesuai gaya modul acuan) ---
26. Kegiatan Awal (±${durasiAwal}) - sub: Orientasi, Apersepsi, Motivasi: "${langkahPnd}"
27. Kegiatan Inti ${modelPBM} (±${durasiInti}) - ikuti sintaks resmi model ${modelPBM} berurutan, terapkan ${strategiDif.length > 0 ? strategiDif.join(' & ') : 'diferensiasi konten & proses'}: "${langkahInt}"
28. Penutup: "${langkahPnt}"
--- ASESMEN (tabel: Penilaian | Teknik | Instrumen | Rubrik | Keterangan) ---
29. Asesmen Awal/Diagnostik: "${asesmenAwl}"
30. Asesmen Formatif (baris Sikap, Pengetahuan, Keterampilan): "${asesmenFor}"
31. Asesmen Sumatif (baris Pengetahuan, Keterampilan): "${asesmenSum}"
--- REFLEKSI (2 sub-bagian) ---
32. Refleksi Guru (bernomor, min. 6 poin) - fokus: "${refleksi}"
33. Refleksi Peserta Didik (bernomor sederhana sesuai usia siswa, min. 5 poin)
--- KARAKTER, DIFERENSIASI, PENGAYAAN & REMIDIAL ---
34. Strategi Diferensiasi: ${strategiDif.length > 0 ? strategiDif.join(', ') : 'Diferensiasi Konten, Diferensiasi Proses'}
35. Kebutuhan Khusus Siswa: "${kebutuhan}"
36. Fokus Penguatan Karakter/Adab: "${karakter}"
37. Pengayaan: "${strategiPengayaan}"
38. Remidial: "${strategiRemidial}"
--- LAMPIRAN & PENGESAHAN ---
39. Lampiran Wajib: ${lampiran.length > 0 ? lampiran.join(', ') : 'Bahan Ajar, LKPD, Rubrik Penilaian'} (buat draf singkat/kerangka isi tiap lampiran, jangan hanya daftar nama)
40. Daftar Pustaka: turunkan dari sumber belajar poin 25 (sitasi sederhana, sertakan tautan bila ada).
41. Lembar Pengesahan: Kota/Tanggal: ${kotaTanggal || '[Kota, Tanggal]'} | Kepala Sekolah: ${namaKepsek}${nipKepsek ? ` (NIP. ${nipKepsek})` : ' (NIP. bila ada)'} | Guru: ${namaPenyusun}${nipPenyusun ? ` (NIP. ${nipPenyusun})` : ' (NIP. bila ada)'} - dua kolom tanda tangan berdampingan seperti modul resmi.
${instruksiTambahan ? `\n42. INSTRUKSI TAMBAHAN PENGGUNA (PRIORITAS TERTINGGI):\n"${instruksiTambahan}"\nJika instruksi tambahan bertentangan dengan isian field pada formulir, dahulukan instruksi tambahan tersebut.\n` : ''}
--------------------------------------------------
INSTRUKSI LUARAN WAJIB DIPATUHI:
1. Ikuti urutan bagian PERSIS: Sampul, Identitas Penyusun, Informasi Umum, Identifikasi (Kompetensi Awal, Dimensi Profil Lulusan, Sarana-Prasarana, Target & Jumlah PD), Komponen Inti (Fase & tabel Elemen-CP), Desain Pembelajaran (9 poin bernomor), Pengalaman Belajar (Awal/Inti/Penutup bernomor urut per tahap, reset ke 1 tiap tahap baru), Asesmen (tabel Formatif & Sumatif), Refleksi (Guru & Peserta Didik), Pengayaan-Remidial, Lampiran, Daftar Pustaka, Lembar Pengesahan.
2. Rincian langkah kegiatan inti operasional konkret agar guru bisa langsung praktik di kelas; sisipkan label kompetensi/dimensi/KSE dalam kurung tebal di akhir kalimat relevan.
3. Sisipkan strategi pengelolaan kelas akomodatif sesuai kebutuhan siswa & strategi diferensiasi terpilih.
4. Buat draf kerangka isi tiap lampiran terpilih (${lampiran.length > 0 ? lampiran.join(', ') : 'Bahan Ajar, LKPD, Rubrik Penilaian'}), minimal struktur instrumen penilaian/arahan isi LKPD, jadi satu paket utuh.
5. Gunakan Bahasa Indonesia baku, formal, edukatif, santun, moderat, dan patuh regulasi kurikulum terbaru. Jangan meninggalkan placeholder dan jangan memotong isi.
6. Untuk materi Al-Qur'an dan Hadis, pastikan teks Arab, harakat, nomor surah/ayat, terjemah, serta sumber hadis akurat. Jangan membuat dalil atau kutipan yang tidak terdapat pada sumber.
7. Selaraskan materi dengan pembelajaran Islam rahmatan lil alamin, adab, toleransi, dan konteks pendidikan Indonesia.
8. WAJIB membuat hasil akhir sebagai file Microsoft Word (.docx) yang rapi, utuh, dan siap diunduh. Lampirkan file .docx sebagai keluaran utama dan berikan tautan/tombol unduh; jangan hanya menampilkan seluruh modul sebagai teks di percakapan.${instruksiTambahan ? ' Instruksi tambahan pengguna di atas memiliki prioritas tertinggi bila bertentangan dengan isian field.' : ''}`;
document.getElementById("prompt-output-display").textContent = promptText;
}
function copyPromptText() {
const promptText = document.getElementById("prompt-output-display").textContent;
navigator.clipboard.writeText(promptText).then(() => {
const btn = document.getElementById("btn-copy-text");
btn.innerText = "Berhasil Disalin!";
setTimeout(() => {
btn.innerText = "Salin Prompt";
}, 2000);
}).catch(err => {
alert("Gagal menyalin teks secara otomatis. Silakan blok teks manual dan salin.");
});
}
function initFormDefaults() {
const v = {
nama_sekolah: "SD Islam Edumind Bekasi",
nama_penyusun: "Anies Baswedan, S.Pd.Gr.",
guru_kelas_mapel: "Guru PAI Kelas III / Pendidikan Agama Islam",
nip_penyusun: "",
mata_pelajaran: "Pendidikan Agama Islam",
tahun_ajaran: "2026/2027",
lingkup_materi_semester: "Al-Quran dan Hadis / Semester I",
nomor_bab: "Bab 1",
judul_bab: "Asyiknya Belajar Surah Al-'Alaq",
topik_unit_pembelajaran: "Membaca, menghafal, dan memahami pesan pokok QS. Al-'Alaq ayat 1-5",
kompetensi_awal: "Peserta didik mengenal huruf hijaiyah dan tanda baca dasar, mampu mengikuti bacaan surah pendek secara terbimbing, serta memahami pentingnya membaca dan belajar dengan adab yang baik.",
jumlah_peserta_didik: "25 Murid",
capaian_pembelajaran: "",
tujuan_pembelajaran: "Peserta didik mampu membaca QS. Al-'Alaq ayat 1-5 dengan tartil, menjelaskan pesan pokoknya, dan menunjukkan adab belajar yang baik.",
pemahaman_bermakna: "Wahyu pertama mengajarkan pentingnya membaca, belajar, dan mensyukuri ilmu sebagai karunia Allah Swt.",
pertanyaan_pemantik: "Mengapa perintah pertama dalam wahyu adalah membaca?\nBagaimana adab seorang muslim ketika belajar?",
lintas_disiplin_ilmu: "Bahasa Indonesia (memahami makna kosakata dan menyampaikan kembali pesan pokok ayat)",
topik_kegiatan_pembelajaran: "Menyimak murattal, membaca terbimbing, memahami pesan ayat, berdiskusi, dan mempraktikkan adab belajar",
media_dan_sumber_belajar: "Buku Siswa Pendidikan Agama Islam dan Budi Pekerti untuk SD/MI Kelas III, mushaf Al-Qur'an, audio murattal, kartu ayat dan kosakata, gambar kontekstual, papan tulis, serta LKPD.",
tautan_bahan_ajar_digital: "",
tautan_video_pembelajaran: "",
langkah_pendahuluan: "Guru mengucapkan salam, mengajak berdoa, mengecek kesiapan belajar, mengaitkan pengalaman membaca Al-Qur'an, lalu menyampaikan tujuan dan manfaat pembelajaran.",
langkah_inti: "Peserta didik menyimak murattal QS. Al-'Alaq ayat 1-5, menirukan bacaan secara terbimbing, menemukan kosakata kunci, mendiskusikan pesan pokok ayat, lalu menyajikan contoh penerapan adab belajar.",
langkah_penutup: "Guru dan peserta didik menyimpulkan pesan pembelajaran, melakukan refleksi, menetapkan tindak lanjut latihan membaca, lalu menutup dengan doa dan salam.",
asesmen_awal: "Tanya jawab dan unjuk baca singkat untuk memetakan kemampuan awal membaca Al-Qur'an serta pemahaman adab belajar.",
asesmen_formatif: "Sikap: observasi adab menyimak dan bekerja sama. Pengetahuan: LKPD pesan pokok ayat. Keterampilan: unjuk baca QS. Al-'Alaq ayat 1-5 dengan rubrik.",
asesmen_sumatif: "Pengetahuan: menjelaskan pesan pokok QS. Al-'Alaq ayat 1-5. Keterampilan: membaca ayat secara tartil dan menyajikan contoh adab belajar.",
kebutuhan_siswa: "Sebagian peserta didik mungkin memerlukan teks ayat berukuran lebih besar, audio murattal berulang, penandaan warna tajwid, atau pendampingan baca bertahap.",
penguatan_karakter: "Menanamkan rasa syukur atas kemampuan berpikir yang diberikan Tuhan, kolaborasi dan gotong royong dalam kerja kelompok, serta kemandirian dan tanggung jawab dalam mengerjakan tugas individu.",
refleksi_guru: "Apakah peserta didik mengikuti pembelajaran dengan adab yang baik, memahami pesan pokok ayat, membaca sesuai kemampuannya, dan memperoleh tindak lanjut yang tepat?",
strategi_pengayaan: "Peserta didik menelusuri pesan lain tentang pentingnya ilmu, membuat poster adab belajar, atau menjadi mitra baca bagi temannya.",
strategi_remidial: "Gunakan pemodelan ulang per ayat, audio murattal berulang, kartu potongan ayat, dan pendampingan baca bertahap sesuai kebutuhan peserta didik.",
kota_tanggal_pengesahan: "Bekasi, 22 Agustus 2026",
nama_kepala_sekolah: "Prabowo Subianto, S.Pd.Gr.",
nip_kepala_sekolah: "",
instruksiTambahan: "Susun modul ajar ini berdasarkan template yang saya lampirkan, pastikan tersusun rapi. Jadikan outputnya file ms.word (.docx) siap unduh",
};
Object.keys(v).forEach(id => { const el = document.getElementById(id); if (el) el.value = v[id]; });
}
function clearForm() {
const textFields = [
"nama_sekolah", "nama_penyusun", "guru_kelas_mapel", "nip_penyusun",
"tahun_ajaran", "lingkup_materi_semester", "nomor_bab", "judul_bab",
"topik_unit_pembelajaran", "alokasi_waktu", "durasi_kegiatan_awal", "durasi_kegiatan_inti",
"kompetensi_awal", "jumlah_peserta_didik",
"capaian_pembelajaran", "tujuan_pembelajaran", "pemahaman_bermakna", "pertanyaan_pemantik",
"lintas_disiplin_ilmu", "topik_kegiatan_pembelajaran",
"media_dan_sumber_belajar", "tautan_bahan_ajar_digital", "tautan_video_pembelajaran",
"langkah_pendahuluan", "langkah_inti", "langkah_penutup",
"asesmen_awal", "asesmen_formatif", "asesmen_sumatif",
"kebutuhan_siswa", "penguatan_karakter", "refleksi_guru",
"strategi_pengayaan", "strategi_remidial",
"kota_tanggal_pengesahan", "nama_kepala_sekolah", "nip_kepala_sekolah",
"instruksiTambahan"
];
textFields.forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
document.getElementById("mata_pelajaran").value = "Pendidikan Agama Islam";
document.getElementById("instruksiTambahan").value = "Susun modul ajar ini berdasarkan template yang saya lampirkan, pastikan tersusun rapi. Jadikan outputnya file ms.word (.docx) siap unduh";
document.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
document.getElementById("jenjang_pendidikan").selectedIndex = 0;
updateFaseOptionsByJenjang(false);
document.getElementById("pendekatan_pembelajaran").selectedIndex = 0;
document.getElementById("model_pembelajaran").selectedIndex = 0;
document.getElementById("target_peserta_didik").selectedIndex = 0;
updateCapaianPembelajaran();
document.getElementById("prompt-output-display").textContent = "Formulir telah dibersihkan.";
}
function stepField(id, delta) {
const el = document.getElementById(id);
if (!el) return;
const m = el.value.match(/\d+/);
let n = (m ? parseInt(m[0], 10) : 0) + delta;
if (n < 1) n = 1;
el.value = m ? el.value.slice(0, m.index) + n + el.value.slice(m.index + m[0].length) : String(n);
}
window.addEventListener('load', function () {
initFormDefaults();
configureAutomaticFields();
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
const clearBtn = document.getElementById('clear-form-btn');
if (clearBtn) clearBtn.addEventListener('click', clearForm);
const generateBtn = document.getElementById('generate-prompt-btn');
if (generateBtn) generateBtn.addEventListener('click', generatePrompt);
const copyBtn = document.getElementById('copy-prompt-btn');
if (copyBtn) copyBtn.addEventListener('click', copyPromptText);
document.querySelectorAll('.stp').forEach(btn => btn.addEventListener('click', function () {
const [id, delta] = btn.dataset.step.split(':');
stepField(id, parseInt(delta, 10));
}));
});
