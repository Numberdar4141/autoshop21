const LoanCalculator = () => {
  return (
    <form className="contact_form">
      <div className="row">
        <div className="col-md-12">
          <div className="mb-4">
            <label className="form-label">Enter your car registration number
</label>
            <input
              className="form-control"
              placeholder="(eg. DL 12 AC 3412)"
              type="number"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Car Brand</label>
            <input
              className="form-control"
              placeholder="(eg. Kia)"
              type="number"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Model</label>
            <input
              className="form-control"
              placeholder="(eg. Seltos)"
              type="number"
              required
            />
          </div>
        </div>
        {/* End .col */}

       
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb-0">
            <button type="submit" className="btn btn-thm">
              Sell My Car 
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
    
  );
};

export default LoanCalculator;
