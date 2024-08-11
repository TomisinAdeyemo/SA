/* function hideLoader() {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000);
} */

window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
});
