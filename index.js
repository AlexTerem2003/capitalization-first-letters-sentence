function capitalizeFirstLetters(text) {
    if (typeof text !== 'string') {
        throw new Error('Input must be a string');
    }

    return text
        .split(/([.!?]\s+)/) 
        .map((part, index) => {
            if (index % 2 === 0) { 
                return part.charAt(0).toUpperCase() + part.slice(1);
            }
            return part; 
        })
        .join('')
        .replace(/\s+/g, ' '); 
}

module.exports = capitalizeFirstLetters;
