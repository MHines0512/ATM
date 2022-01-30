const ATMDeposit = ({ onChange, isDepositValue }) => {
  return (
    <label className="label huge">
      <h3>(isDepositValue ? "Deposit" : "Cash Back")</h3>
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

// ---------------------------------------------------------

const Account = () => {
  let transactionState =0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0)
  const [isDeposit, setIsDeposit] = React.useState(true)

  let status = 'Account Balance $ ${totalState}';
  const handleChange = event => {
    transcastionState = Number(event.target.value);
  };
  const handleSubmit = event => {
    const newTotal = isDeposit ? totalState + transactionState : totalState - transactionState
    setTotalState(newTotal);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">Account Balance {status}</h2>
      <button onClick={() => setIsDeposit(true)}>Deposit</button>
      <button onClick={() => setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} IsDepositValue={IsDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<ATMDeposit />, document.getElementById("root"));
