import connectToDB from "@/database";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractAllBlogFromDB = await Blog.find({});
    if (extractAllBlogFromDB) {
      return NextResponse.json({
        success: true,
        data: extractAllBlogFromDB,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
