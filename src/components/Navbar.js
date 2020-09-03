import React, {useEffect} from 'react';
import { connect} from 'react-redux' // Me permite enlazar conectar redux con este component
import {getNumbers} from '../actions-redux/getAction'
import {Link} from 'react-router-dom' // sustituimos  a href con Link to para movernos de páginas

function Navbar(props){
console.log(props)

  useEffect(() => {
    getNumbers();
  }, [])

    return (
        <header>
        <div className="overlay"></div>
        <nav>
          <Link to="/"><h2>ByMariaPanes</h2></Link>
          <ul>
            <li className="icon"><Link to="/"><ion-icon name="home-outline"></ion-icon>Home</Link></li>
            <li className="icon"><Link to="#"><ion-icon name="shirt-outline"></ion-icon>Collections</Link></li>
            <li className="icon"><Link to="/cart">
            <ion-icon name="basket-outline"></ion-icon>Cart<span>{props.basketProps.basketNumbers}</span>
              </Link></li>
          </ul>
        </nav>
      </header>

    );
}

const mapStateToProps= state=> ({
  basketProps: state.basketState
})

export default connect(mapStateToProps,{getNumbers})(Navbar);