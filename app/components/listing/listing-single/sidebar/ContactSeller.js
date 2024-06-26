const ContactSeller = () => {
  return (
    <form>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <input
              className="form-control form_control"
              type="text"
              placeholder="Name"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-12">
          <div className="mb-3">
            <input
              className="form-control form_control"
              type="text"
              placeholder="Phone"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

       
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb-3">
            <textarea
              className="form-control"
              rows={2}
              defaultValue="I am interested in a price quote on this vehicle."
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <button type="submit" className="btn btn-block btn-thm mt10 mb20">
            Send Message
          </button>
          <button type="submit" className="btn btn-block btn-whatsapp mb0">
            <span className="flaticon-whatsapp mr10 text-white" />
            WhatsApp
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default ContactSeller;
