// การควบคุมการเล่นเสียงด้วย JavaScript
document.getElementById('ching-button').addEventListener('click', function() {
    var chingSound = document.getElementById('ching-sound');
    chingSound.currentTime = 0; // รีเซ็ตเสียงไปจุดเริ่มต้น
    chingSound.play();
});

document.getElementById('chap-button').addEventListener('click', function() {
    var chapSound = document.getElementById('chap-sound');
    chapSound.currentTime = 0; // รีเซ็ตเสียงไปจุดเริ่มต้น
    chapSound.play();
});