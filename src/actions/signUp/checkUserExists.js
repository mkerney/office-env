import { userExist } from "../../api/authentication";
import store from "../../store";

async function checkUserId(idQuery) {
    try {
        const response = await userExist(idQuery);
        return response.data.success;
    } catch (error) {
        console.log('error');
    }
}

export default checkUserId;
