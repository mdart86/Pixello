import styled from "styled-components";

//used in: 
//  profile
export const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: auto;
    row-gap: 8px;
    column-gap: 8px;
    margin: 10px auto;
    ${window.innerWidth < 450 ? "margin-bottom: 115px;": "margin-bottom: 10px;"}
    width: 90%;
    justify-content: center;
    &>*{
        aspect-ratio: 1 / 1;
    }
`