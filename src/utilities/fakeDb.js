
const addToDb = (id,title) => {
    let bookmarkedBlogs = getBookmarks();
    // add bookmark
    bookmarkedBlogs[id]=title

    localStorage.setItem('blogs', JSON.stringify(bookmarkedBlogs));
}

const getBookmarks = () => {
    let bookmarkedBlogs = {};

    //get the bookmarked blogs from local storage
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        bookmarkedBlogs = JSON.parse(storedBlogs);
    }
    return bookmarkedBlogs;
}

export {
    addToDb,
    getBookmarks
   
}
