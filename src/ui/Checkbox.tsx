import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';

interface IProps {
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    label: string
}

const CheckboxLabel = styled.label`
    display: flex;
    gap: 10px;
    font-weight: 500;
    cursor: pointer;
`;

const Checkbox: FC<IProps> = ({ checked, onChange, label })=> {
    return (
        <CheckboxLabel>
            <input type="checkbox" style={{cursor: "pointer", width: "20px"}} checked={checked} onChange={onChange} />
            {label}
        </CheckboxLabel>
    );
}

export default Checkbox