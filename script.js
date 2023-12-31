calculate = () => {

    // Mengambil inputan user pada form
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Melakukan validasi
    if(isNaN(weight) || isNaN(height)) {
        return alert("Tinggi dan Berat harus di isi dan dalam bentuk angka!");
    }

    // Membuat rumus perhitungan BMI
    let rumus = weight/(height/100)**2;

    // Menentukan status hasil dari perhitungan BMI
    let status = "";

    if(rumus < 18.5) {
        status = "Underweight";
    }else if(rumus >= 18.5 && rumus <= 24.9){
        status = "Normal Weight";
    }else if(rumus >= 25 && rumus <= 29.9){
        status = "Overweight";
    }else if(rumus >= 30){
        status = "Obesity";
    }else{
        status = "Status tidak valid!";
    }

    // Menambahkan logic pada button reset
    document.getElementById("inputFormBMI").addEventListener("reset", function() {
        document.getElementById("hasil").innerText = '';
    });

    // Menampilkan hasil dari perhitungan
    let result = document.getElementById("hasil");
    result.innerHTML = `Your BMI is <b>${rumus.toFixed(1)}</b> which means you are <b>${status}</b>`;
};

document.getElementById("inputFormBMI").addEventListener("submit", event => {
    // Mencegah form melakukan refresh
    event.preventDefault(); 

    // Memanggil function calculate
    calculate();
});
