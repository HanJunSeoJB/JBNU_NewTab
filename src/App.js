import logo from './assets/images/logo.png';
import NoticeList from './Components/NoticeList';
import KeywordComponent from './Components/KeywordForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Fonts.css'



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
                    <KeywordComponent/>
                    <div className="keyword-list" id="keywordList"></div>
                </div>
                <div className="keyword-notice-list" id="keywordNoticeList"></div>
            </div>
        </div>
    </div>

    <a className="report-and-question" href="mailto:cwssasi@gmail.com?subject=[전북대새탭] 문의 및 오류 제보">문의 및 오류 제보</a>
    </div>
  );
}

export default App;
