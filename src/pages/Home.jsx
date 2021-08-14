import Card from '../components/Card/Card';

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCard,
}) {
    return (
        <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear removeBtn cu-p"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
              <Card
                key={item.title}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCard(obj)}
                {...item}
              />
            ))}
        </div>
      </div>
    );
}

export default Home;