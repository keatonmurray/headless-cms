import productImg from '/img/product1.jpg';
import Img from '../components/partials/Img';
import { GET_SINGLE_PRODUCT } from '../graphql/queries/products';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const SingleProduct = () => {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_SINGLE_PRODUCT, {
    variables: { slug },
    skip: !slug,
  });

  const product = data?.product;

  const [selectedVariation, setSelectedVariation] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.__typename === 'VariableProduct') {
      const firstVar = product.variations?.nodes?.[0];
      if (firstVar) setSelectedVariation(firstVar.id);
    }
  }, [product]);

  let rawPrice;
  if (product?.__typename === 'VariableProduct' && selectedVariation) {
    const variation = product.variations.nodes.find(v => v.id === selectedVariation);
    rawPrice = variation?.price;
  } else {
    rawPrice = product?.price;
  }

  const formatted = Number.isFinite(Number(rawPrice))
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(Number(rawPrice))
    : '';

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (loading) return 
   <div className="d-flex justify-content-center align-items-center min-vh-100">
        <ClipLoader color="#005800" loading={true} size={50} />
    </div>
    
  if (error || !product) return <p>Product not found</p>;

  return (
    <div className="mt-5 single-product px-md-5 px-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 d-flex flex-column align-items-center pb-2">
          <div className="single-product-image-wrapper">
            <Img
              src={product.image?.sourceUrl || productImg}
              className="single-product-image"
              alt={product.image?.altText || product.name}
            />
          </div>
        </div>

        <div className="col-12 col-md-7 d-flex justify-content-md-start align-items-md-start align-items-center justify-content-center">
          <div className="product-details">
            <h4 className="text-md-start text-center">{product.name}</h4>
            <h3 className="text-md-start text-center">{formatted}</h3>

            <div className="control-quantity d-flex align-items-center justify-content-md-start justify-content-center mt-3">
              <button className="btn btn-sm btn-custom-primary me-2" onClick={handleDecrement}>
                <i className="fas fa-minus"></i>
              </button>
              <h2 className="mx-4 mb-0">{quantity}</h2>
              <input type="hidden" name="quantity" value={quantity} />
              <button className="btn btn-sm btn-custom-primary ms-2" onClick={handleIncrement}>
                <i className="fas fa-plus"></i>
              </button>
            </div>

            {/* Variations */}
            {product.__typename === 'VariableProduct' && product.variations?.nodes?.length > 0 && (
              <div className="mt-3 variation">
                <label className="form-label">Select Variation</label>
                <select
                  className="form-select"
                  value={selectedVariation}
                  onChange={(e) => setSelectedVariation(e.target.value)}
                >
                  {product.variations.nodes.map((v) => {
                    const label = v.attributes.nodes
                      .map((attr) => `${attr.name}: ${attr.value}`)
                      .join(' / ');
                    return (
                      <option key={v.id} value={v.id}>
                        {label} —{' '}
                        {Number.isFinite(Number(v.price))
                          ? new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            }).format(Number(v.price))
                          : ''}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            <p className="text-muted my-3 text-md-start text-center">
              Items in stock: {product?.stockQuantity || "Not Available"}
            </p>

            <div className="w-100 mt-4">
              <button className="btn btn-sm btn-custom-primary w-100">
                <i className="fas fa-cart-plus me-2"></i>
                Add to cart
              </button>
            </div>

            <h5
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: product.description || '' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
