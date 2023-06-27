import React, { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { styled } from 'styled-components'


const Home = () => {
    const [userEmail] = useOutletContext()
    const navigate = useNavigate()
    useEffect(() => {
        if(!userEmail){
            navigate('/')
        }
    },[])
    // console.log(name)
  return (
<HomeC>
    
</HomeC>
  )
}

const HomeC = styled.main`
    background-image: url('/images/');
`;

export default Home
