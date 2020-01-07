import React from 'react';
import horse from '../horse.jpg';
import horses from '../horses.jpg';
import horses2 from '../horses3.jpg'
import {
    BrowserRouter as Router,
    Route, 
  } from 'react-router-dom'

const About=()=>{

    return(
        <>
        <div className="row justify-content-center">
            <div className="col-8">
                <blockquote className="blockquote">
                    <div>
                        Heppaset on vuonna 2018 perustettu sivusto, jonka tarkoituksena on helpottaa hevosihmisen elämää tuomalla kaikki tiedot yhteen paikkaan. Meillä voit selvittää hevosen sukujuuria ja kilpasuorituksia, lukea keskusteluja 
                        koskien hevosia, ja vilkaista Hippoksen uusimmat uutiset. 
                        Mikäli löydät sivustolta virheellistä tietoa, voit olla meihin yhteydessä lomakkeella. Tarkistamme tiedot pikimmiten ja korjaamme ne, mikäli virheellistä tietoa löytyy.
                        <br/>
                        Olethan jo rekisteröitynyt? Rekisteröityessäsi saat käyttöön lisää mahdollisuuksia; voit osallistua keskusteluun, lisätä hevosten tietoja järjestelmään, ja tutustua muihin hevosihmisiin.
                    </div>
                </blockquote>
            </div>
        </div>
        <div className=" row justify-content-center p-5 media">
            <img src={horse} alt="horses" className="p-2"/>
            <img src={horses} alt="horses" className="p-2"/>
            <img src={horses2} alt="horses" className="p-2"/>
        </div>
        </>
    )
}

export default About;