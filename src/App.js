import { Component } from 'react';
import './App.css';

import FacebookIcon from './img/icons/facebook.png';
import TwitterIcon from './img/icons/twitter.png';
import LinkedInIcon from './img/icons/linkedin.png';
import GithubIcon from './img/icons/github.png'; 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      InitialPrice : "",
      QuantityofStocks : "",
      CurrentPrice : "",
      backgroundColor : "",
      displaymsg:""
    }
  }

    CalculateProfitLoss = (e) =>{
      let InitialPrice = parseInt(this.state.InitialPrice);
      let QuantityofStocks = parseInt(this.state.QuantityofStocks);
      let CurrentPrice = parseInt(this.state.CurrentPrice);

      let TotalPriceofPriviousstock = InitialPrice * QuantityofStocks ;
      let TotalPriceofCurrentstock  = CurrentPrice * QuantityofStocks ;

      if(TotalPriceofPriviousstock === TotalPriceofCurrentstock){

         this.setState({displaymsg:"No pain no gain and no gain no pain"})

      }else if(TotalPriceofPriviousstock>TotalPriceofCurrentstock){
        let loss =  InitialPrice - CurrentPrice ;
        let Percentage  = (loss/InitialPrice)*100;
        var loss_value = Math.abs(Percentage);
        this.setState({backgroundColor:"rgba(255, 0, 0, 0.5)"})
        this.setState({displaymsg:"Hey, loss by "+loss+" units has been earned in this scenario at a loss of : "+loss_value.toFixed(2)+"%"})
      }else{
        let Profit =  CurrentPrice - InitialPrice ;
        let Percentage = (Profit/InitialPrice)*100;
        var profit_value = Math.abs(Percentage);
        this.setState({backgroundColor:"rgba(60,179,113, 0.5)"})
        this.setState({displaymsg:"Hey, Profit by "+Profit+" units has been earned in this scenario at a profit of : "+profit_value.toFixed(2)+"%"})
      }

  }

  HOMErender(){
    return (
      <div style={{backgroundColor:this.state.backgroundColor?this.state.backgroundColor:"",width:'100%',height:'96%',paddingTop:'2%'}}>
      <div className="stock_profit_loss_container" >

            <div className="stock_profit_loss_title">  Stock Profit and Loss Calculator </div> 

            <div className="stock_profit_loss_initialPrice"> 
            <h5>Intial Price</h5>
                <input type="number" placeholder="Intial Price"  value={this.state.InitialPrice} onChange={(e)=>{this.setState({ InitialPrice : e.target.value ,displaymsg:"",backgroundColor:""})}} style={{width:'20%',height:'5vh'}}/>
                <br/>{this.state.InitialPrice < 1 ? <small style={{color:'red'}}> Min 1 </small> : ""}
            </div>
          
            <div className="stock_profit_loss_Quantity_of_Stocks"> 
            <h5>Quantity of Stocks</h5>
                <input type="number" placeholder="Quantity of Stocks"  value={this.state.QuantityofStocks} onChange={(e)=>{this.setState({ QuantityofStocks : e.target.value ,displaymsg:"",backgroundColor:""})}} style={{width:'20%',height:'5vh'}}/>
                <br/>{this.state.QuantityofStocks< 1 ? <small style={{color:'red'}}> Min 1 </small> : ""}
            </div>
      
            <div className="stock_profit_loss_Current_Price"> 
            <h5>Current Price</h5>
                <input type="number" placeholder="Current Price"  value={this.state.CurrentPrice} onChange={(e)=>{this.setState({ CurrentPrice : e.target.value ,displaymsg:"",backgroundColor:""})}} style={{width:'20%',height:'5vh'}}/>
                <br/>{this.state.CurrentPrice< 1 ? <small style={{color:'red'}}> Min 1 </small> : ""}
            </div>
          
            <div className="stock_profit_loss_button">
                { this.state.InitialPrice <= 0 || this.state.QuantityofStocks <= 0 ||  this.state.CurrentPrice <= 0 || this.state.InitialPrice==="" || this.state.QuantityofStocks === "" ||  this.state.CurrentPrice === ""?
                 
                    <button  style={{cursor:'no-drop',width:'20%',height:'5vh',color:'black'}} disabled>  Calculate </button> 
                  :
                  <button  style={{width:'20%',height:'5vh',backgroundColor:'rgba(173,255,47, 0.5)'}} onClick={this.CalculateProfitLoss}> Calculate </button>
                }
            </div>

                <div className="stock_profit_loss_displaymsg"> 
                   {this.state.displaymsg?this.state.displaymsg:null}
                </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div className="container-stock_profit_loss">
      <div className="background-stock_profit_loss">
        <div style={{width:'-webkit-fill-available',position:'fixed'}}>
            <div className="menu__logoSpace"> 
                <a href="/" className="menu__logo"> Creator Space </a>
            </div>
            <div className="menu__socialItems">
                  <a className="menu__socialLink" target="_blank" href='https://www.facebook.com/chanchal.panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={FacebookIcon} alt="facebooklink"/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <img style={{width:'8%',paddingTop:'2%'}} src={TwitterIcon} alt="twitterlink"/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                       <img style={{width:'8%',paddingTop:'2%'}} src={LinkedInIcon} alt="linkedinlink"/>
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <img style={{width:'8%',paddingTop:'2%'}} src={GithubIcon} alt="githublink"/>
                    </span>
                </a>
              </div>
        </div>
      </div>
      <div className="body-frame-stock_profit_loss">
        {this.HOMErender()}
      </div> 
    </div>
    )
  }

}

export default App;
