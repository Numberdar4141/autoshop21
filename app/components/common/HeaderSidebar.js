const HeaderSidebar = () => {
    return (
        <div className="offcanvas-body">
            <div className="siderbar_left_home pt20 active">
                <button
                    className="sidebar_switch sidebar_close_btn float-end"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    X
                </button>
                {/* End .cose button */}

                <div className="footer_contact_widget mt100">
                    <h3 className="title">Quick contact info</h3>
                    <p>
                    Connect with us for your dream ride! Call us at 9999934234 or drop an email at autoshop@autoshop.com for inquiries and appointments. Visit our website for the latest inventory and deals!
                    </p>
                </div>
                {/* End widget */}

                <div className="footer_contact_widget">
                    <h5 className="title">CONTACT</h5>
                    <div className="footer_phone">+91 9999934234</div>
                    <p>autoshop@autoshop.com</p>
                </div>
                {/* End widget */}

                <div className="footer_about_widget">
                    <h5 className="title">OFFICE</h5>
                    <p>
                    New Market,Vikas Puri, New Delhi , India
                    </p>
                </div>
                {/* End widget */}

                <div className="footer_contact_widget">
                    <h5 className="title">OPENING HOURS</h5>
                    <p>
                        Monday – Friday: 09:00AM – 09:00PM
                        <br />
                        Saturday: 09:00AM – 07:00PM
                        <br />
                       
                    </p>
                </div>
                {/* End widget */}
            </div>
        </div>
    );
};

export default HeaderSidebar;
