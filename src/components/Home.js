import React from 'react'
import * as Parser from 'react-native-rss-parser';
import  {useState, useEffect} from 'react';
import axios from 'axios';


const Home=()=>{

    const [news, importNews]=useState([{}]);
    const Feed = require('rss-to-json');
    Feed.load('https://www.hippos.fi/rss/ajankohtaista_ravit',function(err, rss){
        console.log(rss);
    })
/*
    useEffect(() => {
        Parser.parse('http://www.hippos.fi/rss/ajankohtaista_ravit')
        .then((response) => 
           importNews(response)
        )
        })
*/
    return(
    <div className="row mt-5 pt-5 justify-content-between ml-5">
        <div className="col-5">
          <h2>Kirjaudu sisään</h2>
            <form>
              <div className="form-group">
                  <label>Sähköpostiosoite:</label>
                  <input type="text" className="form-control"/>
              </div>
                <div className="form-group">
                  <label>Salasana:</label>
                  <input type="password" className="form-control"/>
              </div>
              <div className="form-row">
                  <button type="submit" className="btn btn-primary">Kirjaudu</button>
              </div>
            </form>
        </div>
        <div className="col-5">
            <h2>Hippoksen uutiset</h2>
        </div>
        
    </div>
    )
}

export default Home;