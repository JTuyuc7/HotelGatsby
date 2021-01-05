import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackgroun = styled(BackgroundImage)`
    height: 700px;
`;

const TextImagen = styled.div`
    background-image: linear-gradient( to top, rgba(34,49,63, .75 ), rgba(34,49,63, .75 ));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }
    p{
        font-size: 2rem;

        @media (min-width: 992px){
            font-size: 3.1rem;
        }
    }
`;

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath: { eq: "1.jpg"}){
          sharp:childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    //console.log(image);

    return (  
        <ImageBackgroun
            Tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <TextImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>La mejor elección en todo el mercado</p>
            </TextImagen>
        </ImageBackgroun>
    );
}
 
export default ImagenHotel;