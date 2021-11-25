export const selectGists = (state) => state.gists.gists;
export const selectGistsError = (state) => state.gists.error_message;
export const selectGistsLoading = (state) => state.gists.loading;
export const selectGistsData = (state) => state.gists.articles;