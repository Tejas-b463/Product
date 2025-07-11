import ProductForm from '../products/ProductForm';
import ProductTable from '../products/ProductTable';

const Home = () => {
  return (
    <div className='p-4'>
         <ProductForm />
         <ProductTable />
    </div>
  )
}

export default Home;