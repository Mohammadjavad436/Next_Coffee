import Link from "next/link";
import Image from "next/image";

interface ArticleProps {
  title: string;
  img: string;
  comments: string;
  date: string;
  href: string;
}

const Article = ({ title, img, comments, date, href }: ArticleProps) => {
  return (
    <Link href={href} className="flex items-start gap-4 p-4 hover:bg-gray-100 transition-colors">
      <Image width={75} height={65} src={img} alt="" className="rounded-lg" />
      <div className="flex flex-col gap-2">
        <p className="text-gray-800 font-medium">{title}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <p>{comments}</p>
          <p dir="rtl">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;