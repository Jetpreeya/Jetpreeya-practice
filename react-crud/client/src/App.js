import Axios from 'axios'
import { useState } from 'react'

function App() {
  const [EmployeeID, setEmployeeID] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("0");
  const [StartworkDate, setStartWorkDate] = useState("");
  const [NewSalary, setNewSalary] = useState("0");
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });
  }

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      EmployeeID: EmployeeID,
      FirstName: FirstName,
      LastName: LastName,
      Gender: Gender,
      Email: Email,
      Salary: Salary,
      StartworkDate: StartworkDate
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          EmployeeID: EmployeeID,
          FirstName: FirstName,
          LastName: LastName,
          Gender: Gender,
          Email: Email,
          Salary: Salary,
          StartworkDate: StartworkDate
        }
      ])
    })
  }

  const updateEmployeeSalary = (EmployeeID) => {
    Axios.put("http://localhost:3001/update", 
    { salary: NewSalary, EmployeeID: EmployeeID }).then((response) => {
      setEmployeeList(
       employeeList.map((val) => {
    return val.EmployeeID === EmployeeID ? {
      EmployeeID: val.EmployeeID,
      FirstName: val.FirstName,
      LastName: val.LastName,
      Gender: val.Gender,
      Email: val.Email,
      StartworkDate: val.StartworkDate,
      Salary: NewSalary
    } : val;
  })
)
})
}

const deleteEmployee = (EmployeeID) =>{
  Axios.delete(`http://localhost:3001/delete${EmployeeID}`).then(() =>{
    setEmployeeList(
      employeeList.filter((val) => {
        return val.id !== EmployeeID;
      })
    )
  })
}

return (
  <div className="App container">
    <h1>Employee Information</h1>
    <div className="information">
      <form action="">

        <div className="mb-3">
          <label htmlFor="EmployeeID" className="form-label">EmployeeID : </label>
          <input type="int" className="form-control" placeholder="Enter EmployeeID" onChange={(event) => { setEmployeeID(event.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="FirstName" className="form-label">First Name : </label>
          <input type="text" className="form-control" placeholder="Enter FirstName" onChange={(event) => { setFirstName(event.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="LastName" className="form-label">Last Name : </label>
          <input type="text" className="form-control" placeholder="Enter LastName" onChange={(event) => { setLastName(event.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="Gender" className="form-label">Gender : </label>
          <input type="enum('M','F')" className="form-control" placeholder="Enter Gender" onChange={(event) => { setGender(event.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email : </label>
          <input type="text" className="form-control" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary : </label>
          <input type="number" className="form-control" placeholder="Enter salary" onChange={(event) => { setSalary(event.target.value) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="Startwork" className="form-label">Start work Date : </label>
          <input type="date" className="form-control" placeholder="Start work date" onChange={(event) => { setStartWorkDate(event.target.value) }} />
        </div>

        <button className="btn btn-success" onClick={addEmployee}>Add Employee</button>
      </form>
    </div>
    <hr />
    <div className="employees">
      <button className="btn btn-primary" onClick={getEmployees}>Show employees</button>
      <br></br>
      {employeeList.map((val, key) => {
        return (
          <div className="employee card">
            <div className="card-body text-left">
              <p className="card-text">EmployeeID : {val.EmployeeID}</p>
              <p className="card-text">First Name : {val.FirstName}</p>
              <p className="card-text">Last Name : {val.LastName}</p>
              <p className="card-text">Gender : {val.Gender}</p>
              <p className="card-text">Email : {val.Email}</p>
              <p className="card-text">Salary : {val.Salary}</p>
              <p className="card-text">StartWorkDate : {val.StartWorkDate}</p>
              <div className="d-flex">
                <input type="number"
                  style={{ width: "250px" }}
                  placeholder="15000..."
                  className="form-control"
                  onChange={(event) => {
                    setNewSalary(event.target.value)
                  }}
                />
                <button className="btn btn-warning" onClick={() => { updateEmployeeSalary(val.EmployeeID) }}>Update</button>
                <button className="btn btn-danger" onClick={() => { deleteEmployee(val.EmployeeID) }}>Delete</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
);
    };

export default App;
