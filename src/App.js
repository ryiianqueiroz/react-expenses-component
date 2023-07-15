import './App.css';
import Logo from './images/logo.svg'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="costs">
          <div className="content">
            
            <div className="balance">
              <p>My balance</p>
              <h3>$921.48</h3>
            </div>
            
            <img src={Logo} alt="#" />
          
          </div>
        </div>
        <div className="expenses">
          <div className="textContent">
            
            <h1>Spending - Last 7 days</h1>
            
            <div className="week_expenses">
              <div className="mon">
                <div className='mon_padding'></div>
                <p>mon</p>
              </div>
              <div className="tue">
                <div className='tue_padding'></div>
                <p>tue</p>
              </div>
              <div className="wed">
                <div className='wed_padding'></div>
                <p>wed</p>
              </div>
              <div className="thu">
                <div className='thu_padding'></div>
                <p>thu</p>
              </div>
              <div className="fri">
                <div className='fri_padding'></div>
                <p>fri</p>
              </div>
              <div className="sat">
                <div className='sat_padding'></div>
                <p>sat</p>
              </div>
              <div className="sun">
                <div className='sun_padding'></div>
                <p>sun</p>
              </div>
            </div>

            <hr />
            
            <div className="balance">
              <div className="total">
                <p>Total this month</p>
                <h3>$478.33</h3>
              </div>
              <div className="last_month">
                <h6>+2.4%</h6>
                <p>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
