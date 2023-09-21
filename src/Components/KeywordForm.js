/*let keywordInputGroup = document.getElementById('keywordInputGroup');
let keywordAddBtn = document.getElementById('keywordAddBtn');
keywordAddBtn.addEventListener('click', (e) => {
    let keywordGrid = document.getElementById('keywordGrid');
    keywordInputGroup.style.top = (keywordGrid.offsetTop - 45) + "px";
    keywordInputGroup.style.left = keywordGrid.offsetLeft + "px";
    keywordInputGroup.hidden = false;
    document.getElementById('keywordInput').focus();
    document.getElementById('keywordSubmit').addEventListener('click', (e) => {
        let keyword = document.getElementById('keywordInput').value;
        if (!!keyword && keyword != "")
            addKeyword(keyword).then(() => {
                updateKeywordSearch();
            });
        document.getElementById('keywordInput').value = '';
    });
});
let keywordInputGroupCloseBtn = document.getElementById('keywordInputGroupCloseBtn')
keywordInputGroupCloseBtn.addEventListener('click', (e) => {
    keywordInputGroup.hidden = true;
});*/

// KeywordForm.js
import React, { useState, useRef } from 'react';

function KeywordComponent() {
    const [isInputVisible, setInputVisible] = useState(false);
    const [keyword, setKeyword] = useState('');

    const keywordGridRef = useRef(null);
    const keywordInputRef = useRef(null);

    const handleAddClick = () => {
        setInputVisible(true);
        if (keywordInputRef.current) {
            keywordInputRef.current.focus();
        }
    };

    const handleKeywordSubmit = async () => {
        if (keyword) {
            // 여기에 키워드를 추가하는 로직
            // 예: await addKeyword(keyword);
            setKeyword('');
        }
    };

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    return (
        <div>
            <div className="keyword-add-btn" id="keywordAddBtn" onClick={handleAddClick}>+</div>

            <div id="keywordInputGroup" hidden={!isInputVisible} style={isInputVisible ? {
                top: `${keywordGridRef.current.offsetTop - 45}px`,
                left: `${keywordGridRef.current.offsetLeft}px`
            } : {}}>
                <div className="keyword-input-grid">
                    <input
                        id="keywordInput"
                        ref={keywordInputRef}
                        value={keyword}
                        onChange={handleInputChange}
                        placeholder="키워드를 입력해주세요!"
                    />
                    <button id="keywordSubmit" onClick={handleKeywordSubmit}>추가</button>
                    <button id="keywordInputGroupCloseBtn" onClick={() => setInputVisible(false)}>닫기</button>
                </div>
            </div>

            <div id="keywordGrid" ref={keywordGridRef}>
                {/* 여기에 키워드 그리드의 내용 */}
            </div>
        </div>
    );
}

export default KeywordComponent;
