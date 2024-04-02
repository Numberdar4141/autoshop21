import Image from "next/image";

const SellerDetail2 = () => {
  return (
    <>
      <div className="d-flex align-items-center mb30">
        <div className="flex-shrink-0">
          <Image
            width={60}
            height={60}
            className="mr-3 author_img w60"
            src="/images/TMPlogo12.png"
            alt="author.png"
          />
        </div>

        <div className="flex-grow-1 ms-3">
          <h5 className="mt0 mb5 fz16 heading-color fw600">
            Auto Shop Cars
          </h5>
          <p className="mb0 tdu">
            <span className="flaticon-phone-call pr5 vam" />
            +91 9999923232
          </p>
        </div>
      </div>
      {/* End d-flex */}
      <p>
       
      </p>

      <div className="row">
        <div className="col-md-12">
          <button type="submit" className="btn btn-block btn-thm mt10 mb20">
            Send Message
          </button>
          <button type="submit" className="btn btn-block btn-whatsapp mb0">
            <span className="flaticon-whatsapp mr10 text-white" />
            WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default SellerDetail2;
