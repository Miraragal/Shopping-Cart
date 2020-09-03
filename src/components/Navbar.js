import React, {useEffect} from 'react';
import { connect} from 'react-redux' // Me permite enlazar conectar redux con este component
import {getNumbers} from '../actions-redux/getAction'

function Navbar(props){
console.log(props)

  useEffect(() => {
    getNumbers();
  }, [])

    return (
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>ByMariaPanes</h2>
          <ul>
            <li className="icon"><a href="#"><ion-icon name="home-outline"></ion-icon>Home</a></li>
            <li className="icon"><a href="#"><ion-icon name="shirt-outline"></ion-icon>Collections</a></li>
            <li className="icon"><a href="#">
            <ion-icon name="basket-outline"></ion-icon>Cart<span>{props.basketProps.basketNumbers}</span>
              </a></li>
          </ul>
        </nav>
      </header>

    );
}

const mapStateToProps= state=> ({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{getNumbers})(Navbar);