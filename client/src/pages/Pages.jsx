import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PAGE_BY_URI } from '../graphql/queries/pages';
import { GET_PRODUCTS_BY_CATEGORY } from '../graphql/queries/products';
import { ClipLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import Img from "../components/partials/Img";
import ProductFilter from "../components/partials/ProductFilter";

function Pages() {
  const location = useLocation();
  const path = location.pathname;

  const { data: pageData, loading: pageLoading, error: pageError } = useQuery(GET_PAGE_BY_URI, {
    variables: { uri: path },
  });

  const page = pageData?.pageBy;
  const slug = page?.uri?.split('/').filter(Boolean).pop();

  const {
    data: productData,
    loading: productLoading,
  } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { slug: [slug] },
    skip: !slug, 
  });

  if (pageLoading || productLoading)
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <ClipLoader color="#005800" loading={true} size={50} />
      </div>
    );

  if (pageError || !page) return <p>Page not found</p>;

  const products = productData?.products?.nodes || [];

  return (
    <div className="mt-5 popular-products px-md-5 px-3">
      <h1 className="text-center">{page.title}</h1>

      <div className="row mt-5">
        <div className="col-12 col-md-4 mb-5">
          <ProductFilter />
        </div>

        <div className="col-12 col-md-8">
          <div className="row g-3">
            {products.map((product) => (
              <div className="col-12 col-md-3" key={product.id}>
                <Link to={`/product/${product.slug}`} className="text-decoration-none text-dark">
                  <div className="product">
                    <Img
                      src={product.image?.sourceUrl}
                      alt={product.image?.altText || product.name}
                    />
                    <div className="product-body mt-1 text-center">
                      <h5 className="product-title">
                        {product.name}
                        <span className="d-block product-price">
                          ${product.price}
                        </span>
                      </h5>
                      <div className="product-rating mb-4">
                        {[...Array(5)].map((_, i) => (
                          <i className="fas fa-star" key={i}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {products.length === 0 && (
              <div className="d-flex align-items-center justify-content-center min-vh-100">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pages;
