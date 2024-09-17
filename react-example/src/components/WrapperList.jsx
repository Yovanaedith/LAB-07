export const WrapperList = props => {
  
    const { children } = props
  
    return (
      <div>
        <h2>RANDOM COMPONENT</h2>
        <div>
          { children }
        </div>
      </div>
    )
  }