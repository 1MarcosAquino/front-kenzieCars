import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--Gray-10);

    > div.container {
        display: inherit;
        justify-content: space-between;
        align-items: center;
        height: 4.5rem;
        border-radius: 1px solid red;
        position: relative;
    }

    .children {
        border-left: 2px solid var(--Gray-6);
        padding-left: 5px;
    }

    .navigation {
        display: none;
    }
    .visible {
        display: block;
    }
    .invisible {
        display: none;
    }

    @media (min-width: 610px) {
        .menu {
            display: none;
        }
        .navigation {
            display: block;
        }
    }
`;

export const HeaderTitleStyle = styled.h1`
    font-weight: --button-big-text;
    font-size: 2.9rem;
    font-weight: bold;
    background: linear-gradient(
        to right,
        var(--Gray-0),
        35%,
        var(--brand-1) 75%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`;
