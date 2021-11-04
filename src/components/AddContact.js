import React from 'react'

const AddContact = () => {
  return (
    <div className="container">
        <h1 className="display-3 my-5 text-center">
          Add Ppl
        </h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control my-2" />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control my-2" />
            </div>

            <div className="form-group">
              <input type="number" placeholder="Phone Number" className="form-control my-2" />
            </div>

            <div className="form-group">
              <input type="submit" value="Add Ppl" className="btn btn-block btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact
