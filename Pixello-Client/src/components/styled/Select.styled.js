import styled from "styled-components";

//used in:
//  create post
//  filterForm
export const Select = styled.select`
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
    background: var(--white);
    border: 3px solid var(--blue);
    border-radius: 5px;
    color: var(--charcoal);
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    &:focus {
        outline: none;
        border: 3px solid var(--dark-pink);
    }
`