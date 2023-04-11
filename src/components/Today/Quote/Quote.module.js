import styled from 'styled-components';

export const SectionQuote = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 260px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    margin-right: 0;
    max-width: 380px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 15px;
    min-width: 395px;
  }
`;
export const QuoteText = styled.p`
  text-align: end;
  font-style: italic;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const QuoteAuthor = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: end;
`;

// .section_quote {
//   max-width: 395px;
//   @include desktop {
//
//   }
// }
