import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { fromImgToUrl, API_URL} from '../utils/urls' 
import { formatPrice } from '../utils/format'

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Strapi Ecommerce UI</title>
        <link rel="icon" href="/mitri-logo.png" />
      </Head>

      {products.map(product => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
            <div className={styles.product_row}>
              <div className={styles.product_col_img}>
                <img src={fromImgToUrl(product.image)}/>
              </div>
              <div className={styles.product_col}>
                {product.name} ${formatPrice(product.price)}
              </div>
            </div>
            </a>
          </Link>
        </div>
      ))}

    </div>
  )
}

// NextJS Fetch and Return Data as Prop
export async function getStaticProps() {
  // Fetch products
  const products_res = await fetch(`${API_URL}/products/`)
  const products = await products_res.json()

  // Return products as props
  return {
    props: {
      products
    }
  }
}
