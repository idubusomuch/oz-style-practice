import styled from 'styled-components';
import { FlexMixin, FontMixin, GRAY, TAG_COLOR } from './Style';

const ContentStyle = styled.div`
  ${FlexMixin({ direction: 'column', align: 'flex-start', gap: '5px' })}

  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }

  span {
    ${FontMixin({ size: '12px' })}
    color : ${TAG_COLOR};
    border: 1px solid ${TAG_COLOR};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    ${FontMixin({ size: '18px', weight: '600' })}
  }
  p {
    ${FontMixin({ size: '12px' })}
    color : ${GRAY}
  }
`;

export default function Content({ content }) {
  return (
    <ContentStyle>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentStyle>
  );
}
