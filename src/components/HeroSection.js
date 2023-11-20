import React from 'react'

const HeroSection = () => {
  return (
    <>
      <h1 id="hero1">This is in HeroSection</h1>
    
      <button id='but'>click me</button>

      <script>
    document.getElementById('but').addEventListener('click', () => {
      document.getElementById('hero1').innerHTML = 'Hel I am in HeroSection'
    })
      </script>
    </>
    
  )
}

export default HeroSection
