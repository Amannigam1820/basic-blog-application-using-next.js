import BlogOverview from "../../components/blog-overview"


const fetchListOfBlogs = async()=>{
    try {
        
        const apiRes = await fetch('http://localhost:3000/api/get-blogs',{
            method:"GET",
            cache:"no-store"
        })
        const res = await apiRes.json();
        return res.data
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}


const Blogs = async() =>{
    const blogList = await fetchListOfBlogs();
   // console.log(blogList);
    return(
        <div>
            <BlogOverview list={blogList}/>
        </div>
    )
}

export default Blogs