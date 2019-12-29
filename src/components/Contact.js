import React from 'react';
  
  const Contact = () => {
  
    return (
    <>
      <form >
        <div className="form-group">
            <label>Your name</label>
            <input className="form-control"/>
        </div>
        <div className="form-group">
            <label>Your email</label>
            <input className="form-control" required={true}/>
        </div>
        <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows="3" required={true}/>
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Send"/>
        </div>
      </form>
    </>
    )
  }

  export default Contact;