import styled from 'styled-components';

export const ButtonStyle = styled.div`
    display: flex;
    padding: 6px 0 6px 0;
    min-height: 100%;

    justify-content: space-between;

    .register,
    .login {
        padding: 8px 12px;
        border-radius: 4px;
        border: solid 1px var(--Gray-4);
        background-color: var(--whitFixed);
        color: var(--Gray-0);
        font-weight: 600;
        display: block;
        font-size: 1.3rem;
    }

    .login {
        color: var(--Gray-2);
        border: solid 1px var(--Gray-9);
        font-size: 1.3rem;
    }
`;
