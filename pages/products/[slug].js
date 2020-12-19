import Head from 'next/head'
import { formatPrice } from '../../utils/format'
import { fromImgToUrl, API_URL } from '../../utils/urls'

const Product = ({ product }) => {
  return (
    <div>
      <Head>        
        <meta http-equiv="Content-Type" content="text/html"/>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {product.meta_title &&
          <title>{product.meta_title}</title>
        }
        {product.meta_description &&
          <meta name="description" content={product.meta_description} />
        }
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImgToUrl(product.image)}/>
      <h3>{product.name}</h3>
      <p>${formatPrice(product.price)}</p>

      <p>
        {product.content}
      </p>
    </div>
  )
}

export async function getStaticProps({params: {slug}}) {
    // Retrieve all possible paths
    const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
    const found = await product_res.json()
  
    // Return to NextJS context
    return  {
      props: {
        product: found[0] // Using a query will result in returning an array
      }
    }
}

export async function getStaticPaths() {
  // Retrieve all possible paths
  const products_res = await fetch(`${API_URL}/products/`)
  const products = await products_res.json()

  // Return as Props
  return {
    paths: products.map(product => ({
      params: {
        slug: String(product.slug)
      }
    })),
    fallback: false // 404 error if no match
  }
}

export default Product