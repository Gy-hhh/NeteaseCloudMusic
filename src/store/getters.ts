import { State } from '@store/state';

export type Getters<T> = {
  [key: string]: (state: T) => void;
};

const getters: Getters<State> = {
  menuIndex: state => state.menuIndex,
  subMenuIndex: state => state.subMenuIndex,
  loginDialog: state => state.loginDialog,
  userInfo: state => state.userInfo,
  cookie: state => state.cookie,
  isLogin: state => state.isLogin,
  message: state => state.message,
  searchText: state => state.searchText,
  searchDetailText: state => state.searchDetailText,
  userId: state => state.userId,
  songId: state => state.songId,
  songSheetId: state => state.songSheetId,
  singerId: state => state.singerId,
  djprogramId: state => state.djprogramId,
  albumId: state => state.albumId,
  singerTabIndex: state => state.singerTabIndex,
  searchIndex: state => state.searchIndex,
  songSheetDetail: state => state.songSheetDetail,
  collectSong: state => state.collectSong,
  copyright: state => state.copyright
};

export default getters;
