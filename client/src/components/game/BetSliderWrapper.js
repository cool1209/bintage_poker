import React from 'react';
import styled from 'styled-components';

const BetSliderWrapper = styled.div({
  gridColumn: '1 / 5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '2rem',
  padding: '0.5rem 1rem',
});

const BetSliderInput = styled.input`
  width: 100%;
`;

export const BetSlider = (currentTable, seatId, bet, setBet) => (
  <BetSliderWrapper>
    <BetSliderInput
      type="range"
      style={{ width: '100%' }}
      min={currentTable.callAmount}
      value={bet}
      onChange={(e) => setBet(e.target.value)}
    />
  </BetSliderWrapper>
);