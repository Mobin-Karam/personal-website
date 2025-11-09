import { BlogCardProps } from "@/types/blog";
import Link from "next/link";



const BlogCard: React.FC<BlogCardProps> = ({ slug, title, date, excerpt, thumbnail }) => {
    return (
        <Link
            href={`/blog/${slug}`}
            className="block rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition border border-slate-100"
        >
            {thumbnail && (
                <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-5">
                <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
                <p className="text-xs text-slate-400 mt-1">{date}</p>
                <p className="text-sm text-slate-600 mt-3 line-clamp-3">{excerpt}</p>
                <span className="inline-block mt-4 text-primary-500 font-medium">
                    Read more →
                </span>
            </div>
        </Link>
    );
};

export default BlogCard;
