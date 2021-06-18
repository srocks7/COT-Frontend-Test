import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import './App.css';
import api from '../src/services/api'

function App() {
  const [startDate, setStartDate] = useState(new Date())
  const [data, setData] = useState([]);


  async function getCountryData() {
    const getData = await api.getCountryData();

  console.log("country data", getData[0].countries);
  setData(getData[0].countries);
}
  useEffect(() => {
    getCountryData();
  }, []);



  return (
    <div className="App">
      <DatePicker 
      className='new-inputs'
      isClearable
      showYearDropdown
      scrollableMonthYearDropdown
      selected={startDate} 
      onChange={(date) => setStartDate(date)}
      showTimeSelect 
      />
      
          <div>
            <select
              type="text"
              name="userType"
              className="new-inputs"
              required
              // value={this.state.userType}
              // onChange={(e) => this.onChange(e)}
            >
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
             
            </select>
          </div>

          <div>
            <select
              type="text"
              name="userType"
              className="new-inputs"
              required
              // value={this.state.userType}
              // onChange={(e) => this.onChange(e)}
            >
              {/* <option value="UAE">UAE</option>
              <option value="Pakistan">Pakistan </option> */}
              {data.map((item,index)=>(
                <option key={index} value={item}>{item}</option>
              ))}
            
            </select>
          </div>
          <button type="button" class="btn btn-info">Calculate Delivery Time</button>
    </div>
  );
}

export default App;
