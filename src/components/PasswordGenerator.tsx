import React, {Dispatch, useMemo, useState} from 'react';
import {generatePassword} from "../utils/generatePassword";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import GeneratorContainer from "../ui/GeneratorContainer";
import Output from "../ui/Output";

const PasswordGenerator = () => {

    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(10);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const handleGenerate = () => {
        setPassword(generatePassword({
            includeLowercase,
            includeNumbers,
            includeSymbols,
            includeUppercase,
            passwordLength
        }));
    }

    const checkedCount = useMemo(() => {
        return [includeLowercase, includeUppercase, includeNumbers, includeSymbols].filter(Boolean).length;
    }, [includeLowercase, includeNumbers, includeSymbols, includeUppercase]);

    const handleCheckboxChange = (setStateFunction: Dispatch<React.SetStateAction<boolean>>, currentState: boolean) => {
        if (currentState && checkedCount === 1) {
            alert("You should select at least 1 option")
            return;
        }

        setStateFunction(!currentState);
    }

    return (
        <GeneratorContainer>
            <Output value={password} readOnly/>

            <label>Password Length: {passwordLength}</label>
            <input type="range" value={passwordLength} onChange={e => setPasswordLength(+e.target.value)} min="6"
                   max="32"/>

            <Checkbox
                checked={includeLowercase}
                onChange={() => handleCheckboxChange(setIncludeLowercase, includeLowercase)}
                label="Include Lowercase"/>
            <Checkbox
                checked={includeUppercase}
                onChange={() => handleCheckboxChange(setIncludeUppercase, includeUppercase)}
                label="Include Uppercase"/>
            <Checkbox
                checked={includeNumbers}
                onChange={() => handleCheckboxChange(setIncludeNumbers, includeNumbers)}
                label="Include Numbers"/>
            <Checkbox
                checked={includeSymbols}
                onChange={() => handleCheckboxChange(setIncludeSymbols, includeSymbols)}
                label="Include Symbols"
            />

            <Button onClick={handleGenerate}>Generate</Button>
        </GeneratorContainer>
    );
}

export default PasswordGenerator;