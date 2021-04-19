import axios from "axios";
import uuid from "uuid";
import React, { useState } from "react";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);

    const getData = async (url = "") => {
        const res = await axios.get(`${baseUrl}${url}`);
        setData(data => [...data, { ...res.data, id: uuid() }])
    }

    return [data, getData];
}

export default useAxios;