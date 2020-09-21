import React from 'react'
import './Home.css'

const Home = () => {

  return (
    <>
      <div className='container'>
      <div className='containerOfContainer'>
        <div className='containerName'>
          <p className='name'>Audrey</p>
          <p className='name'>Ritzenthaler</p>
          <hr></hr>
          <p className='job'>Photographe Reporter</p>
        </div>
      </div>
        <div className='containerOfContainer'>
          <div className='containerDes'>
            <i class="fas fa-quote-left left"></i>
            <p className='description'>
            Audrey est une photographe reporter de Paris. Elle a réalisé 4 ans d'études dans le domaine de la photographie puis s'est mise à son compte. Elle a été l'assistante de Laurence Guenoun, photographe portraitiste/reporter parisienne.
            Audrey a fait parti de l'association de La Ronde De Nuit (Trilport 77), une association qui promouvoit les jeunes artistes de Region Parisienne. Elle a l'occasion d'exposer ses images personnelles a plusieurs reprises dans leur local.
            Audrey a également pu etre publié à plusieurs reprises dans le webzine Plateform Magazine et d'y faire la première de couverture grâce à ses images sur son intimité et ses roads trips à travers la France.
            En 2018  voir son reportage  et en 2019  voir son reportage , elle fait parti de l'équipe photo du Festival de Dour (Belgique).
            Plusieurs fois, elle a l'occasion de réaliser des portraits en studio avec lumière naturelle de comédiens, mannequins, musiciens ...
            </p>
            <i class="fas fa-quote-right right"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home