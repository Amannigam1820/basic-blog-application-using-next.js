"use client";

import { useState } from "react";
import AddNewBlog from "../add-new-blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const initialBlogFormData = {
  title: "",
  description: "",
};

const BlogOverview = ({list}) => {
  const [loading, setLoading] = useState(false);
  const [blogFormData, setBloagFormData] = useState(initialBlogFormData);
  const [openBlogDialog, setOpenBlogDialog] = useState(false);

  const handleSaveBlogData = async() =>{
    try {
      setLoading(true)
      const apiRes = await fetch('/api/add-blog',{
        method:"POST",
        body:JSON.stringify(blogFormData)
      })


      const res = await apiRes.json();
      console.log(res);
      if(res?.success){
        setBloagFormData(initialBlogFormData);
        setOpenBlogDialog(false);
        setLoading(false);
      }
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBloagFormData(initialBlogFormData)
    }
  }

//  console.log(blogFormData);
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <AddNewBlog
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData = {setBloagFormData}
        handleSaveBlogData={handleSaveBlogData}
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
      />
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {
        list && list.length > 0 ?
          list.map((item)=>(
            <Card className="p-5">
              <CardContent className="mt-5">
                <CardTitle>{item?.title}</CardTitle>
                <CardDescription>{item?.description}</CardDescription>
              </CardContent>
            </Card>
          ))
        :null
      }

      </div>
    </div>
  );
};

export default BlogOverview;
