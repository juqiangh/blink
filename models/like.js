import { HTTP } from '../util/http.js';

class LikeModel extends HTTP {

    like(behavior, artId, category, sCallback) {
        let url = behavior === 'like' ? '/like' : '/like/cancel';
        this.request({
            url: url,
            method: 'POST',
            data: {
                art_id: artId,
                type: category
            },
            success: (res) => {
                sCallback(res);
            }
        });
    }

    getClassicLikeStatus(aId, category, sCallback) {
        this.request({
            url: 'classic/' + category + '/' + aId + '/favor',
            success: sCallback 
        })
    }

}

export { LikeModel };