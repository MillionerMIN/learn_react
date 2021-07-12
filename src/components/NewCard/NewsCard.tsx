import React from "react";
import styled from 'styled-components'

const Container = styled.article`
   background: #ffffff;
   box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.1);
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   height: 450px;
`

const Image = styled.img`
   height: 150px;
   object-fit: cover;
   width: 100%;
`
const Layout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 16px;
   justify-content: space-between;
   height: 100%;
`

const Copy = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

const Heading = styled.h2`
   font-family: monospace;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
   margin: 0;
`
const Summary = styled.p`
   font-family: monospace;
   font-size: 14px;
   line-height: 24px;
   color: #9c9c9c;
`

const ButtonInformation = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

const Lable = styled.span`
   font-family: monospace;
   font-size: 14px;
   line-height: 20px;

   background: #d1fae5;
   border-radius: 12px;
   color: #065F46;
   padding: 4px 8px;
`

const AvatarAndText = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-top: 16px
`

const AvatarImage = styled.img`
   height: 40px;
   width: 40px;
   border-radius: 20px;
   object-fit: cover;
`

const Info = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding-left: 12px;
`

const Author = styled.div`
   font-family: monospace;
   line-height: 20px;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
`

const Date = styled.div`
font-family: monospace;
 font-size: 14px;
 line-height: 20px;
 color: #6b7280;
`

type NewsCardType = {
   imageSrc: string
   heading: string
   summary: string
   label: string,
   avatarSrc: string
   author: string
   date: string
}

const NewsCard: React.FC<NewsCardType> = ({
   imageSrc,
   heading,
   summary,
   label,
   avatarSrc,
   author,
   date
}) => (
   <Container>
      <Image src={imageSrc} />
      <Layout>
         <Copy>
            <Heading>
               {heading}
            </Heading>
            <Summary>{summary}</Summary>
         </Copy>
         <ButtonInformation>
            <Lable>{label}</Lable>
            <AvatarAndText>
               <AvatarImage src={avatarSrc} />
               <Info>
                  <Author>{author}</Author>
                  <Date>{date}</Date>
               </Info>
            </AvatarAndText>
         </ButtonInformation>
      </Layout>
   </Container>
)

export {
   NewsCard,
   Container,
   Image,
   Layout,
   Copy,
   Heading,
   Summary,
   ButtonInformation,
   Lable,
   AvatarAndText,
   AvatarImage,
   Info,
   Author,
   Date
}