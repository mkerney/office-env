import App from "../components/App";
import { connect } from "react-redux";
import { Cookies } from "react-cookie";
import { logoutUser } from "../api/authentication";

const cookie = new Cookies()

const mapStateToProps = state => {
    return{
        page : state.mainFeed.page,
        isPro : state.authStates.isPro,
        loading : state.alertBox.loading,
        category : state.categoryAndSubcategory.category,
        postList : state.searchReducer.postList,
        postType : state.postSorting.postType,
        sortType : state.postSorting.sortType,
        userList : state.searchReducer.userList,
        isSignedIn : state.authStates.isSignedIn,
        categoryName : state.categoryAndSubcategory.categoryName,
        stopScrolling : Object.values(state.modal).some(singleState => singleState),
        headerDropdown : state.modal.headerDropdown,
        showStoryModal : state.modal.showStoryModal,
        showInviteModal : state.modal.showInviteModal,
        showQuestionModal : state.modal.showQuestionModal,
        headerSearchDropdown : state.modal.headerSearchDropdown,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkForCookie : () => {
            let token = cookie.get('token')
            if(token){
                dispatch({type : 'LOGIN'})
            }
        }

        , clearCookie : async () => {
            await logoutUser()
            cookie.remove('token', {path : '/'})
            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "RESET_FEED_PAGE"});
                    resolve(newState);
                })
            })

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "RESET_CATEGORY_AND_SUBCATEGORY"});
                    resolve(newState);
                })
            })

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "RESET_FILTER_AND_SORT"});
                    resolve(newState);
                })
            })

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ 
                        type : "FETCH_POSTS",
                        page: 1,
                        category: "",
                        filterBy: 'All',
                        sortBy: 'All',
                    });
                    resolve(newState);
                })
            })
        }
        , toggleHeaderDropdown : () => dispatch({ type: 'TOGGLE_HEADER_DROPDOWN'})
        , toggleSearchDropdown : () => dispatch({ type: 'TOGGLE_HEADER_SEARCH_DROPDOWN'})
        , toggleStory : () => dispatch({type: 'TOGGLE_STORY_MODAL'})
        , toggleQuestion : () => dispatch({type: 'TOGGLE_QUESTION_MODAL'})
        , toggleInvite : () => dispatch({type: 'TOGGLE_INVITE_MODAL'})
        , clearSearchHistory : () => dispatch({type: 'CLEAR_SEARCH_STATE'})
        , fetchPosts : async (receivedPage, receivedCategory, receivedPostType, receivedSortType) => {
            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "FETCH_POSTS",page: receivedPage, category: receivedCategory, filterBy : receivedPostType, sortBy : receivedSortType});
                    resolve(newState);
                })
            })
            // fetchPostsBySort({sortBy : receivedSortType});
        }
        // , resetPosts : () => dispatch({ type: "RESET_MAIN_FEED_POSTS" })
        // , resetCategoryAndSubCategory : () => dispatch({ type: "RESET_CATEGORY_AND_SUBCATEGORY"})
        , setCategoryAndSubcategory : async (receivedCategory, receivedSubCategory) => {
            await dispatch((dispatch) => {  
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "CATEGORY_AND_SUBCATEGORY", page: 1, category : receivedCategory, filterBy: "All", sortBy: "All", categoryName: "Connect" }); // , subCategory : receivedSubCategory
                    resolve(newState);
                })
            })
            // fetchPostsByCategoryAndSubcategory({category : receivedCategory}) //, subCategory : receivedSubCategory
        }
        // , resetSortAndFilter : () => dispatch({ type: "RESET_FILTER_AND_SORT" })
        , resetPosts : async () => {
            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "RESET_FEED_PAGE"});
                    resolve(newState);
                })
            })

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "RESET_CATEGORY_AND_SUBCATEGORY"});
                    resolve(newState);
                })
            })

            await dispatch((dispatch) => {
                return new Promise((resolve, reject) => {
                    let newState = dispatch({ type : "RESET_FILTER_AND_SORT"});
                    resolve(newState);
                })
            })
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
