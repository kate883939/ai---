import React from 'react';
import styled from 'styled-components';
import { colors, theme } from './ColorSystem';

// Typography 系統定義
export const typography = {
  // 標題樣式
  h1: {
    desktop: {
      fontSize: '64px',
      lineHeight: '80px',
      fontWeight: 700,
    },
    mobile: {
      fontSize: '40px',
      lineHeight: '50px',
      fontWeight: 700,
    },
  },
  h2: {
    desktop: {
      fontSize: '48px',
      lineHeight: '64px',
      fontWeight: 700,
    },
    mobile: {
      fontSize: '32px',
      lineHeight: '42px',
      fontWeight: 700,
    },
  },
  h3: {
    desktop: {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: 700,
    },
    mobile: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 700,
    },
  },
  h4: {
    desktop: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 700,
    },
    mobile: {
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: 700,
    },
  },
  h5: {
    desktop: {
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: 700,
    },
    mobile: {
      fontSize: '18px',
      lineHeight: '27px',
      fontWeight: 700,
    },
  },
  h6: {
    desktop: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 700,
    },
    mobile: {
      fontSize: '17px',
      lineHeight: '26px',
      fontWeight: 700,
    },
  },
  // 副標題樣式
  subtitle1: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 500,
  },
  // 正文樣式
  body1: {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 400,
  },
  body2: {
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 400,
  },
  // 按鈕文字樣式
  button: {
    large: {
      fontSize: '20px',
      lineHeight: '26px',
      fontWeight: 700,
    },
    medium: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 700,
    },
    small: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: 700,
    },
  },
  // 說明文字樣式
  caption: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 400,
  },
  overline: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 700,
  },
};

// 樣式組件
const TypographyContainer = styled.div`
  padding: 40px;
  background: ${colors.background.default};
  font-family: ${theme.typography.fontFamily.primary};
  border-radius: 16px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.text.primary};
  margin-bottom: 24px;
  text-transform: uppercase;
`;

const TypographyGrid = styled.div`
  display: grid;
  gap: 24px;
`;

const TypographyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
  padding: 16px 0;
  border-bottom: 1px dashed ${colors.border.main};
  justify-content: flex-start;
`;

const TypographyPreview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  min-width: 120px;
  align-items: center;
  flex: 1;
`;

const TypographyLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.text.secondary};
  font-family: 'Poppins', sans-serif;
  min-width: 120px;
  text-align: left;
  display: inline-block;
`;

const TypographySpecs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
  margin-left: auto;
`;

const TypographySpec = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.text.secondary};
  font-family: 'Poppins', sans-serif;
  text-align: left;
`;

// 字體樣式組件
const H1Desktop = styled.h1`
  font-size: ${typography.h1.desktop.fontSize};
  line-height: ${typography.h1.desktop.lineHeight};
  font-weight: ${typography.h1.desktop.fontWeight};
  color: ${colors.text.primary};
`;

const H1Mobile = styled.h1`
  font-size: ${typography.h1.mobile.fontSize};
  line-height: ${typography.h1.mobile.lineHeight};
  font-weight: ${typography.h1.mobile.fontWeight};
  color: ${colors.text.primary};
`;

const H2Desktop = styled.h2`
  font-size: ${typography.h2.desktop.fontSize};
  line-height: ${typography.h2.desktop.lineHeight};
  font-weight: ${typography.h2.desktop.fontWeight};
  color: ${colors.text.primary};
`;

const H2Mobile = styled.h2`
  font-size: ${typography.h2.mobile.fontSize};
  line-height: ${typography.h2.mobile.lineHeight};
  font-weight: ${typography.h2.mobile.fontWeight};
  color: ${colors.text.primary};
`;

const H3Desktop = styled.h3`
  font-size: ${typography.h3.desktop.fontSize};
  line-height: ${typography.h3.desktop.lineHeight};
  font-weight: ${typography.h3.desktop.fontWeight};
  color: ${colors.text.primary};
`;

const H3Mobile = styled.h3`
  font-size: ${typography.h3.mobile.fontSize};
  line-height: ${typography.h3.mobile.lineHeight};
  font-weight: ${typography.h3.mobile.fontWeight};
  color: ${colors.text.primary};
`;

const H4Desktop = styled.h4`
  font-size: ${typography.h4.desktop.fontSize};
  line-height: ${typography.h4.desktop.lineHeight};
  font-weight: ${typography.h4.desktop.fontWeight};
  color: ${colors.text.primary};
`;

const H4Mobile = styled.h4`
  font-size: ${typography.h4.mobile.fontSize};
  line-height: ${typography.h4.mobile.lineHeight};
  font-weight: ${typography.h4.mobile.fontWeight};
  color: ${colors.text.primary};
`;

const H5Desktop = styled.h5`
  font-size: ${typography.h5.desktop.fontSize};
  line-height: ${typography.h5.desktop.lineHeight};
  font-weight: ${typography.h5.desktop.fontWeight};
  color: ${colors.text.primary};
