import styled from 'styled-components';

export const Card = styled.div`
    width: 14em;
    display: flex;
    gap: .4em;
    flex-direction: column;
    justify-content: center;
    padding: 1em 2em;
    border-radius: 1em;
    background: #ff8533;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.4px);
    -webkit-backdrop-filter: blur(6.4px);
    color: #2b385b 
`;

export const BoardStyle = styled.div`
    width: 95vw;
    height: 95vh;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    border-radius: 2em;
    background: transparent;
    flex-wrap: wrap;
`
