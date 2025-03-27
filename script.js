document.addEventListener("DOMContentLoaded", function() {
    let saveButton = document.getElementById("saveBtn");
    let table = document.getElementById("dataTable");
    let showDateBtn = document.getElementById("showDateBtn");
    let currentDateDisplay = document.getElementById("currentDate");

    // Event listener untuk tombol "Tampilkan Tanggal"
    showDateBtn.addEventListener("click", function() {
        let currentDate = new Date().toLocaleDateString();
        currentDateDisplay.textContent = "Tanggal Hari Ini: " + currentDate;
    });

    // Event listener untuk tombol "Simpan"
    saveButton.addEventListener("click", function() {
        let namaInput = document.getElementById("nama").value.trim();
        let kelahiranInput = document.getElementById("kelahiran").value.trim();
        let umurInput = document.getElementById("umur").value.trim();


        if (namaInput === "" || kelahiranInput === "" || umurInput === "" ) {
            alert("Semua kolom harus diisi!");
            return;
        }

        let newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${namaInput}</td>
            <td>${kelahiranInput}</td>
            <td>${umurInput}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Hapus</button>
            </td>
        `;

        document.getElementById("nama").value = "";
        document.getElementById("kelahiran").value = "";
        document.getElementById("umur").value = "";
        alert("Data berhasil disimpan!");
    });

    // Delegasi event untuk Edit dan Hapus
    table.addEventListener("click", function(event) {
        let target = event.target;
        let row = target.closest("tr");
        let cells = row.getElementsByTagName("td");

        if (target.classList.contains("edit-btn")) {
            let newnama = prompt("Masukkan nama Baru:", cells[0].textContent);
            let newkelahiran = prompt("Masukkan kelahiran Baru:", cells[1].textContent);
            let newUmur = prompt("Masukkan Umur Baru:", cells[2].textContent);

            if (newnama && newkelahiran && newUmur) {
                cells[0].textContent = newnama;
                cells[1].textContent = newkelahiran;
                cells[2].textContent = newUmur;
                alert("Data berhasil diperbarui!");
            }
        }

        if (target.classList.contains("delete-btn")) {
            if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
                row.remove();
                alert("Data berhasil dihapus!");
            }
        }
    });
});