`;

const H5Mobile = styled.h5`
  font-size: ${typography.h5.mobile.fontSize};
  line-height: ${typography.h5.mobile.lineHeight};
  font-weight: ${typography.h5.mobile.fontWeight};
  color: ${colors.text.primary};
`;

const H6Desktop = styled.h6`
  font-size: ${typography.h6.desktop.fontSize};
  line-height: ${typography.h6.desktop.lineHeight};
  font-weight: ${typography.h6.desktop.fontWeight};
  color: ${colors.text.primary};
`;

const H6Mobile = styled.h6`
  font-size: ${typography.h6.mobile.fontSize};
  line-height: ${typography.h6.mobile.lineHeight};
  font-weight: ${typography.h6.mobile.fontWeight};
  color: ${colors.text.primary};
`;

const Subtitle1 = styled.div`
  font-size: ${typography.subtitle1.fontSize};
  line-height: ${typography.subtitle1.lineHeight};
  font-weight: ${typography.subtitle1.fontWeight};
  color: ${colors.text.primary};
`;

const Subtitle2 = styled.div`
  font-size: ${typography.subtitle2.fontSize};
  line-height: ${typography.subtitle2.lineHeight};
  font-weight: ${typography.subtitle2.fontWeight};
  color: ${colors.text.primary};
`;

const Body1 = styled.div`
  font-size: ${typography.body1.fontSize};
  line-height: ${typography.body1.lineHeight};
  font-weight: ${typography.body1.fontWeight};
  color: ${colors.text.primary};
`;

const Body2 = styled.div`
  font-size: ${typography.body2.fontSize};
  line-height: ${typography.body2.lineHeight};
  font-weight: ${typography.body2.fontWeight};
  color: ${colors.text.primary};
`;

const ButtonLarge = styled.div`
  font-size: ${typography.button.large.fontSize};
  line-height: ${typography.button.large.lineHeight};
  font-weight: ${typography.button.large.fontWeight};
  color: ${colors.text.primary};
`;

const ButtonMedium = styled.div`
  font-size: ${typography.button.medium.fontSize};
  line-height: ${typography.button.medium.lineHeight};
  font-weight: ${typography.button.medium.fontWeight};
  color: ${colors.text.primary};
`;

const ButtonSmall = styled.div`
  font-size: ${typography.button.small.fontSize};
  line-height: ${typography.button.small.lineHeight};
  font-weight: ${typography.button.small.fontWeight};
  color: ${colors.text.primary};
`;

const Caption = styled.div`
  font-size: ${typography.caption.fontSize};
  line-height: ${typography.caption.lineHeight};
  font-weight: ${typography.caption.fontWeight};
  color: ${colors.text.primary};
`;

const Overline = styled.div`
  font-size: ${typography.overline.fontSize};
  line-height: ${typography.overline.lineHeight};
  font-weight: ${typography.overline.fontWeight};
  color: ${colors.text.primary};
  text-transform: uppercase;
