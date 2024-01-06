// Write your code here.
const Reusable = props => {
  const {className, headerText, description} = userDetails
  const {userDetails} = props
  return (
    <div className="container">
      <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default Reusable
