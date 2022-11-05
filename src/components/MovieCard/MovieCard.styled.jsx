import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Poster = styled.img`
  width: 360px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AdditionalInfoWrapper = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  > li {
    display: flex;
  }
`;
