import Comment from "@/components/modules/comment/Comment";
import CommentForm from "./CommentForm";
import { TProductDetail } from "./Details";

interface CommentsProps {
    allProductComments: TProductDetail;
}

const Comments = ({ allProductComments }: CommentsProps) => {
    return (
        <div>
            <p>نظرات ({allProductComments.comments.filter((comment) => comment.isAccept).length}) :</p>
            <hr />

            <main className="flex gap-[50px]">
                <div className="w-1/2">
                    <p className="text-lg font-bold">
                        7 دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
                        ده -10- عددی
                    </p>
                    <div>
                        {allProductComments.comments.map((commentData) =>
                            commentData.isAccept && <Comment key={commentData._id} score={commentData.score} body={commentData.body} date={commentData.date} name={commentData.email} />
                        )}
                    </div>
                </div>
                <div className="w-1/2">
                    <CommentForm productID={allProductComments._id} />
                </div>
            </main>
        </div>
    );
};

export default Comments; 