import { GetServerSideProps, NextPage } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import Loader from '@/components/Loader/Loader'
import PlanCard from '@/components/PlanCard/PlanCard'
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
            <PlanCard
              key={item.Id}
              product={item}
              description={descriptions[item.Id]}
              type={index}
            />
          ))
        )}
      </div>
    </div>

  </div>
)
export default HomePage
