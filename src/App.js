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
            
            <img src={Logo} alt="#" className='logo' />
          
          </div>
        </div>
        <div className="expenses">
          <div className="textContent">
            
            <h1>Spending - Last 7 days</h1>
            
            <div className="week_expenses">
              <div className="mon">
                <div className='mon_padding'>
                  <h4 className='price_monthly'>$12.36</h4>
                </div>
                <p>mon</p>
              </div>
              <div className="tue">
                <div className='tue_padding'>
                  <h4 className='price_monthly'>$35.51</h4>
                </div>
                <p>tue</p>
              </div>
              <div className="wed">
                <div className='wed_padding'>
                  <h4 className='price_monthly'>$52.36</h4>
                </div>
                <p>wed</p>
              </div>
              <div className="thu">
                <div className='thu_padding'>
                  <h4 className='price_monthly'>$31.07</h4>
                </div>
                <p>thu</p>
              </div>
              <div className="fri">
                <div className='fri_padding'>
                  <h4 className='price_monthly'>$28.40</h4>
                </div>
                <p>fri</p>
              </div>
              <div className="sat">
                <div className='sat_padding'>
                  <h4 className='price_monthly'>$48.40</h4>
                </div>
                <p>sat</p>
              </div>
              <div className="sun">
                <div className='sun_padding'>
                  <h4 className='price_monthly'>$26.21</h4>
                </div>
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
