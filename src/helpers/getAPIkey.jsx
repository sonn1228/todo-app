import { endpoint } from "../configs/config";
import HttpClient from "../configs/client";
import { emailRegex } from "./regex";

const client = new HttpClient();
export default async function getApiKey(email) {
    try {
        if (emailRegex(email)) {
            const { data: dataApiKey, res: response } = await client.get(
                endpoint.apiKey, {
                email,
            }
            );

            console.log("dataApiKey", dataApiKey);
            console.log("response", response);

            if (response.ok) {
                const apiKey = dataApiKey.data.apiKey;

                //Set apiKey và email to localStorage khi thành công
                localStorage.setItem("apiKey", apiKey);
                localStorage.setItem("userEmail", email);

                return { email, apiKey, response };
            } else {
                return { message: dataApiKey.message, response };
            }
        } else {
            return { message: "Email không hợp lệ" };
        }
    } catch (e) {
        console.log("error: ", e);
    }
}
