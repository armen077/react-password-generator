const charset = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_-+=<>?/'
};

export const generatePassword: (config: {
    includeLowercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean,
    includeUppercase: boolean,
    passwordLength: number
}) => string = ({includeLowercase, includeNumbers, includeSymbols, includeUppercase, passwordLength}) => {
    let selectedCharset = '';
    if (includeLowercase) selectedCharset += charset.lowercase;
    if (includeUppercase) selectedCharset += charset.uppercase;
    if (includeNumbers) selectedCharset += charset.numbers;
    if (includeSymbols) selectedCharset += charset.symbols;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
        generatedPassword += selectedCharset[Math.floor(Math.random() * selectedCharset.length)];
    }

    return generatedPassword;
}