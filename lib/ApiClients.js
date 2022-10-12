import { axiosClient } from "../config/ApiConfig"

export const ApiClient = {
    Categorys: {
        GetAllCate: async () => {
            await axiosClient({
                method: "get",
                url: "/categorys"
            }).then((res) => {

            }).catch((err) => {

            })
        }
    },
    Carousel: {

    }
}