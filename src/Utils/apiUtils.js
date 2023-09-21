import * as htmlParser from "./htmlParser.js";
import * as ChromeAPI from "./chromeAPI.js";

const univURL = `http://www.jbnu.ac.kr/kor/?menuID=139`;
let noticeList = []
const today = new Date()
today.setHours(0, 0, 0, 0);
const pivotDate = new Date(today.setDate(today.getDate() - 0));

// 데이터를 가져오는 함수
export const retrieveData = async () => {
    let isEnd = false;

    for(let i = 1; i <= 10; i++) {
        if(isEnd) {
            break;
        }
        await fetch(univURL + `&pno=${i}`).then((res) => res.text()).then((html) => {
                const result = htmlParser.parseHTMLWithPivotDate(html, pivotDate);
                noticeList = noticeList.concat(result[0]);
                isEnd = result[1];
        });
    }
    return noticeList;
}