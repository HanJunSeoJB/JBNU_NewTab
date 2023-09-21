import useNoticeData from "../Hooks/useNoticeData";

const NoticeList = () => {
    const { noticeList, loading, error } = useNoticeData();
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
    return (
        <div className="notice-group">
            {noticeList.length === 0 ? (
                <div className="no-notices">공지사항이 없습니다.</div>
            ) : (
                noticeList.map((notice, index) => (
                <div className="notice-element">
                    {index + 1}.<a className="notice-name" target="_blank" href={notice.leftLink} rel="noopener noreferrer">{notice.left}</a>
                    <small>{notice.date}</small>
                </div>
                ))
            )}
        </div>
    )
}

export default NoticeList;