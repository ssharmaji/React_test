import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import categoryData from './item_list.json';
import MenuIcon from './images/menu.svg';
import CartIcon from './images/cart.svg';
import imgOne from './images/img-one.jpg';
import imgTwo from './images/img-two.jpg';
import imgThree from './images/img-three.jpg';


class App extends Component {
  state={
    categories: ''
  }
  componentDidMount(){
    console.log(categoryData)
    this.setState({
      categories: categoryData.MyData
    })

  }
  render(){
    return(
      <div className="home-page">
        <header>
          <div className="topbar">

          </div>
          <div className="mainbar">
              <ul>
                <li><img src={MenuIcon}/></li>
                <li><h2>Color Lab</h2></li>
                <li><img src={CartIcon}/></li>
              </ul>
          </div>
        </header>
        <div className="category-section">
          <h1>Shop By Category</h1>
          <div className="box-section">
            {this.state.categories ? this.state.categories.map((category,key) => {
             
              if(key == 1){
                return <><div key={key} className="box">
                <figure>
                    
                </figure>
                <h2>{category.headerTitle}</h2>
              </div>
              <div className="banner-box"><img src={imgOne}/></div></>
              }
              if(key == 3){
                return <><div key={key} className="box">
                <figure>
                    
                </figure>
                <h2>{category.headerTitle}</h2>
              </div>
              <div className="banner-box"><img src={imgTwo}/></div></>
              }
              if(key == 5){
                return <><div key={key} className="box">
                <figure>
                </figure>
                <h2>{category.headerTitle}</h2>
              </div>
              <div className="banner-box"><img src={imgThree}/></div></>
              }
              return  <div key={key} className="box">
              <figure>
  
              </figure>
              <h2>{category.headerTitle}</h2>
            </div>    
            }): null }
            {this.state.categories ? this.state.categories.length == 2 ? <><div className="banner-box"><img src={imgTwo}/></div><div className="banner-box"><img src={imgThree}/></div></> : null:null }
            {this.state.categories ? this.state.categories.length == 4 ? <><div className="banner-box"><img src={imgThree}/></div></> : null:null }
          </div>
          
        </div>
      </div>
    )
  }
}


export default App;
