function hexStringToRGB(hexString) {
    hexString = hexString.replace(/^#/, '').toUpperCase();

    let r = parseInt(hexString.substring(0, 2), 16);
    let g = parseInt(hexString.substring(2, 4), 16);
    let b = parseInt(hexString.substring(4, 6), 16);

    return { r, g, b };
}