import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, SetburgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars); 

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" />
            </a>
            <Menu>
                {/* {cars && cars.map((car, index)=>(
                   <p><a key={index} herf="#">{car}</a></p>
                ))} */}
                <p><a href="#">MODEL S</a></p>
                <p><a href="#">MODEL 3</a></p>
                <p><a href="#">MODEL X</a></p>
                <p><a href="#">MODEL Y</a></p>
                <p><a href="#">SOLAR ROOF</a></p>
                <p><a href="#">SOLAR PANEL</a></p>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => SetburgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => SetburgerStatus(false)} />
                </CloseWrapper>
                <li><a href="#">Exiting Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">power wall</a></li>
                <li><a href="#">Test drive</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">find us</a></li>
                <li><a href="#">support</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p{
        font-weight: 600;
        padding: 0 10px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    a{
    font-weight: 600;
    margin-right: 20px;
    text-transform: uppercase;
    }   
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    background: #fff;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ;
    a {
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
    }

    li{
        padding: 25px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .2);
    }
`
const CustomClose = styled(CloseIcon)`
`

const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
`