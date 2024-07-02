
document.addEventListener('DOMContentLoaded', () => {
    const changingText = document.querySelector('.changing-text');
    const cursor = document.querySelector('.cursor');
    const texts = ["PARTNER.", "COFOUNDER."];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
        currentText = texts[index];
        if (!isDeleting) {
            changingText.textContent += currentText.charAt(charIndex);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause before deleting
            } else {
                setTimeout(type, 200);
            }
        } else {
            changingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(type, 500); // Pause before typing the next text
            } else {
                setTimeout(type, 100);
            }
        }
    }

    type();
});
