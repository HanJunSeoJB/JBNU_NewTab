import { useState, useEffect } from 'react';
import { retrieveData } from '../Utils/apiUtils.js'

const useNoticeData = () => {
    const [noticeList, setNoticeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await retrieveData();
                setNoticeList(data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { noticeList, loading, error };
}

export default useNoticeData;
