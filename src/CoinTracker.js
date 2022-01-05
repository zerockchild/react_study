import {useEffect, useState} from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    const [money, setMoney] = useState("0");
    const [buyCoin, setBuyCoin] = useState("0");
    const [price, setPrice] = useState("0");


    const changeMoney = (money) => {
        setMoney(money.target.value)
        console.log(price)
        setBuyCoin(money.target.value/price)
    };
    const changeCoin = (e) =>{
        console.log(e.target.value)
        setPrice(e.target.value)
        console.log(price)
        setBuyCoin(money/e.target.value)
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
                {loading ? <strong>Loading...</strong> :
                    <select onChange={changeCoin}>
                        <option key="default" value="0">-------------------------</option>
                    {coins.map((coin, index) =>(
                            <option key={index} value={coin.quotes.USD.price}>
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