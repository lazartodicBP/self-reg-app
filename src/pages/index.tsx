import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar/Navbar'
import Card from '@/components/Card/Card'
import Loader from '@/components/Loader/Loader'
import { productsData, descriptions, Product } from '@/services/products-data'

type Props = {
  products: Product[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { products: productsData } }
}

const HomePage: NextPage<Props> = ({ products }) => (
  <div>
    <Navbar />
    <div className="home-page">
      <div className="u-flex u-justify-center">
        <h1 className="home-page__header">
          Subscribe for award winning journalism
        </h1>
      </div>

      {/* Subheader */}
      <div className="u-flex u-justify-center">
        <h2 className="home-page__subheader">
          Choose the best option for your household
        </h2>
      </div>

      {/* Plans */}
      <div className="home-page__plans">
        {products.length === 0 ? (
          <Loader />
        ) : (
          products.map((item, index) => (
            <Card
              key={item.Id}
              className={`plan-card__type-${index}`}
            >
              <div className="u-h-full u-flex u-column u-text-center">
                {/*<h3 className="plan-card__subtitle">Household option</h3>*/}
                <h2 className="plan-card__title">{item.Name}</h2>
                <p className="plan-card__price">{item.Rate}</p>
                <span className="plan-card__price-description">AUD/week</span>
                <div className="plan-card__divider" />
                <p className="plan-card__product-description">
                  {descriptions[item.Id]?.title}
                </p>
                <p className="plan-card__product-description--secondary">
                  {descriptions[item.Id]?.description}
                </p>
                <div className="plan-card__images">
                  {descriptions[item.Id]?.images.map((img, i) => (
                    <img
                      key={i}
                      className="plan-card__image"
                      src={img.src}
                      alt={img.alt ?? `image-${i}`}
                      width={img.width}
                      height={img.height}
                    />
                  ))}
                </div>

                <div className="plan-card__try-btn-container">
                  <Link
                    href={`/register?planId=${item.Id}`}
                    className="u-btn u-btn--focus plan-card__try-btn"
                  >
                    Try it now
                  </Link>
                </div>

              </div>
            </Card>
          ))
        )}
      </div>
    </div>

  </div>
)

export default HomePage