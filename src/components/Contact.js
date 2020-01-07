import React from 'react';

  
  const Contact = () => {
  
    return (
    <>
      <form>
        <div className="form-group">
            <label>Nimesi</label>
            <input className="form-control"/>
        </div>
        <div className="form-group">
            <label>Sähköpostiosoitteesi</label>
            <input className="form-control" required={true}/>
        </div>
        <div className="form-group">
            <label>Viesti</label>
            <textarea className="form-control" rows="3" required={true}/>
        </div>
        <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Lähetä"/>
        </div>
      </form>
    </>
    )
  }

  export default Contact;