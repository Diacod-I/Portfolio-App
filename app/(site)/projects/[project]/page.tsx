import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableTextBlock } from "sanity";
import fallBackImage from "@public/project.png";

type Props = {
    params: {
        project: string;
    };
}

//Dynamic Metadata for SEO shit ykyk

export default function Loading() {
    return(
        <div className="max-w-3xl mx-auto lg:px-0 px-8">
            <div className="flex items-center justify-between mb-6">
                <span className="w-52 h-11 bg-[#1d1d20] rounded-sm animated pulse"></span>
                <span className="w-52 h-11 bg-[#1d1d20] rounded-sm animated pulse"></span>
            </div>
            <div className="w-full h-96 mb-8 bg-[#1d1d20] rounded-sm animated pulse"></div>
            <div className="flex flex-col gap-y-2">
                <span className="w-full h-5 bg-[#1d1d20] rounded-sm animated pulse"></span>
                <span className="w-full h-5 bg-[#1d1d20] rounded-sm animated pulse"></span>
            </div>
        </div>
    );
}