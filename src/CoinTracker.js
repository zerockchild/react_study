import { useEffect, useState } from "react";

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [money,setMoney] = useState(0);
    const [coins, setCoins] = useState([]);
    const onChange = (event) => {
        setMoney(currentMoney => event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('버튼');
    }
    const onSelect = (event) => {
        console.log('event');
        console.log(event.target);
        console.log(event.target.value);
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then(json => {
            setCoins(json);
            setLoading(false);
        });
    }, [])
    return <div>
        <h1>The Conis! ({coins.length})</h1>
        {loading ? (<strong>Loading...</strong>)
         : (
            <div>
            <form onSubmit={onSubmit}>
            <label>Input your Money</label>
            <input value={money} onChange={onChange}></input>
            <button>Expect Convert Coin</button>
            </form>
            <br/>
            <select>
                {coins.map((coin, idx) => 
                    <option key={idx} onChange={onSelect} value={coin.name}>
                        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                    </option>)}
            </select>
            </div>
        )} 
        
    </div>
}

export default CoinTracker;