

const ATMDeposit = () => {

  
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={handleChange}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h2 id="total">{status}</h2>
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState(event.target.value);
  };
  const handleSubmit = event => {
    alert(`Account total = ${accountState}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<ATMDeposit />, document.getElementById("root"));
