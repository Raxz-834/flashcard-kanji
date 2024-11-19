// Ambil data kanji dari localStorage
let kanjiList = JSON.parse(localStorage.getItem('kanjiList')) || [];
let currentIndex = 0;
let isFlipped = false;

// Fungsi untuk memperbarui flashcard dengan data kanji
function updateFlashcard() {
    if (kanjiList.length === 0) {
        alert('Tidak ada data kanji!');
        return;
    }
    
    const kanjiData = kanjiList[currentIndex];
    document.getElementById('kanjiDisplay').innerText = kanjiData.kanji;
    document.getElementById('readDisplay').innerText = `Baca: ${kanjiData.read}`;
    document.getElementById('meaningDisplay').innerText = `Arti: ${kanjiData.meaning}`;
    
    // Reset flashcard ke tampilan depan (kanji)
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('show-details');
    isFlipped = false;
}

// Fungsi untuk flip card (klik untuk lihat baca dan arti)
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    
    if (!isFlipped) {
        flashcard.classList.add('show-details');
    } else {
        flashcard.classList.remove('show-details');
    }
    isFlipped = !isFlipped;
}

// Fungsi untuk pindah ke kanji berikutnya
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % kanjiList.length; // Loop ke awal setelah akhir
    updateFlashcard();
});

// Update flashcard pertama kali saat halaman dimuat
updateFlashcard();
