import * as request from '~/utils/httpRequest';

export const getFollowing = async ({ following, perFollowing }) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page: following,
                per_page: perFollowing,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
