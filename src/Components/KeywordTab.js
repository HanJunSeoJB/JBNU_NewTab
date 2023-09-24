// function setKeywordBtn() {
//     // select keyword
//     let keywordTab = document.getElementsByClassName('keyword');

//     for (let i = 0; i < keywordTab.length; i++) {
//         keywordTab[i].addEventListener('click', (e) => {
//             document.getElementsByClassName('selected-keyword')[0].classList.remove('selected-keyword');
//             selectedKeyword = keywordTab[i].getAttribute('value');;

//             e.target.classList.add('selected-keyword');
//             let keywordNoticeGroup = document.getElementById("keywordNoticeList");

//             keywordNoticeGroup.innerHTML = ``;

//             if (!!!keywordNoticeList[selectedKeyword]) {

//             } else if (keywordNoticeList[selectedKeyword].length == 0) {
//                 keywordNoticeGroup.innerHTML += `<div class="notice-empty">검색 결과가 없습니다.</div>`
//             } else {
//                 let index = 1;
//                 for (const notice of keywordNoticeList[selectedKeyword]) {
//                     let noticeElement = `<div class="notice-element">${index++}. <a class="notice-name" target="_blank" href="${notice.leftLink}">${notice.left}<small class="mute">${notice.date}</small></div></div>`;
//                     keywordNoticeGroup.innerHTML += noticeElement;
//                 }
//             }

//             let deleteBtns = document.getElementsByClassName("keyword-delete-btn");
//             for (let i = 0; i < deleteBtns.length; i++) {
//                 deleteBtns[i].addEventListener('click', () => {
//                     deleteKeyword(deleteBtns[i].id);
//                 });
//             }
//         });
//     }
// }

import React, { useState } from 'react';

const KeywordTab = ({ keywordNoticeList, deleteKeyword }) => {
    const [selectedKeyword, setSelectedKeyword] = useState('');

    const handleKeywordClick = (keyword) => {
        setSelectedKeyword(keyword);
    }

    const handleDeleteKeyword = (keyword) => {
        deleteKeyword(keyword);
    }

    return (
        <div>
            {Object.keys(keywordNoticeList).map((keyword) => (
                <div 
                    className={`keyword ${selectedKeyword === keyword ? 'selected-keyword' : ''}`}
                    key={keyword}
                    onClick={() => handleKeywordClick(keyword)}
                >
                    {keyword}
                    <button 
                        className="keyword-delete-btn" 
                        id={keyword}
                        onClick={() => handleDeleteKeyword(keyword)}
                    >
                        Delete
                    </button>
                </div>
            ))}
            <div id="keywordNoticeList">
                {keywordNoticeList[selectedKeyword] && keywordNoticeList[selectedKeyword].length === 0 ? (
                    <div className="notice-empty">검색 결과가 없습니다.</div>
                ) : (
                    keywordNoticeList[selectedKeyword]?.map((notice, index) => (
                        <div className="notice-element" key={index}>
                            {index + 1}. <a className="notice-name" target="_blank" href={notice.leftLink} rel="noopener noreferrer">{notice.left}<small className="mute">{notice.date}</small></a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default KeywordTab;

