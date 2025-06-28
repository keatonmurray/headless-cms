const Post = ({ title, content, featuredImage, altText }) => {
  return (
    <div className="post-page container py-5">
      <div className="d-flex flex-column align-items-center justify-content-start min-vh-100">
        <h1 className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="w-100">
          <div className="row mt-md-5 mt-1">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="col-12 col-md-6 pt-4">
              <div className="row">
                <figure>
                  <img src={featuredImage?.node?.sourceUrl} alt={altText?.node?.altText} className="img-fluid"/>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post