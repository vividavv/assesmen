// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Ambil semua elemen card
    var cards = document.querySelectorAll('.card');

    // Ambil elemen menu dan list-group
    var menu = document.querySelector('.menu');
    var listGroup = document.querySelector('.list-group');

    // Tambahkan event listener untuk setiap card
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            // Dapatkan judul dan harga dari card yang diklik
            var title = card.querySelector('.card-title').innerText;
            var price = card.querySelector('.card-text').innerText;
            var priceNum = card.querySelector('.card-text > span').innerText;
            
            // Buat elemen li untuk ditambahkan ke list-group
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.dataset.price = priceNum;

            // Tambahkan judul dan harga ke dalam elemen li
            listItem.innerHTML = `
                <span>${title} - ${priceNum}</span>
                <button class="btn btn btn-sm float-right delete-btn">
                <img src="img/trash-can.png" alt="" width="20" height="24">
                </button>
            `;

            // Tambahkan elemen li ke dalam list-group
            listGroup.appendChild(listItem);

            // Gulirkan menu jika diperlukan
            menu.scrollTop = menu.scrollHeight;

            // Tambahkan event listener untuk tombol delete
            var deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', function () {
                // Hapus elemen li saat tombol delete diklik
                listItem.remove();
            });

            hitung()
        });
    });
});

function hitung() {
    var ul = document.getElementsByClassName('list-group-item');
    var totalHarga = 0;

    // Iterasi melalui setiap elemen dan menambahkan harga ke totalHarga
    Array.from(ul).forEach(function (item) {
        var priceNum = parseFloat(item.dataset.price);
        totalHarga += priceNum;
    });

    // Hitung pajak 10%
    var pajak = totalHarga * 0.1;

    // Menampilkan total harga dan pajak ke console atau di tempat lain sesuai kebutuhan
    console.log('Total Harga (Before Tax): ' + totalHarga);
    console.log('Pajak (10%): ' + pajak);

    // Total harga setelah pajak
    var totalHargaSetelahPajak = totalHarga + pajak;

    // Mengupdate tampilan total harga di HTML
    var totalAmountElement = document.querySelector('.awal');
    totalAmountElement.textContent = totalHarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    var totalAmountElement = document.querySelector('.pajak');
    totalAmountElement.textContent = pajak.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    var totalAmountElement = document.querySelector('.total');
    totalAmountElement.textContent = totalHargaSetelahPajak.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    
    
}