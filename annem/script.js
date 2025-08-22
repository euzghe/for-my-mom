document.addEventListener('DOMContentLoaded', function() {
    const zarfKapsayici = document.querySelector('.zarf-kapsayici');

    zarfKapsayici.addEventListener('click', function() {
        // Zarfın "acik" (open) sınıfını ekleyip/çıkarır
        zarfKapsayici.classList.toggle('acik');
    });
});