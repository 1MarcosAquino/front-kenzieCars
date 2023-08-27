import styled from 'styled-components';

export const ProfileStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 20px;
    align-items: center;
    color: var(--Gray-2);
    padding: 0.1rem 0.2rem;
    position: relative;

    .profile__menu {
        position: absolute;
        top: 50px;
        box-shadow: 0px 0px 12px var(--Gray-5);
        background-color: white;
        padding: 10px;
        font-size: 1.9rem;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .initialLetter {
        border: transparent;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--brand-2);
        color: var(--whitFixed);
        width: 4rem;
        height: 4rem;
        font-size: 2.7rem;
        font-family: 'Inter', sans-serif;
    }

    .fullName {
        color: var(--Gray-2);
        font-family: 'Lexend', sans-serif;
        font-size: 1.9rem;
        font-weight: 400;
    }
`;
