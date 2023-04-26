import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #8c8cd9;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem
`

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`

export const Text = styled.input`
  border: 2px solid #003333;
  width: 12.5rem;
  padding: 0.375rem;
  border-radius: 2px;
  margin-bottom: 1rem;

  &:focus {
        outline: none;
        box-shadow: 0px 0px 0.5rem #00ffff;
    }
`;

export const Button = styled.button`
  display: inline-block;
  flex: 1;
  border: none;
  background-color: #008080;
  color: white;
  max-height: 2.5rem;
  width: 4rem;
  padding: 0.5rem;
  border-radius: 0.375em;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const TaskCount = styled.span`
  margin: 0.75rem;
`;

export const Tasks = styled.div`
  margin-bottom: 1rem;
`;

export const ListContainer = styled.div`
  width: 80%;
  padding: 1rem;
`;

export const ListUl = styled.ul`
    width: 100%;
`;

export const List = styled.li`
  display: inline-block;
  liststyle: "none";
  text-decoration: "line-through";
  background-color: #7979d2;
  padding: 0.5rem;
  width: 48%;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem
`;
