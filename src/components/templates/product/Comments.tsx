import Comment from "@/components/modules/comment/Comment";
import CommentForm from "./CommentForm";

const Comments: React.FC = () => {
    return (
        <div>
            <p>نظرات (7) :</p>
            <hr />

            <main className="flex gap-[50px]">
                <div className="w-1/2">
                    <p className="text-lg font-bold">
                        7 دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
                        ده -10- عددی
                    </p>
                    <div>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
                <div className="w-1/2">
                    <CommentForm />
                </div>
            </main>
        </div>
    );
};

export default Comments; 