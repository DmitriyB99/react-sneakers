import React from 'react';
import AppContext from '../context';
import axios from 'axios';
import Card from '../components/Card/index';

function Orders() {
  const {onAddToFavorite, onAddToCard} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://60eafef0e9647b0017cddca1.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        // console.log(data.map(obj => obj.items).flat()); аналогичный вариант через флат
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

    return (
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Мои заказы</h1>
        </div>

        <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
              <Card key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              
              loading={isLoading}
              {...item} />
            ))}
        </div>
      </div>
    );
}

export default Orders;