import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
     <Container>
         <Section 
            title = "Model S"
            description= "Order online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"      
        />
         <Section 
            title = "Model Y"
            description= "Order online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"      
        />
         <Section 
            title = "Model X"
            description= "Order online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"      
        />
         <Section 
            title = "Model 3"
            description= "Order online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"      
        />
         <Section 
            title = "Lowest Cost Solar Panels in America"
            description= "Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"      
        />
         <Section 
            title = "Solar for New Roofs"
            description= "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"      
        />
         <Section 
            title = "Accessories"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"   
        />
         
     </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
