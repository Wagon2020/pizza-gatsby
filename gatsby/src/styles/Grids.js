import styled from "styled-components";

export const HomePageGrid = styled.div`
  --columns: 2;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    // border: 1px solid red;
    height: auto;
    font-size: 0;
  }
  p {
    top: 0;
    left: 0;
    position: absolute;
    margin: 0;
    transform: rotate(-2deg) translateY(-10px);
    width: 100%;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
  }
  .mark {
    display: inline;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -80px;
    }
  }
  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
