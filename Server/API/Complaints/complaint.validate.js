/**
 * Created by anurag on 30/5/17.
 */

exports.validateComplaint = (data) => {
        return ((data.title && data.description) && data.category);
};