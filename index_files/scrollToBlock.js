function scrollToBlock(id) {
    const element = document.getElementById(id);
    if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    }
}