
import axios from "axios"  
function SignUp(){
  var user={}
  function onRegister(e){
    if(user.name && user.address && user.email && user.password && user.dob && user.accounttype && user.ifsc){
  alert(`User name : ${user.name},User address : ${user.address},User email: ${user.email}, User dob : ${user.dob},AccountType : ${user.accounttype}`)
  axios({
    url:"http://localhost:5050/admin/register",
    method:"post",
    data:user
  }).then(function(res){
      console.log("Resposne from API is : ", res)
  }).catch(function(err){
    console.log("Error from API is: ", err)
  })
}
else
  alert("Please enter the values")
}
function getName(e){
    user.name = e.target.value
    //console.log(user.email)
  }
  function getAddress(e){
    user.address = e.target.value
    //console.log(user.email)
  }
  function getDob(e){
    user.dob = e.target.value
    //console.log(user.email)
  }
function getEmail(e){
  user.email = e.target.value
  //console.log(user.email)
}
function getPwd(e){
  user.password = e.target.value
  //console.log(user.password)
}
function getAccountType(e){
    user.accounttype = e.target.value
    //console.log(user.email)
  }
  function getIfsc(e){
    user.ifsc = e.target.value
    //console.log(user.email)
  }
  function getAccountBalance(e){
    user.accountbalance = e.target.value
    //console.log(user.email)
  }
  return (<div className="container">
  <div className="col-md-4">
      <h1>Signup here</h1>
      <div className="form-group">
          <label>Name</label>
          <input className="form-control" onChange={getName} placeholder="Enter your name"></input>
      </div>
      <div className="form-group">
          <label>Address</label>
          <input className="form-control" onChange={getAddress} placeholder="Enter your address"></input>
      </div>
      <div className="form-group">
          <label>DOB</label>
          <input type="date" className="form-control" onChange={getDob} placeholder="Enter your DOB"></input>
      </div>
     <div className="form-group">
          <label>Email</label>
          <input className="form-control" onChange={getEmail} placeholder="Enter your email address"></input>
      </div>
      <div className="form-group">
          <label>Password</label>
          <input className="form-control" onChange={getPwd} placeholder="Enter your password"></input>
      </div>
      <div className="form-group">
          <label>Account Type</label>
          <input className="form-control" onChange={getAccountType} placeholder="Savings/Current/Salaried"></input>
      </div>
      <div className="form-group">
          <label>IFSC</label>
          <input className="form-control" onChange={getIfsc} placeholder="XYZ/ABC"></input>
      </div>
      <div className="form-group">
          <label>Account Balance</label>
          <input className="form-control" onChange={getAccountBalance} placeholder="Enter the opening amount"></input>
      </div>
      <br></br>
      <button onClick={onRegister}>Register</button>            
  </div>
</div>)
}
export default SignUp
