import React from 'react'
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

const InfoSection = ({
  primary,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn
              style={{
                border: '2px solid gray',
                padding: '20px',
                borderRadius: '5px'
              }}
            >
              <TextWrapper style={{color: "black"}}>
                <TopLine lightTopLine={lightTopLine}>ONLINE PRAKTIKUM</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn
              style={{
                border: '2px solid gray',
                padding: '20px',
                borderRadius: '5px',
                background: "indigo",
                // color: "indigo"
              }}
            >
              <TextWrapper >
                <TopLine  lightTopLine={lightTopLine}>ONLINE PRAKTIKUM</TopLine>
                <Heading lightText={lightText}>START</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Praktikum davomiyligi: 4 kun
                </Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  Format: Jonli vebinar (yozib olinadi va saqlab qo’yiladi)
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
