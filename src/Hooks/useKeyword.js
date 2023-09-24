// async function addKeyword(keyword) {
//     let keywords = await getKeywords();
//     let recentNotices = await getRecentNotices();
//     let recentNotice;

//     fetch(`https://www.jbnu.ac.kr/kor/?menuID=139&subject=${keyword}&sfv=subject`).then((res) => res.text()).then((html) => {
//         let result = htmlParser.parseHTML(html);
//         if(result.length > 1) {
//             recentNotice = result[0];

//             recentNotices.push({
//                 "keyword": keyword,
//                 "recentNotice": recentNotice
//             });
//             let recenetNoticesKeyValue = {"recentNotice": recentNotices};
//             chromeAPI.setLocal(recenetNoticesKeyValue);
//         } else {
//             recentNotices.push({
//                 "keyword": keyword,
//                 "recentNotice": null
//             });
//             let recenetNoticesKeyValue = {"recentNotice": recentNotices};
//             chromeAPI.setLocal(recenetNoticesKeyValue);
//         }
//     });

//     keywords.push(keyword);
//     selectedKeyword = keyword
    
//     let keyValue = { "keyword": keywords };
//     await chromeAPI.setLocal(keyValue);
// }

import { useState } from 'react';
import chromeAPI from '../API/chromeAPI';
// import other necessary methods or libraries such as htmlParser, chromeAPI, getKeywords, getRecentNotices

function useKeyword() {
    const [selectedKeyword, setSelectedKeyword] = useState('');

    const addKeyword = async (keyword) => {
        let keywords = await getKeywords();
        let recentNotices = await getRecentNotices();
        let recentNotice;

        fetch(`https://www.jbnu.ac.kr/kor/?menuID=139&subject=${keyword}&sfv=subject`)
            .then((res) => res.text())
            .then((html) => {
                let result = htmlParser.parseHTML(html);
                if(result.length > 1) {
                    recentNotice = result[0];

                    recentNotices.push({
                        "keyword": keyword,
                        "recentNotice": recentNotice
                    });

                    chromeAPI.setLocal({"recentNotice": recentNotices});
                } else {
                    recentNotices.push({
                        "keyword": keyword,
                        "recentNotice": null
                    });
                    chromeAPI.setLocal({"recentNotice": recentNotices});
                }
            });

        keywords.push(keyword);
        setSelectedKeyword(keyword);
        
        await chromeAPI.setLocal({ "keyword": keywords });
    };

    return {
        selectedKeyword,
        addKeyword
    };
}

export default useKeyword;
