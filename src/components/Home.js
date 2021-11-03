import { useState } from "react"
import useFetch from "../useFetch";
import BlogList from "./BlogList"

const Home = () => {  
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

    //useFetch("http://localhost:8000/blogs")

    //https://demo-blog-87vrgpw8x-segunajibola.vercel.app/ vercel link
    //192.168.25.25 my ip address
    //https://stackoverflow.com/questions/55813071/why-is-fetch-not-working-on-my-mobile-browser
    //In the "Build & Development Settings", override the Build command and write CI='' npm run build.

    //const [name, setName] = useState("mario");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(eachBlog => eachBlog.id !== id);
    //     setBlogs(newBlogs);
    // }

    

    // const handleClick = () => {
    //     setBlogs(blogs[1].title = "Segun")
    //        setBlogs({title : "Segun", blog : "Tom"})
    //        setBlogs({firstName : "Segun", lastName : "Tom"})
    //       console.log(blogs[1].title)
    // }

    /* let cities = ["Madrid ", "Lagos ", "Tokyo "];
    cities.push("Abuja ");
    cities.pop();

    // let ["hello" , "hi"] = cities;

    const consolecities = () => {
        cities = ["hello" , "hi"]
        console.log(cities[0])
    }

    const [location, setLocation] = useState ([
        {country: "Nigeria", state: "Lagos", Block: "A", id: 1}
     // {country: "USA", state: "Texas", Block: "B", id: 1},
    ])

    const countryFunc = () => {
        setLocation({country : "Kenya"})
        console.log(location[0].country)
    }

    const [fruits, setFruits] = useState (
        {flavour: "Apple"}
    )

    const fruitsFunc = () => {
        setFruits({flavour : "Pineapple"})
        console.log(fruits.flavour)
    }

    const [user, setUser] = useState("Segun");
    const [age, setAge] = useState("21");

    const changeDetails = () => {
        setUser("Tayo")
        setAge("17")
    } */

    return (
        <div className="home">
            {/* <h2>{name}</h2>
            <button onClick={() => setName("luigi")}>Change name</button> */}
            { error && <div className="homeError">Sorry for the error. You encountered this error because this project is a blog demo to test React and JSON Database. It can only work on desktop with live-server and  set-up ello</div>}
            { isPending && <div>Blogs loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All blogs!" /> }
            { blogs && <BlogList blogs={blogs.filter((eachBlog) => eachBlog.author === "mario")} title="Mario blogs!" />}
            
            {/* <h2>{ blogs[0].title } and { blogs[1].body }</h2>
            <button onClick={handleClick}>Change blog title</button> */}
            {/* <h2>{ cities[0] }</h2>
            <button onClick={consolecities}>console for cities</button>
            <h2>{ location[0].country }</h2>
            <button onClick={countryFunc}>Change country console</button>
            <h2>{ fruits.flavour }</h2>
            <button onClick={fruitsFunc}>Click4</button>
            <h2>{user} is {age} years old</h2>
            <button id="demo" onClick={changeDetails}>Show Tayo age</button> */}
        </div>
    )
};

export default Home;

// const [name, setName] = useState("Segun");
    // const [age, setAge] = useState("21");

    // const handleClick = () => {
    //     setName("Tayo")
    //     setAge("17")
    //     document.getElementById("demo").innerHTML = "Show Bimbo's age"
    // }

    /*
    Adding a parameter
    const handleClickAgain = (x) => {
        console.log("hello there " + x)
    }

    <button onClick={() => {
        handleClickAgain(1)
     }}>Click Here</button>*/

     /*
     Adding object details and working with arguments
     const handleClickAgain = (x) => {
        console.log("hello there ", x.target)
    }

    <button onClick={(e) => {
               handleClickAgain(e)
            }}>Click Here</button>*/

//             const [name, setName] = useState (
//                 {title: "My new website", body: "lorem ipsum ...", author: "mario", id: 1}
//                    )
//                    const handleClick = () => {
//                        setName({name.title: "hey"})
//                        console.log(name.title)
//                    }
//                    its updating on console but not browser
// <h2>{ name.title }</h2>
// <button onClick={handleClick}>Click</button>
