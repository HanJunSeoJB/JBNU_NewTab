import logo from './assets/images/logo.png';
import NoticeList from './Components/NoticeList';
import './App.css';

function App() {
  return (
    <div>
      <div className="logo-group">
        <a href="https://www.jbnu.ac.kr/kor/">
            <img className="logo" src={logo} alt="전북대학교 새탭"/>
        </a>
    </div>

    <div className="container-fluid">
        <div className="main-grid">
            <div className="notice-group" id="noticeGroup">
                <h2>
                    오늘 올라온 공지 글
                </h2>
                <div className="notice-list" id="noticeList">
                    <NoticeList/>
                </div>
            </div>
            <div className="keyword-notice-group" id="keywordNoticeGroup">
                <div className="keyword-grid" id="keywordGrid">
                    <h2>
                        키워드 검색
                    </h2>
                    <div className="keyword-add-btn" id="keywordAddBtn">+</div>
                    <div className="keyword-list" id="keywordList"></div>
                </div>
                <div className="keyword-notice-list" id="keywordNoticeList"></div>
            </div>
        </div>
    </div>
    <div className="keyword-input-group" id="keywordInputGroup" hidden>
        <div className="keyword-input-grid">
            <input type="text" class="form-control keyword-input" id="keywordInput" placeholder="키워드를 입력해주세요!"/>
            <button className="btn btn-primary ms-2" id="keywordSubmit">추가</button>
            <button className="btn btn-secondary ms-2" id="keywordInputGroupCloseBtn">닫기</button> 
        </div>
    </div>
    <a className="report-and-question" href="mailto:cwssasi@gmail.com?subject=[전북대새탭] 문의 및 오류 제보">문의 및 오류 제보</a>
    </div>
  );
}

export default App;
