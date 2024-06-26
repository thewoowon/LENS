import styled from "@emotion/styled";
import { toast } from "react-toastify";

type TableBlockProps = {
  name: string;
  alias: string;
  primaryKey: string;
  foreignKey: string;
};

const TableBlock = ({
  name,
  alias,
  primaryKey,
  foreignKey,
}: TableBlockProps) => {
  return (
    <Container>
      <Info>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                width: "50px",
                color: "black",
              }}
            >
              TABLE
            </div>
            <div
              style={{
                color: "black",
              }}
            >
              {name}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                width: "50px",
                color: "black",
              }}
            >
              ALIAS
            </div>
            <div
              style={{
                color: "black",
              }}
            >
              {alias}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              width: "50px",
              color: "black",
            }}
          >
            PK
          </div>
          <div
            style={{
              color: "black",
            }}
          >
            {primaryKey}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              width: "50px",
              color: "black",
            }}
          >
            FK
          </div>
          <div
            style={{
              color: "black",
            }}
          >
            {foreignKey}
          </div>
        </div>
      </Info>
      <Cross
        onClick={() => {
          toast.error("삭제 못해요! 미안해요..");
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.19575 11.8042C1.35409 11.9625 1.51242 12.0417 1.74992 12.0417C1.98742 12.0417 2.14575 11.9625 2.30409 11.8042L6.49992 7.60834L10.6958 11.8042C10.8541 11.9625 11.0916 12.0417 11.2499 12.0417C11.4083 12.0417 11.6458 11.9625 11.8041 11.8042C12.1208 11.4875 12.1208 11.0125 11.8041 10.6958L7.60825 6.50001L11.8041 2.30418C12.1208 1.98751 12.1208 1.51251 11.8041 1.19584C11.4874 0.879177 11.0124 0.879177 10.6958 1.19584L6.49992 5.39168L2.30409 1.19584C1.98742 0.879177 1.51242 0.879177 1.19575 1.19584C0.879085 1.51251 0.879085 1.98751 1.19575 2.30418L5.39159 6.50001L1.19575 10.6958C0.879085 11.0125 0.879085 11.4875 1.19575 11.8042Z"
            fill="#3E3E3E"
          />
        </svg>
      </Cross>
    </Container>
  );
};

export default TableBlock;

const Container = styled.div`
  display: flex;
  margin: 20px 0;
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
`;

const Cross = styled.div`
  cursor: pointer;
`;
