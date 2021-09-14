import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Button>
                <ButtonGroup>
                    <Fade left>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    </Fade>
                    {rightBtnText &&
                        <Fade right>
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                        </Fade>
                    }
                    {/* Above lines means if and rightbtntext exits then and then only show right button */}
                </ButtonGroup>
                <Fade top>
                <DownArrow src="/images/down-arrow.svg" />
                </Fade>
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`};

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    transition: all 250ms:
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 100px;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    margin: 10px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: rgba(255, 255, 255, 0.5);
    color: rgb(23, 26, 32);
`
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Button = styled.div``