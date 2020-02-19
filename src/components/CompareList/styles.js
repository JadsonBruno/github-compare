import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (max-width: 1920px) {
    flex-wrap: wrap;
  }
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  margin: 0 10px;

  @media (max-width: 600px) {
    margin-top: 20px;
  }

  @media (max-width: 1920px) {
    margin: 10px 10px;
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  div.button-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;

    button {
      padding: 8px;
      border-radius: 5px;
      font-size: 12px;
      font-weight: bold;

      i {
        margin-left: 5px;
      }

      &:nth-child(2n) {
        border: 1px solid #c11927;
        color: #c11927;
        &:hover {
          background: #aa1622;
          color: #fff;
          cursor: pointer;
        }
      }
      &:nth-child(2n - 1) {
        border: 1px solid #116088;
        color: #116088;
        &:hover {
          background: #0e5071;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
`;
