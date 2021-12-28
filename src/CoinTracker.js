import {useEffect, useState} from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    const [money, setMoney] = useState();
    const [buyCoin, setBuyCoin] = useState("1");
    const [selectCoin, setSelectCoin] = useState("Bitcoin");
    const changeMoney = (money) => {
        setMoney(money.target.value)
        setBuyCoin()
    };
    const changeCoin = (e) =>{
        console.log(selectCoin)
        console.dir(e)
        setSelectCoin()
    }

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            <div>
                {loading ? "" : <input onChange={changeMoney} value={money} type="number" placeholder="input your money"/>}
            </div>
            <div>
                {loading ? <strong>Loading...</strong> :<select onChange={changeCoin} value={selectCoin}>
                    {coins.map((coin, index) =>(
                            <option key={index} value={coin.name} date-price = {coin.quotes.USD.price} >
                                {coin.name} ({coin.symbol}: {coin.quotes.USD.price} USD)
                            </option>
                        )
                    )}
                </select>}
            </div>
            <div>
                {loading ? "" : (
                    <p>{buyCoin} coin 구매 가능</p>
                )}
            </div>
        </div>
    );
}

export default CoinTracker;