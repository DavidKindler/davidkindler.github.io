import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../../hooks/use-site-config'
import useSiteImages from '../../hooks/use-site-images'
import { colors } from '../../tokens'
import BackgroundImage from 'gatsby-background-image'




const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const HeroSubTitle = styled.h2`
  margin: 10px 60px;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  // console.log('fluid hero image', fluid)
  // console.log('heroimg', props)
  const heroImg = props.heroImg && props.heroImg.childImageSharp && props.heroImg.childImageSharp.fluid || fluid

  return (
    < BackgroundImage
      Tag="section"
      fluid={heroImg}
      backgroundColor={`lightGrey`
      }
    >
      <HeroContainer >
        <TitleContainer>
          <HeroTitle>{props.title}</HeroTitle>
          {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
        </TitleContainer>
      </HeroContainer>

    </BackgroundImage >
  )
}

export default Hero

