import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
        .then(res => {
            console.log(res)
            if(!res.ok) {
                throw Error("could not fetch the data for that resource")
            }
            return res.json();
        })
        .then(data => {
            //console.log(data)
            setData(data)
            //console.log(name)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log("fetch aborted");
            } else {
                setIsPending(false)
                setData(false) //mine
                setError(err.message)
            }
        })
        }, 1000);

        return () => abortCont.abort();

    }, [url]); //put name in [] to monitor it and console.log in the second .then
    return { data, isPending, error }
}

export default useFetch;