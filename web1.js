// Ambil data kanji dari localStorage
let kanjiList = JSON.parse(localStorage.getItem('kanjiList')) || [];

// Menampilkan data kanji yang sudah disimpan ke dalam tabel
function updateKanjiTable() {
    const tableBody = document.querySelector('#kanji-table tbody');
    tableBody.innerHTML = '';  // Kosongkan tabel sebelum menambahkan data baru

    kanjiList.forEach((kanjiData, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${kanjiData.kanji}</td>
            <td>${kanjiData.read}</td>
            <td>${kanjiData.meaning}</td>
            <td><button onclick="deleteKanji(${index})">Hapus</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Menyimpan kanji ke localStorage dan memperbarui tabel
document.getElementById('kanji-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const kanji = document.getElementById('kanji').value;
    const read = document.getElementById('read').value;
    const meaning = document.getElementById('meaning').value;

    // Simpan data ke dalam array kanjiList
    kanjiList.push({ kanji, read, meaning });
    localStorage.setItem('kanjiList', JSON.stringify(kanjiList));

    // Reset form dan tampilkan data terbaru
    document.getElementById('kanji-form').reset();
    updateKanjiTable();
});

// Fungsi untuk menghapus kanji berdasarkan index
function deleteKanji(index) {
    kanjiList.splice(index, 1); // Hapus elemen dari array berdasarkan index
    localStorage.setItem('kanjiList', JSON.stringify(kanjiList)); // Simpan kembali ke localStorage
    updateKanjiTable(); // Perbarui tampilan tabel
}

// Memanggil fungsi untuk menampilkan tabel kanji pertama kali
updateKanjiTable();
