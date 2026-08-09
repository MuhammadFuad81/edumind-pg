<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Generator Bank Soal - Edumind</title>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
    /* Proteksi Light: Anti-Select & Anti-Drag (level halaman) */
    body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .allow-select {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    /* Elemen form WAJIB tetap bisa diketik & dipilih meski body anti-select */
    input, textarea, select, button, .form-control {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    /* Utilitas umum untuk konten tiap PG (Phase 2) */
    .card {
        background: #fff;
        border-radius: 22px;
        box-shadow: 0 10px 28px rgba(30,58,138,.12);
    }
    .output-box { white-space: pre-wrap; }
</style>
</head>
<body class="bg-slate-900 min-h-screen flex flex-col m-0 p-0">

    <!-- ============================================================
         LOGIN SCREEN — JANGAN DIUBAH (harus identik di semua PG)
         Bagian dinamis hanya: Bank Soal dan Asisten Kerja Digital Sekolah V1
    ============================================================= -->
    <div id="login-screen" data-login-username="edumind" data-login-password="akds-080826" class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-slate-900">
        <div class="sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

            <div class="text-center mb-6">
                <img src="https://growva.biz.id/gambarbebas/20260621-082723_Logo%20Edumind%20Academy%20-%20Terbaru2026%20[putih].png"
                     alt="Logo Edumind"
                     class="h-16 object-contain mx-auto mb-4 img-responsive">

                <h2 class="text-xs font-semibold text-blue-700 Sentence Case tracking-wider mt-1">
                    Prompt Generator
                </h2>

                <h2 class="text-2xl font-black tracking-tight text-slate-900">
                    Bank Soal
                </h2>

                <p class="text-xs font-semibold text-blue-700 Sentence Case tracking-wider mt-1">
                    Asisten Kerja Digital Sekolah V1
                </p>
            </div>

            <form id="login-form" action="#" method="post" onsubmit="return handleLogin(event)" class="space-y-4">

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">UserID / Username</label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <i class="fa-solid fa-user text-sm"></i>
                        </span>
                        <input type="text" id="username" placeholder="Masukkan UserID Anda" required
                               class="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all form-control">
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                            <i class="fa-solid fa-lock text-sm"></i>
                        </span>
                        <input type="password" id="password" placeholder="••••••••" required
                               class="block w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:bg-white transition-all form-control">
                    </div>
                </div>

                <div id="login-error" class="hidden text-xs font-semibold text-red-600 bg-red-50 p-3 rounded-xl border border-red-200 flex items-center gap-2">
                    <i class="fa-solid fa-circle-exclamation"></i> UserID atau Password salah. Akses ditolak!
                </div>

                <button type="submit"
                        class="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-right-to-bracket"></i> Masuk Sistem
                </button>

            </form>

            <div class="mt-6 pt-4 border-t border-gray-100 text-center space-y-1.5">
                <p class="text-[11px] text-gray-400 leading-relaxed">
                    © 2026 Edumind Academy. Seluruh hak kekayaan intelektual dilindungi undang-undang.
                </p>
                <p class="text-[11px] text-gray-400 leading-relaxed">
                    Gunakan aplikasi ini secara sah dan amanah agar keberkahannya senantiasa mengalir.
                </p>
                <p class="text-[11px] text-gray-500 font-medium flex items-center justify-center gap-1">
                    <i class="fa-brands fa-whatsapp text-green-600"></i> 0813-8584-1500 — satu-satunya nomor WhatsApp resmi Edumind Academy
                </p>
            </div>
        </div>
    </div>

    <!-- ============================================================
         APP SCREEN — Header + tombol logout SAMA di semua PG.
         Konten unik tiap PG hanya diisi di dalam <div id="app-content">
    ============================================================= -->
    <div id="app-screen" class="hidden min-h-screen flex-col bg-slate-100">
        <header class="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-sm">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white text-lg">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                    <h1 class="text-lg font-bold text-slate-800 leading-tight">Bank Soal</h1>
                    <p class="text-xs text-slate-500">Asisten Kerja Digital Sekolah V1</p>
                </div>
            </div>
            <button onclick="handleLogout()"
                    class="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition flex items-center gap-1">
                <i class="fa-solid fa-right-from-bracket"></i> Keluar
            </button>
        </header>

        <div id="app-content" class="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-7 space-y-6">

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-school mr-2"></i>1. IDENTITAS SATUAN PENDIDIKAN</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Nama Sekolah *</label>
                            <input class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="nama_sekolah" type="text" required placeholder="Contoh: SMP Islam Edumind Bekasi">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Jenjang Pendidikan</label>
                            <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="jenjang_pendidikan" onchange="updateJenjangDanPilihan()">
                                <option value="SD/MI" selected>SD/MI</option>
                                <option value="SMP/MTs">SMP/MTs</option>
                                <option value="SMA/MA">SMA/MA</option>
                                <option value="SMK">SMK</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Fase/Kelas</label>
                            <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="fase_kelas" onchange="updateCapaianPembelajaran()">
                                <option value="Fase B Kelas 3">Fase B Kelas 3</option>
                                <option value="Fase B Kelas 4" selected>Fase B Kelas 4</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Mata Pelajaran *</label>
                            <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 font-semibold" id="mata_pelajaran" onchange="updateCapaianPembelajaran()" required>
                                <option value="IPA">IPA</option>
                                <option value="IPS">IPS</option>
                                <option value="IPAS" selected>IPAS</option>
                                <option value="Biologi">Biologi</option>
                                <option value="Fisika">Fisika</option>
                                <option value="Kimia">Kimia</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-book-open mr-2"></i>2. BAB & KOMPETENSI</h3>
                    <p class="text-xs text-slate-500">Sesuai Permendikdasmen No. 13 Tahun 2025 — setiap Bab memiliki file materi ajar rujukan tersendiri.</p>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">BAB Ke- *</label>
                        <div class="flex items-center gap-2">
                            <button type="button" onclick="ubahBab(-1)" title="Kurangi nomor BAB"
                                    class="w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-blue-100 text-blue-900 border border-slate-200 rounded-lg transition">
                                <i class="fa-solid fa-chevron-down"></i>
                            </button>
                            <input class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-center font-semibold focus:ring-2 focus:ring-blue-600 allow-select" id="bab_ke" type="text" value="BAB 1" required placeholder="Contoh: BAB 1, BAB 2, dan seterusnya">
                            <button type="button" onclick="ubahBab(1)" title="Tambah nomor BAB"
                                    class="w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-blue-100 text-blue-900 border border-slate-200 rounded-lg transition">
                                <i class="fa-solid fa-chevron-up"></i>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Judul Bab *</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="judul_bab" rows="2" required placeholder="Contoh: Mengubah Bentuk Energi">Mengubah Bentuk Energi</textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Topik/Unit Pembelajaran *</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="topik_unit" rows="2" required placeholder="Contoh: Perubahan energi di sekitar kita dan fotosintesis">Perubahan energi di sekitar kita dan fotosintesis sebagai proses penting di Bumi</textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Capaian Pembelajaran (CP) Terkait *</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-700 allow-select" id="capaian_pembelajaran" rows="6" required readonly aria-live="polite" placeholder="CP akan terisi otomatis berdasarkan Mata Pelajaran dan Fase/Kelas."></textarea>
                        <p class="text-[11px] text-slate-500 mt-1">Diisi otomatis dari CP yang dilampirkan. Ubah Mata Pelajaran atau Fase/Kelas untuk memperbarui CP.</p>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Tujuan Pembelajaran (TP) yang Diukur *</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="tujuan_pembelajaran" rows="2" oninput="updateIndikatorSoal()" required placeholder="Contoh: Mengidentifikasi perubahan bentuk energi pada benda di sekitar dan menjelaskan peran fotosintesis.">Mengidentifikasi perubahan bentuk energi pada benda di sekitar serta menjelaskan peran fotosintesis dalam kehidupan.</textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Indikator Soal (Otomatis)</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-700 allow-select" id="indikator_soal" rows="2" readonly></textarea>
                        <p class="text-[11px] text-slate-500 mt-1">Diperbarui otomatis berdasarkan CP dan TP yang dipilih/ditulis.</p>
                    </div>
                </div>

                <div class="card p-6 space-y-4 border-2 border-red-300 bg-red-50/40">
                    <h3 class="text-md font-bold text-red-800 border-b border-red-200 pb-2"><i class="fa-solid fa-paperclip mr-2"></i>3. REFERENSIAL FILE BAB (VALIDITAS MUTLAK)</h3>
                    <p class="text-xs text-red-900 leading-relaxed">
                        Sistem ini WAJIB merujuk secara EKSKLUSIF pada PDF materi ajar yang Anda lampirkan untuk Bab ini saat menempelkan prompt ke AI (ChatGPT/Gemini/Claude). Ini menjamin seluruh butir soal tetap berada dalam lingkup CP resmi dan menghindari halusinasi informasi di luar buku teks rujukan.
                        <b>Prompt yang dihasilkan akan otomatis menginstruksikan AI</b>: jika ada file BAB terlampir → wajib jadikan SATU-SATUNYA acuan dan dilarang menyimpang; jika tidak ada file → AI tetap menyusun soal mandiri berdasarkan field CP/TP di atas. Anda tidak perlu mencentang apa pun — cukup lampirkan file BAB-nya nanti di chat AI.
                    </p>
                    <div>
                        <label class="block text-xs font-semibold text-red-900 mb-1">Nama File Materi/PDF (Opsional)</label>
                        <input class="w-full px-3 py-2 border border-red-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 allow-select bg-white" id="nama_file_referensi" type="text" value="IPAS_Kelas4_Bab1.pdf" placeholder="Contoh: IPAS_Kelas4_Bab1.pdf">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-red-900 mb-1">Fokus Bagian File BAB (Opsional)</label>
                        <textarea class="w-full px-3 py-2 border border-red-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 allow-select bg-white" id="fokus_file_referensi" rows="2" placeholder="Contoh: Bab 1, halaman 3-23. Kosongkan jika tidak relevan.">Bab 1, halaman 3-23</textarea>
                    </div>
                </div>

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-hands-holding-child mr-2"></i>4. DIMENSI PROFIL LULUSAN</h3>
                    <p class="text-xs text-slate-500">Pilih dimensi karakter yang diintegrasikan secara proporsional ke dalam soal.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                        <label class="flex items-center space-x-2"><input checked name="dimensi_profil_lulusan" type="checkbox" value="Keimanan"> <span>Keimanan</span></label>
                        <label class="flex items-center space-x-2"><input checked name="dimensi_profil_lulusan" type="checkbox" value="Kewargaan"> <span>Kewargaan</span></label>
                        <label class="flex items-center space-x-2"><input checked name="dimensi_profil_lulusan" type="checkbox" value="Nalar Kritis"> <span>Nalar Kritis</span></label>
                        <label class="flex items-center space-x-2"><input name="dimensi_profil_lulusan" type="checkbox" value="Kreativitas"> <span>Kreativitas</span></label>
                        <label class="flex items-center space-x-2"><input name="dimensi_profil_lulusan" type="checkbox" value="Kolaborasi"> <span>Kolaborasi</span></label>
                        <label class="flex items-center space-x-2"><input name="dimensi_profil_lulusan" type="checkbox" value="Kemandirian"> <span>Kemandirian</span></label>
                        <label class="flex items-center space-x-2"><input name="dimensi_profil_lulusan" type="checkbox" value="Kesehatan"> <span>Kesehatan</span></label>
                        <label class="flex items-center space-x-2"><input name="dimensi_profil_lulusan" type="checkbox" value="Komunikasi"> <span>Komunikasi</span></label>
                    </div>
                </div>

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-list-check mr-2"></i>5. BENTUK SOAL & KUANTITAS</h3>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Bentuk Soal (7 Bentuk Modern)</label>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                            <label class="flex items-center space-x-2"><input checked name="bentuk_soal" type="checkbox" value="Pilihan Ganda"> <span>Pilihan Ganda</span></label>
                            <label class="flex items-center space-x-2"><input name="bentuk_soal" type="checkbox" value="Pilihan Ganda Kompleks"> <span>Pilihan Ganda Kompleks</span></label>
                            <label class="flex items-center space-x-2"><input name="bentuk_soal" type="checkbox" value="Benar-Salah"> <span>Benar-Salah</span></label>
                            <label class="flex items-center space-x-2"><input name="bentuk_soal" type="checkbox" value="Menjodohkan"> <span>Menjodohkan</span></label>
                            <label class="flex items-center space-x-2"><input checked name="bentuk_soal" type="checkbox" value="Isian Singkat"> <span>Isian Singkat</span></label>
                            <label class="flex items-center space-x-2"><input checked name="bentuk_soal" type="checkbox" value="Uraian"> <span>Uraian</span></label>
                            <label class="flex items-center space-x-2"><input name="bentuk_soal" type="checkbox" value="Studi Kasus"> <span>Studi Kasus</span></label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Kuantitas (n) — Jumlah Soal Total</label>
                        <input class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="jumlah_soal" type="number" value="25" min="1">
                        <p class="text-[11px] text-slate-500 mt-1">Jumlah total harus sama dengan akumulasi jumlah soal per bentuk di bawah.</p>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Jumlah Soal per Bentuk</label>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                            <label class="flex items-center justify-between gap-3">Pilihan Ganda <input data-jumlah-bentuk="Pilihan Ganda" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="15"></label>
                            <label class="flex items-center justify-between gap-3">Pilihan Ganda Kompleks <input data-jumlah-bentuk="Pilihan Ganda Kompleks" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="0"></label>
                            <label class="flex items-center justify-between gap-3">Benar-Salah <input data-jumlah-bentuk="Benar-Salah" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="0"></label>
                            <label class="flex items-center justify-between gap-3">Menjodohkan <input data-jumlah-bentuk="Menjodohkan" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="0"></label>
                            <label class="flex items-center justify-between gap-3">Isian Singkat <input data-jumlah-bentuk="Isian Singkat" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="5"></label>
                            <label class="flex items-center justify-between gap-3">Uraian <input data-jumlah-bentuk="Uraian" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="5"></label>
                            <label class="flex items-center justify-between gap-3">Studi Kasus <input data-jumlah-bentuk="Studi Kasus" class="w-20 px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" value="0"></label>
                        </div>
                    </div>
                </div>

                <div class="card p-6 space-y-4 border-2 border-amber-300 bg-amber-50/40">
                    <h3 class="text-md font-bold text-amber-800 border-b border-amber-200 pb-2"><i class="fa-solid fa-layer-group mr-2"></i>6. PRESISI LEVEL KOGNITIF</h3>
                    <div class="grid grid-cols-1 gap-2 text-sm text-slate-700">
                        <label class="flex items-start space-x-2"><input checked name="level_kognitif" type="checkbox" value="L1 (Knowing)" class="mt-1"> <span><b>L1 (Knowing)</b> — kemampuan standar minimum mengingat dan memahami materi</span></label>
                        <label class="flex items-start space-x-2"><input checked name="level_kognitif" type="checkbox" value="L2 (Applying)" class="mt-1"> <span><b>L2 (Applying)</b> — kemampuan aplikasi konsep dalam situasi berbeda/konteks nyata</span></label>
                        <label class="flex items-start space-x-2"><input checked name="level_kognitif" type="checkbox" value="L3 (Reasoning)" class="mt-1"> <span><b>L3 (Reasoning)</b> — kemampuan penalaran kritis: analisis, evaluasi, kreasi</span></label>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Proporsi Level (Opsional)</label>
                        <input class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="proporsi_level" type="text" placeholder="Contoh: L1 30%, L2 40%, L3 30%. Kosongkan untuk proporsi seimbang otomatis.">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Tingkat Kesulitan (total harus 100%)</label>
                        <div class="grid grid-cols-3 gap-2 text-xs text-slate-700">
                            <label>Mudah <input id="kesulitan_mudah" class="mt-1 w-full px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" max="100" value="40">%</label>
                            <label>Sedang <input id="kesulitan_sedang" class="mt-1 w-full px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" max="100" value="40">%</label>
                            <label>Sulit <input id="kesulitan_sulit" class="mt-1 w-full px-2 py-1 border border-slate-200 rounded-md allow-select" type="number" min="0" max="100" value="20">%</label>
                        </div>
                    </div>
                </div>

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-compass mr-2"></i>7. KONTEKS & VARIASI STIMULUS EDUKATIF</h3>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Konteks Soal</label>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                            <label class="flex items-center space-x-2"><input checked name="konteks_soal" type="checkbox" value="Kehidupan Sehari-hari"> <span>Kehidupan Sehari-hari</span></label>
                            <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Lingkungan Sekolah"> <span>Lingkungan Sekolah</span></label>
                            <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Keluarga"> <span>Keluarga</span></label>
                            <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Masyarakat"> <span>Masyarakat</span></label>
                        <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Keislaman/Adab"> <span>Keislaman/Adab</span></label>
                        <label class="flex items-center space-x-2"><input checked name="konteks_soal" type="checkbox" value="Sains dan Teknologi"> <span>Sains dan Teknologi</span></label>
                            <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Kearifan Lokal"> <span>Kearifan Lokal</span></label>
                            <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Literasi"> <span>Literasi</span></label>
                            <label class="flex items-center space-x-2"><input name="konteks_soal" type="checkbox" value="Numerasi"> <span>Numerasi</span></label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Gunakan Stimulus Soal?</label>
                        <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="stimulus_soal" onchange="toggleJenisStimulus()">
                            <option value="Ya" selected>Ya</option>
                            <option value="Tidak">Tidak</option>
                        </select>
                    </div>
                    <div id="wrapper_jenis_stimulus">
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Jenis Stimulus (Wajib Bervariasi Tiap Batch)</label>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-700">
                            <label class="flex items-center space-x-2"><input checked name="jenis_stimulus" type="checkbox" value="Teks Bacaan"> <span>Teks Bacaan</span></label>
                            <label class="flex items-center space-x-2"><input name="jenis_stimulus" type="checkbox" value="Data/Tabel"> <span>Data/Tabel</span></label>
                            <label class="flex items-center space-x-2"><input checked name="jenis_stimulus" type="checkbox" value="Gambar/Ilustrasi"> <span>Gambar/Ilustrasi</span></label>
                            <label class="flex items-center space-x-2"><input name="jenis_stimulus" type="checkbox" value="Grafik/Diagram"> <span>Grafik/Diagram</span></label>
                            <label class="flex items-center space-x-2"><input name="jenis_stimulus" type="checkbox" value="Kasus"> <span>Kasus</span></label>
                            <label class="flex items-center space-x-2"><input name="jenis_stimulus" type="checkbox" value="Dialog"> <span>Dialog</span></label>
                            <label class="flex items-center space-x-2"><input name="jenis_stimulus" type="checkbox" value="Fenomena"> <span>Fenomena</span></label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Bahasa dan Gaya Soal</label>
                        <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="gaya_bahasa_soal">
                            <option value="Bahasa sederhana, komunikatif, dan sesuai perkembangan peserta didik">Sederhana sesuai usia peserta didik</option>
                            <option value="Bahasa Indonesia baku, formal, dan akademik" selected>Formal dan baku</option>
                            <option value="Bahasa kontekstual berbasis kehidupan sehari-hari">Kontekstual kehidupan sehari-hari</option>
                        </select>
                    </div>
                </div>

                <div class="card p-6 space-y-3 border-2 border-emerald-300 bg-emerald-50/40">
                    <h3 class="text-md font-bold text-emerald-800 border-b border-emerald-200 pb-2"><i class="fa-solid fa-shield-halved mr-2"></i>ATURAN NON-REPETISI & INDEPENDENSI BUTIR SOAL (TERKUNCI OTOMATIS)</h3>
                    <p class="text-xs text-emerald-900 leading-relaxed">
                        Jika satu stimulus dipakai untuk lebih dari satu soal, AI dilarang keras membuat butir soal yang jawabannya sudah tertera pada soal sebelumnya dalam stimulus yang sama. Setiap soal harus berdiri sendiri secara logika.
                    </p>
                </div>

                <div class="card p-6 space-y-3">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-note-sticky mr-2"></i>8. CATATAN PERUNTUKAN (BUKAN FILTER)</h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Sejak pendekatan Bank Soal berbasis BAB ini diberlakukan, jenis penilaian (Asesmen Diagnostik, Formatif, Sumatif, Ujian Sekolah, dst) TIDAK LAGI menjadi filter/pilihan yang membatasi soal yang dihasilkan. Guru diberi otonomi penuh untuk memakai output bank soal ini sesuai kebutuhan asesmen apa pun. Kolom di bawah ini murni catatan pengingat pribadi, opsional, dan tidak memengaruhi instruksi ke AI.
                    </p>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Rencana Peruntukan (Opsional, Catatan Pribadi)</label>
                        <input class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="catatan_peruntukan" type="text" placeholder="Contoh: rencana dipakai sebagian untuk Asesmen Diagnostik, sebagian untuk Ujian Sekolah">
                    </div>
                </div>

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-table-list mr-2"></i>9. FORMAT & KOMPONEN BANK SOAL</h3>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Format Bank Soal</label>
                        <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="format_bank_soal">
                            <option value="Tabel Bank Soal" selected>Tabel Bank Soal</option>
                            <option value="Daftar Soal Berurutan">Daftar Soal Berurutan</option>
                            <option value="Kartu Soal">Kartu Soal</option>
                            <option value="Paket Soal Lengkap">Paket Soal Lengkap</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-2">Komponen yang Dicantumkan</label>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-slate-700">
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Nomor Soal"> <span>Nomor Soal</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Materi Pokok"> <span>Materi Pokok</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Tujuan Pembelajaran"> <span>Tujuan Pembelajaran</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Level Kognitif"> <span>Level Kognitif</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Indikator Soal"> <span>Indikator Soal</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Bentuk Soal"> <span>Bentuk Soal</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Butir Soal"> <span>Butir Soal</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Pilihan Jawaban"> <span>Pilihan Jawaban</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Kunci Jawaban"> <span>Kunci Jawaban</span></label>
                            <label class="flex items-center space-x-1"><input name="komponen_bank_soal" type="checkbox" value="Pembahasan"> <span>Pembahasan</span></label>
                            <label class="flex items-center space-x-1"><input name="komponen_bank_soal" type="checkbox" value="Skor"> <span>Skor</span></label>
                            <label class="flex items-center space-x-1"><input checked name="komponen_bank_soal" type="checkbox" value="Tingkat Kesulitan"> <span>Tingkat Kesulitan</span></label>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Sertakan Kunci Jawaban</label>
                            <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="sertakan_kunci_jawaban">
                                <option value="Ya" selected>Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Sertakan Pembahasan</label>
                            <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="sertakan_pembahasan">
                                <option value="Ya" selected>Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-600 mb-1">Sertakan Pedoman Penskoran</label>
                            <select class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600" id="sertakan_pedoman_penskoran">
                                <option value="Ya" selected>Ya</option>
                                <option value="Tidak">Tidak</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="card p-6 space-y-4">
                    <h3 class="text-md font-bold text-blue-900 border-b border-slate-100 pb-2"><i class="fa-solid fa-pen mr-2"></i>10. CATATAN KHUSUS</h3>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Catatan Khusus Penyusunan Soal</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="catatan_khusus_penyusunan_soal" rows="2" placeholder="Contoh: hindari soal jebakan, gunakan bahasa sederhana, integrasikan nilai Islam, sesuaikan dengan konteks sekolah."></textarea>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 mb-1">Instruksi Tambahan (Opsional)</label>
                        <textarea class="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 allow-select" id="instruksiTambahan" rows="2" placeholder="Ada catatan atau kebutuhan khusus lain yang belum tercakup di atas? Tuliskan di sini..."></textarea>
                    </div>
                </div>

                <div class="flex flex-wrap gap-3">
                    <button class="flex-1 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl transition duration-150" onclick="clearForm()">
                        <i class="fa-solid fa-trash-can mr-1"></i> Kosongkan
                    </button>
                    <button class="flex-1 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold rounded-xl transition duration-150" onclick="muatContohIPAS()">
                        <i class="fa-solid fa-flask mr-1"></i> Muat Contoh IPAS Kelas 4
                    </button>
                    <button class="flex-1 py-3 bg-violet-100 hover:bg-violet-200 text-violet-800 font-semibold rounded-xl transition duration-150" onclick="simpanKonfigurasi()">
                        <i class="fa-solid fa-floppy-disk mr-1"></i> Simpan di Perangkat
                    </button>
                    <button class="flex-1 py-3 bg-violet-100 hover:bg-violet-200 text-violet-800 font-semibold rounded-xl transition duration-150" onclick="muatKonfigurasi()">
                        <i class="fa-solid fa-clock-rotate-left mr-1"></i> Muat Konfigurasi
                    </button>
                    <button class="flex-[2] py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-600/20 transition duration-150" onclick="generatePromptBankSoal()">
                        <i class="fa-solid fa-wand-magic-sparkles mr-1"></i> Hasilkan Prompt Bank Soal
                    </button>
                </div>
            </div>

            <div class="lg:col-span-5 flex flex-col">
                <div class="card p-6 flex-1 flex flex-col sticky top-24">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                        <h3 class="text-md font-bold text-slate-800"><i class="fa-solid fa-terminal mr-2 text-emerald-600"></i>AI PROMPT READY</h3>
                        <div class="flex items-center gap-2">
                            <button class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-medium transition flex items-center space-x-1 allow-select" onclick="copyToClipboard()">
                                <i class="fa-regular fa-copy"></i> <span id="copyText">Salin Prompt</span>
                            </button>
                            <button class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-medium transition flex items-center space-x-1 allow-select" onclick="downloadPromptTxt()">
                                <i class="fa-solid fa-download"></i> <span>Unduh .txt</span>
                            </button>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 mb-3">
                        Salin petunjuk di bawah ini dan tempelkan ke AI (seperti ChatGPT/Gemini). Jika Anda melampirkan file materi di chat AI tersebut, prompt ini otomatis akan menginstruksikan AI menjadikannya acuan utama.
                    </p>
                    <div class="flex-1 min-h-[400px] lg:min-h-[0px] bg-slate-950 rounded-xl p-4 text-slate-200 font-mono text-xs overflow-y-auto border border-slate-800 allow-select">
                        <div class="output-box" id="outputPrompt">Isi data di formulir kiri lalu klik tombol "Hasilkan Prompt Bank Soal" untuk melihat instruksi AI siap pakai...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <script src="https://raw.githubusercontent.com/MuhammadFuad81/edumind-pg/main/bank-soal-ipa-ips-ipas-lengkap-080826.js?v=20260809-2"></script>

</body>
</html>
