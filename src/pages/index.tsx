import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
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

const HomePage: NextPage<Props> = ({ products }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [headerColor, setHeaderColor] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [tempColor, setTempColor] = useState('')

  const openModal = () => {
    setTempColor(headerColor)
    setShowModal(true)
  }

  const applyColor = () => {
    setHeaderColor(tempColor)
    setShowModal(false)
  }

  return (
    <div>
      <Navbar />
      <button
        className="u-btn edit-button"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        {isEditMode ? 'Done' : 'Edit'}
      </button>
      <div className="home-page">
        <div className="u-flex u-justify-center">
          <h1
            className={`home-page__header ${isEditMode ? 'editable' : ''}`}
            style={{ color: headerColor || undefined }}
            onClick={() => isEditMode && openModal()}
          >
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

      {showModal && (
        <div className="color-modal">
          <div className="color-modal__content">
            <label>
              <span>Header color</span>
              <input
                value={tempColor}
                onChange={(e) => setTempColor(e.target.value)}
                placeholder="#000000"
              />
            </label>
            <div className="color-modal__actions">
              <button className="u-btn" onClick={applyColor}>
                Ok
              </button>
              <button
                className="u-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

  </div>
)
export default HomePage
