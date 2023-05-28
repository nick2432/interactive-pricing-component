import { useState } from "react";
import bkg from "./assets/images/bg-pattern.svg";
import circles from "./assets/images/pattern-circles.svg";
import checkMark from "./assets/images/icon-check.svg";
import slider from "./assets/images/icon-slider.svg";
import './App.css'
function formatCurrency(amt) {
  return amt.toLocaleString(undefined, {
    currency: "USD",
    style: "currency",
  });
}
// 8,12,16,24,36
const price=[
{
  't1':8,
  't2':6,
  'Pageviews':'10k'
},
{
  't1':12,
  't2':9,
  'Pageviews':'50k'
},
{
  't1':16,
  't2':12,
  'Pageviews':'100k'
},
{
  't1':24,
  't2':18,
  'Pageviews':'500k'
},
{
  't1':36,
  't2':27,
  'Pageviews':'1M'
}
];

function App() {
  const [data,setData]= useState(0);
  const [tog,settog]=useState(0);
  function toggle(){
    console.log('nikhil');
    const x1 = document.getElementById('indicator');
    const x2 = document.getElementById('indicator1');
    const x = document.getElementById('toggle');
    if(x1){
      x1.id='indicator1';
      x.style.background='hsl(174, 77%, 80%)';
      settog(1);
    }
    else{
      x2.id='indicator';
      settog(0);
      x.style.background= 'hsl(223, 50%, 87%)';
    }
  }
  function darklightmode(){
    const x1 = document.getElementById('indicator2');
    const x2 = document.getElementById('indicator3');
    const x = document.getElementById('toggle1');
    const app=document.getElementById('app');
    const card=document.getElementById('Card');
    if(x1){
      x1.id='indicator3';
      x.style.background='black';
      app.style.backgroundColor='#2f3033';
      app.style.color='#dfe3d4';
      card.style.backgroundColor='#091f6d';
    }
    else{
      x2.id='indicator2';
      x.style.background= 'hsl(223, 50%, 87%)';
      app.style.backgroundColor='white';
      app.style.color='black';
      card.style.backgroundColor='hsl(0 0% 100%)';
    }
  }
  return (
    <div className="App" id='app'>
      <div className="main">
      <img src={bkg} alt="" className="bg-image" />
      <div className="row3" onClick={(e)=>darklightmode()}>
      <p className="para3">light mode</p>
      <div id="toggle1">
            <i id="indicator2"></i>
          </div>
          <p className="para3">dark mode</p>
         </div>
      <div className="grid" id='Grid'>
      
        <img src={circles} alt="" className="circle" />
        <h1 className="h1">Simple, traffic-based pricing</h1>
        <div className="text">
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit required.</p>
        </div>
      </div>
      <div className="card" id='Card'>
        <div className="x"><p className="para1">{price[Math.trunc(data)].Pageviews} Pageviews</p></div>
          <p className="para2"><span className="dolr">{(tog) ? `${price[Math.trunc(data)].t2}.00` : `${price[Math.trunc(data)].t1}.00`}</span>/month</p>
          <div className="bar" style={{width:`${data*23.40}%`}}></div>
          <input type="range" min='0' max='4'  step="0.01" value={data} onInput={(e)=>setData(e.target.value)} className="slider"/>
        <div className="row">
          <p className='para3'>Monthly Billing</p>
          <div id="toggle" className="avtive" onClick={(e)=>toggle()}>
            <i id="indicator"></i>
          </div>
          <p className='para3'>Yearly Billing</p>
          <p className='para4'>-25% discount</p>
        </div>
        <div className="footer">
          <div className="column">
            <div className="row1">
            <img src={checkMark} alt="" className="checkmark" />
            <p className="para3">Unlimited websites</p>
            </div>
            <div className="row1">
            <img src={checkMark} alt="" className="checkmark" />
            <p className="para3">100% data ownership</p>
            </div>
            <div className="row1">
            <img src={checkMark} alt="" className="checkmark" />
            <p className="para3">Email reports</p>
            </div>
          </div>
        </div>
        <button className="btn">Start my trial</button>
      </div>
      </div>
    </div>
  );
}

export default App;