import React from 'react';
import styled, { keyframes } from 'styled-components';

const keyframeLoading = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingSkeleton = styled.div`
  background-color: gray;
  border-radius: 16px;
  margin-bottom: 10px;
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  animation: ${keyframeLoading} 500 infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton height={height} width={width} />;
