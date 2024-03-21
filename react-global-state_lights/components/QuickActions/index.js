import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleLightsOff, handleLightsOn }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={handleLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={() => handleLightsOn()}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