`;

const TypographySystem = () => {
  return (
    <TypographyContainer>
      <Title>Typography</Title>
      
      {/* 字體家族資訊 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <TypographyLabel>family</TypographyLabel>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>Noto Sans TC / Public Sans</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* 樣式變體 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <TypographyLabel>Desktop</TypographyLabel>
            <TypographyLabel>underline</TypographyLabel>
            <TypographyLabel>line-through</TypographyLabel>
            <TypographyLabel>ON Mobile</TypographyLabel>
          </TypographyPreview>
        </TypographyItem>
      </Section>

      {/* H1 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <H1Desktop>h1</H1Desktop>
            <H1Desktop style={{ textDecoration: 'underline' }}>h1</H1Desktop>
            <H1Desktop style={{ textDecoration: 'line-through' }}>h1</H1Desktop>
            <H1Mobile>h1</H1Mobile>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.h1.desktop.fontSize} / {typography.h1.desktop.lineHeight} / {typography.h1.desktop.fontWeight}</TypographySpec>
            <TypographySpec>{typography.h1.mobile.fontSize} / {typography.h1.mobile.lineHeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* H2 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <H2Desktop>h2</H2Desktop>
            <H2Desktop style={{ textDecoration: 'underline' }}>h2</H2Desktop>
            <H2Desktop style={{ textDecoration: 'line-through' }}>h2</H2Desktop>
            <H2Mobile>h2</H2Mobile>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.h2.desktop.fontSize} / {typography.h2.desktop.lineHeight} / {typography.h2.desktop.fontWeight}</TypographySpec>
            <TypographySpec>{typography.h2.mobile.fontSize} / {typography.h2.mobile.lineHeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* H3 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <H3Desktop>h3</H3Desktop>
            <H3Desktop style={{ textDecoration: 'underline' }}>h3</H3Desktop>
            <H3Desktop style={{ textDecoration: 'line-through' }}>h3</H3Desktop>
            <H3Mobile>h3</H3Mobile>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.h3.desktop.fontSize} / {typography.h3.desktop.lineHeight} / {typography.h3.desktop.fontWeight}</TypographySpec>
            <TypographySpec>{typography.h3.mobile.fontSize} / {typography.h3.mobile.lineHeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* H4 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <H4Desktop>h4</H4Desktop>
            <H4Desktop style={{ textDecoration: 'underline' }}>h4</H4Desktop>
            <H4Desktop style={{ textDecoration: 'line-through' }}>h4</H4Desktop>
            <H4Mobile>h4</H4Mobile>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.h4.desktop.fontSize} / {typography.h4.desktop.lineHeight} / {typography.h4.desktop.fontWeight}</TypographySpec>
            <TypographySpec>{typography.h4.mobile.fontSize} / {typography.h4.mobile.lineHeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* H5 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <H5Desktop>h5</H5Desktop>
            <H5Desktop style={{ textDecoration: 'underline' }}>h5</H5Desktop>
            <H5Desktop style={{ textDecoration: 'line-through' }}>h5</H5Desktop>
            <H5Mobile>h5</H5Mobile>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.h5.desktop.fontSize} / {typography.h5.desktop.lineHeight} / {typography.h5.desktop.fontWeight}</TypographySpec>
            <TypographySpec>{typography.h5.mobile.fontSize} / {typography.h5.mobile.lineHeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* H6 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <H6Desktop>h6</H6Desktop>
            <H6Desktop style={{ textDecoration: 'underline' }}>h6</H6Desktop>
            <H6Desktop style={{ textDecoration: 'line-through' }}>h6</H6Desktop>
            <H6Mobile>h6</H6Mobile>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.h6.desktop.fontSize} / {typography.h6.desktop.lineHeight} / {typography.h6.desktop.fontWeight}</TypographySpec>
            <TypographySpec>{typography.h6.mobile.fontSize} / {typography.h6.mobile.lineHeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Subtitle1 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <Subtitle1>subtitle1</Subtitle1>
            <Subtitle1 style={{ textDecoration: 'underline' }}>subtitle1</Subtitle1>
            <Subtitle1 style={{ textDecoration: 'line-through' }}>subtitle1</Subtitle1>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.subtitle1.fontSize} / {typography.subtitle1.lineHeight} / {typography.subtitle1.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Subtitle2 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <Subtitle2>subtitle2</Subtitle2>
            <Subtitle2 style={{ textDecoration: 'underline' }}>subtitle2</Subtitle2>
            <Subtitle2 style={{ textDecoration: 'line-through' }}>subtitle2</Subtitle2>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.subtitle2.fontSize} / {typography.subtitle2.lineHeight} / {typography.subtitle2.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Body1 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <Body1>body1</Body1>
            <Body1 style={{ textDecoration: 'underline' }}>body1</Body1>
            <Body1 style={{ textDecoration: 'line-through' }}>body1</Body1>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.body1.fontSize} / {typography.body1.lineHeight} / {typography.body1.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Body2 */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <Body2>body2</Body2>
            <Body2 style={{ textDecoration: 'underline' }}>body2</Body2>
            <Body2 style={{ textDecoration: 'line-through' }}>body2</Body2>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.body2.fontSize} / {typography.body2.lineHeight} / {typography.body2.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Button Large */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <ButtonLarge>Button Large</ButtonLarge>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.button.large.fontSize} / {typography.button.large.lineHeight} / {typography.button.large.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Button Medium */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <ButtonMedium>Button Medium</ButtonMedium>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.button.medium.fontSize} / {typography.button.medium.lineHeight} / {typography.button.medium.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Button Small */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <ButtonSmall>Button Small</ButtonSmall>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.button.small.fontSize} / {typography.button.small.lineHeight} / {typography.button.small.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Caption */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <Caption>Caption</Caption>
            <Caption style={{ textDecoration: 'underline' }}>Caption</Caption>
            <Caption style={{ textDecoration: 'line-through' }}>Caption</Caption>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.caption.fontSize} / {typography.caption.lineHeight} / {typography.caption.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>

      {/* Overline */}
      <Section>
        <TypographyItem>
          <TypographyPreview>
            <Overline>Overline</Overline>
            <Overline style={{ textDecoration: 'underline' }}>Overline</Overline>
            <Overline style={{ textDecoration: 'line-through' }}>Overline</Overline>
          </TypographyPreview>
          <TypographySpecs>
            <TypographySpec>{typography.overline.fontSize} / {typography.overline.lineHeight} / {typography.overline.fontWeight}</TypographySpec>
          </TypographySpecs>
        </TypographyItem>
      </Section>
    </TypographyContainer>
  );
};

export default TypographySystem;
