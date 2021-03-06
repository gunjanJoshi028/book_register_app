/* 
 * (C) 2020 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "crud_app";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;

export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH, APP_NAME,
    LIST_BOOKS_HTML: APP_PATH + "/books.html",

    SESSION_NOTE_ID: "com_monkshu_ts",

    API_LISTBOOKS: `${BACKEND}/apis/list-books`,
    API_CREATEBOOK: `${BACKEND}/apis/create-book`,
    API_DELETEBOOKS: `${BACKEND}/apis/delete-books`,
    API_EDITBOOKS: `${BACKEND}/apis/edit-books`,
    API_GETBOOK: `${BACKEND}/apis/get-book`,

    USERID: "id",
    USER_ROLE: "user",
    GUEST_ROLE: "guest",
    PERMISSIONS_MAP: {
        user: [$$.MONKSHU_CONSTANTS.ERROR_THTML],
        guest: [APP_PATH + "/books.html", $$.MONKSHU_CONSTANTS.ERROR_THTML]
    },
    API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
    KEY_HEADER: "X-API-Key"
}