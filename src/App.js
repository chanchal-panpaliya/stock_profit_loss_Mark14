import { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';

import  Facebook  from '@material-ui/icons/Facebook';
import  Twitter  from '@material-ui/icons/Twitter';
import  LinkedIn  from '@material-ui/icons/LinkedIn';
import  GitHub  from '@material-ui/icons/GitHub';

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
                <TextField type="number" placeholder="Intial Price" variant="filled" value={this.state.InitialPrice}  error={this.state.InitialPrice?this.state.InitialPrice < 1:""} helperText={ this.state.InitialPrice < 1 ? 'Min 1' : '' } onChange={(e)=>{this.setState({ InitialPrice : e.target.value ,displaymsg:"",backgroundColor:""})}}/>
            </div>
          
            <div className="stock_profit_loss_Quantity_of_Stocks"> 
                <TextField type="number" placeholder="Quantity of Stocks" variant="filled" value={this.state.QuantityofStocks} error={this.state.QuantityofStocks?this.state.QuantityofStocks < 1:""} helperText={ this.state.QuantityofStocks < 1 ? 'Min 1' : '' } onChange={(e)=>{this.setState({ QuantityofStocks : e.target.value ,displaymsg:"",backgroundColor:""})}}/>
            </div>
      
            <div className="stock_profit_loss_Current_Price"> 
                <TextField type="number" placeholder="Current Price" variant="filled" value={this.state.CurrentPrice} error={this.state.CurrentPrice?this.state.CurrentPrice < 1:""} helperText={ this.state.CurrentPrice < 1 ? 'Min 1' : '' } onChange={(e)=>{this.setState({ CurrentPrice : e.target.value ,displaymsg:"",backgroundColor:""})}}/>
            </div>
          
            <div className="stock_profit_loss_button">
                { this.state.InitialPrice <= 0 || this.state.QuantityofStocks <= 0 ||  this.state.CurrentPrice <= 0 || this.state.InitialPrice==="" || this.state.QuantityofStocks === "" ||  this.state.CurrentPrice === ""?
                  <span style={{cursor:'no-drop'}}>
                    <Button variant="contained" disabled>  Calculate </Button> 
                  </span>:
                  <Button variant="contained" onClick={this.CalculateProfitLoss}> Calculate </Button>
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
                      <Facebook  style={{color:'grey'}}/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <Twitter style={{color:'grey'}}/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                      <LinkedIn style={{color:'grey'}}/> 
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <GitHub style={{color:'grey'}}/>
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
