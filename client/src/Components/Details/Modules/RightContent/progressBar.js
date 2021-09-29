const Progress = ({
  name,
  value,
  Styles
}) => {
  return (
    <div className={Styles.ProgressBarContainer}>
      <h6 className={Styles.ProgressName}> {`${name}: ${value}`} </h6>
      <progress
        value={value}
        max={255}
        className={Styles.ProgressBar}
      />
    </div>
  )
}

export default Progress
