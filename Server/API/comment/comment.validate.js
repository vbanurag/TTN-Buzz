/**
 * Created by anurag on 30/5/17.
 */
exports.commentValidator = (data) => {
    if((data.comment && data.commentedBy) && data.commentedOn){
        if( data.comment.length<=1000){
            return true;
        }
        return false;
    }
    return false;
};