/**
 * Created by anurag on 30/5/17.
 */
exports.updateLikeDislikeValidate = (req) => {
    let data = req.body.opinion;
    if(data.choose != ''){
        if(data.choose == 'LIKE' || data.choose == 'DISLIKE'){
           return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
};
