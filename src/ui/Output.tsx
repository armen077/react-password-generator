import styled from "styled-components";
import {FC} from "react";
import {ReactComponent as CopyIcon} from "../icons/copy.svg"

interface IProps {
    value: string
    readOnly: boolean
}

const Container = styled.div`
  position: relative;
  display: flex;
  border: 1px solid #9D8189;
  border-radius: 4px;
  overflow: hidden;
`

const CustomOutput = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 100%;
  border: none;
  outline: none;
`;

const CopyButton = styled.button`
  position: absolute;
  background-color: transparent;
  outline: none;
  border: none;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 6px;
  border-radius: 4px;
  transition: background-color 0.15s ease-in;
  
  &:hover {
    background-color: #CDC6AE;
  }
`;

const Output: FC<IProps> = ({value, readOnly}) => {
    const copyPassword = () => {
        navigator.clipboard.writeText(value).then(() => {
            alert('Password copied to clipboard!');
        });
    }

    return (
        <Container>
            <CustomOutput type="text" value={value} readOnly={readOnly}/>
            {!!value.length && (
                <CopyButton onClick={copyPassword}>
                    <CopyIcon />
                </CopyButton>
            )}
        </Container>
    )
}


export default Output