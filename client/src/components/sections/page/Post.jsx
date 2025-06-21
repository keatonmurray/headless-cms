const Post = ({ title, content }) => {
  const cactusImages = [
    "/img/post-bg.jpg",
    "/img/post-bg2.jpg",
    "/img/post-bg3.jpg",
    "/img/post-bg4.jpg",
  ];

  return (
    <div className="post-page container py-5">
      <div className="d-flex flex-column align-items-center justify-content-start min-vh-100">
        <h1 className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="w-100">
          <div className="row mt-md-5 mt-1">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                {cactusImages.map((src, index) => (
                  <div key={index} className="col-12 col-md-6 mb-2">
                    <div className="container-fluid">
                      <img
                        src={src}
                        alt={`Cactus ${index + 1}`}
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                ))}  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post