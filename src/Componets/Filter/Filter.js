import React from 'react'

const Filter = ({setDone,setUndone}) => {
    return (
        <div>
          <div className="form-check">
  <input className="form-check-input" type="checkbox"  id="flexCheckDefault"
   onChange={(e) => setDone(e.target.checked)}/>
  <label className="form-check-label" for="flexCheckDefault">
    Done
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox"  id="flexCheckChecked"
   onChange={(e) => setUndone(e.target.checked)} />
  <label className="form-check-label" for="flexCheckChecked">
    unDone
  </label>
</div>  
        </div>
    )
}

export default Filter
