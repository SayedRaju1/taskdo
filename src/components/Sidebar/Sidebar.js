import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css'


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://guarded-wildwood-19229.herokuapp.com/loadAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar bg-white p-3 col-md-2 col-12 col-lg-2 col-sm-12">
            <div className=" p-3">
                <Link className="text-decoration-none d-flex justify-content-center text-reset" to="/">
                    <svg width="200" height="60" viewBox="0 0 150 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.858 6.13C61.95 6.13 62.922 6.334 63.774 6.742C64.638 7.138 65.34 7.708 65.88 8.452C66.42 9.184 66.786 10.036 66.978 11.008H63.252C63.048 10.504 62.73 10.114 62.298 9.838C61.866 9.55 61.368 9.406 60.804 9.406C60.024 9.406 59.394 9.7 58.914 10.288C58.434 10.864 58.194 11.638 58.194 12.61C58.194 13.582 58.434 14.362 58.914 14.95C59.394 15.538 60.024 15.832 60.804 15.832C61.368 15.832 61.866 15.688 62.298 15.4C62.73 15.112 63.048 14.716 63.252 14.212H66.978C66.69 15.7 66.006 16.888 64.926 17.776C63.858 18.652 62.502 19.09 60.858 19.09C59.598 19.09 58.494 18.82 57.546 18.28C56.61 17.728 55.884 16.96 55.368 15.976C54.864 14.992 54.612 13.87 54.612 12.61C54.612 11.35 54.864 10.228 55.368 9.244C55.884 8.26 56.61 7.498 57.546 6.958C58.494 6.406 59.598 6.13 60.858 6.13ZM75.4359 19L72.8619 14.302H72.5019V19H68.9559V6.256H74.5539C75.5739 6.256 76.4379 6.436 77.1459 6.796C77.8659 7.144 78.4059 7.63 78.7659 8.254C79.1259 8.878 79.3059 9.58 79.3059 10.36C79.3059 11.248 79.0599 12.022 78.5679 12.682C78.0759 13.33 77.3679 13.786 76.4439 14.05L79.3419 19H75.4359ZM72.5019 11.926H74.2479C75.2319 11.926 75.7239 11.482 75.7239 10.594C75.7239 10.174 75.5979 9.844 75.3459 9.604C75.1059 9.364 74.7399 9.244 74.2479 9.244H72.5019V11.926ZM84.6577 9.082V11.188H88.7797V13.87H84.6577V16.174H89.3197V19H81.1117V6.256H89.3197V9.082H84.6577ZM99.3798 16.876H94.8618L94.1598 19H90.4338L95.0958 6.31H99.1818L103.826 19H100.082L99.3798 16.876ZM98.4978 14.212L97.1298 10.072L95.7438 14.212H98.4978ZM114.859 6.256V9.082H111.421V19H107.893V9.082H104.491V6.256H114.859ZM119.965 6.256V19H116.419V6.256H119.965ZM125.179 6.256L128.059 15.436L130.921 6.256H134.683L130.327 19H125.773L121.417 6.256H125.179ZM139.671 9.082V11.188H143.793V13.87H139.671V16.174H144.333V19H136.125V6.256H144.333V9.082H139.671ZM62.748 36.066H57.168L56.106 39H54.342L59.04 26.544H60.894L65.574 39H63.81L62.748 36.066ZM62.28 34.788L59.958 28.38L57.636 34.788H62.28ZM73.388 26.184C74.864 26.184 76.1 26.55 77.096 27.282C78.104 28.014 78.782 29.01 79.13 30.27H77.402C77.102 29.502 76.598 28.884 75.89 28.416C75.194 27.948 74.366 27.714 73.406 27.714C72.542 27.714 71.768 27.918 71.084 28.326C70.4 28.722 69.86 29.292 69.464 30.036C69.08 30.78 68.888 31.656 68.888 32.664C68.888 33.696 69.086 34.59 69.482 35.346C69.878 36.09 70.424 36.666 71.12 37.074C71.828 37.47 72.638 37.668 73.55 37.668C74.33 37.668 75.044 37.5 75.692 37.164C76.34 36.828 76.868 36.342 77.276 35.706C77.696 35.058 77.948 34.302 78.032 33.438H73.046V32.214H79.418V33.726C79.31 34.734 78.998 35.646 78.482 36.462C77.966 37.278 77.27 37.926 76.394 38.406C75.518 38.886 74.522 39.126 73.406 39.126C72.182 39.126 71.102 38.856 70.166 38.316C69.23 37.764 68.498 37.002 67.97 36.03C67.454 35.046 67.196 33.924 67.196 32.664C67.196 31.404 67.454 30.288 67.97 29.316C68.498 28.332 69.23 27.564 70.166 27.012C71.102 26.46 72.176 26.184 73.388 26.184ZM83.6717 27.642V31.98H88.4957V33.24H83.6717V37.668H89.0357V39H82.0337V26.31H89.0357V27.642H83.6717ZM101.399 39H99.7612L93.1732 28.974V39H91.5352V26.31H93.1732L99.7612 36.354V26.31H101.399V39ZM110.045 26.184C111.593 26.184 112.871 26.568 113.879 27.336C114.887 28.092 115.583 29.13 115.967 30.45H114.239C113.915 29.61 113.393 28.944 112.673 28.452C111.953 27.948 111.071 27.696 110.027 27.696C109.199 27.696 108.455 27.9 107.795 28.308C107.147 28.704 106.631 29.28 106.247 30.036C105.875 30.78 105.689 31.656 105.689 32.664C105.689 33.66 105.875 34.53 106.247 35.274C106.631 36.018 107.147 36.594 107.795 37.002C108.455 37.398 109.199 37.596 110.027 37.596C111.071 37.596 111.953 37.35 112.673 36.858C113.393 36.354 113.915 35.682 114.239 34.842H115.967C115.583 36.162 114.887 37.206 113.879 37.974C112.871 38.73 111.593 39.108 110.045 39.108C108.857 39.108 107.807 38.838 106.895 38.298C105.983 37.746 105.269 36.984 104.753 36.012C104.249 35.028 103.997 33.912 103.997 32.664C103.997 31.404 104.249 30.282 104.753 29.298C105.269 28.314 105.983 27.552 106.895 27.012C107.807 26.46 108.857 26.184 110.045 26.184ZM127.572 26.31L123.414 34.194V39H121.758V34.194L117.582 26.31H119.49L122.604 32.448L125.7 26.31H127.572Z" fill="black" fill-opacity="0.85" />
                        <path d="M16.1064 9.35054C14.6729 9.89206 13.6457 11.2671 13.6457 12.8876C13.6457 13.5117 13.8119 14.0924 14.0803 14.6125C12.9432 15.0496 12.1296 16.146 12.1296 17.4359C12.1296 18.7262 12.9432 19.8222 14.0803 20.2597C13.8119 20.7798 13.6457 21.3605 13.6457 21.9842C13.6457 23.6051 14.6729 24.9801 16.1064 25.5213C15.9928 25.8389 15.9199 26.1764 15.9199 26.5325C15.9199 28.2048 17.2798 29.5647 18.9521 29.5647C19.3296 29.5647 19.6876 29.4866 20.0211 29.3608C20.5122 30.3746 21.5423 31.0808 22.7423 31.0808C24.4146 31.0808 25.7745 29.7209 25.7745 28.0486V6.82322C25.7745 5.15129 24.4146 3.79102 22.7423 3.79102C21.5423 3.79102 20.5122 4.49762 20.0211 5.51106C19.6876 5.38522 19.3296 5.30712 18.9521 5.30712C17.2798 5.30712 15.9199 6.66739 15.9199 8.33932C15.9199 8.69576 15.9928 9.03296 16.1064 9.35054ZM18.9521 6.82322C19.7882 6.82322 20.4682 7.50317 20.4682 8.33932H21.9843C21.9843 7.61088 21.7152 6.9498 21.2855 6.42679C21.4613 5.78423 22.0443 5.30712 22.7423 5.30712C23.5785 5.30712 24.2584 5.98707 24.2584 6.82322V28.0486C24.2584 28.8848 23.5785 29.5647 22.7423 29.5647C22.0443 29.5647 21.4613 29.088 21.2855 28.445C21.7152 27.922 21.9843 27.2613 21.9843 26.5325H20.4682C20.4682 27.3687 19.7882 28.0486 18.9521 28.0486C18.1159 28.0486 17.436 27.3687 17.436 26.5325C17.436 25.6964 18.1159 25.0164 18.9521 25.0164V23.5003C18.2137 23.5003 17.5452 23.7764 17.0192 24.2162C15.9639 24.0196 15.1618 23.0958 15.1618 21.9842C15.1618 20.7306 16.1823 19.7101 17.436 19.7101C18.69 19.7101 19.7101 20.7306 19.7101 21.9842H21.2262C21.2262 19.8944 19.5262 18.194 17.436 18.194C16.5795 18.194 15.797 18.4905 15.1618 18.972V18.952C14.3257 18.952 13.6457 18.2721 13.6457 17.4359C13.6457 16.5998 14.3257 15.9198 15.1618 15.9198V15.9002C15.797 16.3818 16.5795 16.6779 17.436 16.6779C19.5262 16.6779 21.2262 14.9778 21.2262 12.8876H19.7101C19.7101 14.1417 18.69 15.1618 17.436 15.1618C16.1823 15.1618 15.1618 14.1417 15.1618 12.8876C15.1618 11.7765 15.9639 10.8526 17.0192 10.656C17.5452 11.0958 18.2137 11.3715 18.9521 11.3715V9.85542C18.1159 9.85542 17.436 9.17547 17.436 8.33932C17.436 7.50317 18.1159 6.82322 18.9521 6.82322Z" fill="black" />
                        <path d="M34.1131 5.30712C33.7356 5.30712 33.378 5.38522 33.0445 5.51106C32.553 4.49762 31.5228 3.79102 30.3228 3.79102C28.6505 3.79102 27.2906 5.15129 27.2906 6.82322V28.0486C27.2906 29.7209 28.6505 31.0808 30.3228 31.0808C31.5228 31.0808 32.553 30.3746 33.0445 29.3608C33.378 29.4866 33.7356 29.5647 34.1131 29.5647C35.7854 29.5647 37.1453 28.2048 37.1453 26.5325C37.1453 26.1764 37.0728 25.8389 36.9587 25.5213C38.3923 24.9801 39.4194 23.6051 39.4194 21.9842C39.4194 21.3605 39.2536 20.7798 38.9853 20.2597C40.1223 19.8222 40.9355 18.7262 40.9355 17.4359C40.9355 16.146 40.1223 15.0496 38.9853 14.6125C39.2536 14.0924 39.4194 13.5117 39.4194 12.8876C39.4194 11.2671 38.3923 9.89206 36.9587 9.35054C37.0728 9.03296 37.1453 8.69576 37.1453 8.33932C37.1453 6.66739 35.7854 5.30712 34.1131 5.30712ZM37.9033 12.8876C37.9033 14.1417 36.8832 15.1618 35.6292 15.1618C34.3755 15.1618 33.355 14.1417 33.355 12.8876H31.8389C31.8389 14.9778 33.5394 16.6779 35.6292 16.6779C36.4857 16.6779 37.2682 16.3818 37.9033 15.9002V15.9198C38.7395 15.9198 39.4194 16.5998 39.4194 17.4359C39.4194 18.2721 38.7395 18.952 37.9033 18.952V18.972C37.2682 18.4905 36.4857 18.194 35.6292 18.194C33.5394 18.194 31.8389 19.8944 31.8389 21.9842H33.355C33.355 20.7306 34.3755 19.7101 35.6292 19.7101C36.8832 19.7101 37.9033 20.7306 37.9033 21.9842C37.9033 23.0958 37.1013 24.0196 36.0463 24.2162C35.52 23.7764 34.8515 23.5003 34.1131 23.5003V25.0164C34.9492 25.0164 35.6292 25.6964 35.6292 26.5325C35.6292 27.3687 34.9492 28.0486 34.1131 28.0486C33.2769 28.0486 32.597 27.3687 32.597 26.5325H31.0809C31.0809 27.2613 31.35 27.922 31.7797 28.445C31.6039 29.088 31.0209 29.5647 30.3228 29.5647C29.4867 29.5647 28.8067 28.8848 28.8067 28.0486V6.82322C28.8067 5.98707 29.4867 5.30712 30.3228 5.30712C31.0209 5.30712 31.6039 5.78423 31.7797 6.42679C31.35 6.9498 31.0809 7.61088 31.0809 8.33932H32.597C32.597 7.50317 33.2769 6.82322 34.1131 6.82322C34.9492 6.82322 35.6292 7.50317 35.6292 8.33932C35.6292 9.17547 34.9492 9.85542 34.1131 9.85542V11.3715C34.8515 11.3715 35.52 11.0958 36.0463 10.656C37.1013 10.8526 37.9033 11.7765 37.9033 12.8876Z" fill="black" />
                        <path d="M38.4697 4.72833C34.9274 1.39891 30.2881 -0.27043 25.4192 0.0360471L25.5132 1.54882C29.962 1.27232 34.1964 2.7936 37.4318 5.83284C40.6687 8.87466 42.4517 12.9962 42.4517 17.436C42.4517 22.7864 39.7848 27.7478 35.3176 30.7082C33.7767 31.7298 32.6107 33.187 31.8923 34.8712H21.1415C20.4131 33.1748 19.2427 31.7072 17.6992 30.6764C13.0954 27.5994 10.45 22.4607 10.6221 16.9282L9.10671 16.8812C8.91794 22.9397 11.8158 28.5681 16.8571 31.9363C17.9705 32.6807 18.8596 33.6941 19.4792 34.8712H17.436V36.3873H20.084C20.2309 36.8785 20.3487 37.3819 20.4082 37.9034H18.9521V39.4195H20.4682V41.6936C20.4682 42.113 20.808 42.4517 21.2263 42.4517H21.9843C21.9843 44.9601 24.0242 47 26.5326 47C29.0411 47 31.0809 44.9601 31.0809 42.4517H31.839C32.2576 42.4517 32.597 42.113 32.597 41.6936V39.4195H34.1131V37.9034H32.6503C32.704 37.3826 32.811 36.8777 32.9549 36.3873H35.6292V34.8712H33.5531C34.1638 33.7071 35.0477 32.7062 36.1556 31.9726C41.047 28.7287 43.9678 23.295 43.9678 17.436C43.9678 12.6438 41.9635 8.01149 38.4697 4.72833ZM26.5326 45.4839C24.8603 45.4839 23.5004 44.124 23.5004 42.4517H29.5648C29.5648 44.124 28.2049 45.4839 26.5326 45.4839ZM31.0809 40.9356H21.9843V39.4195H31.0809V40.9356ZM31.135 37.9034H21.9236C21.8729 37.3874 21.7911 36.8803 21.6667 36.3873H31.3707C31.2501 36.8796 31.1801 37.3889 31.135 37.9034Z" fill="black" />
                        <path d="M8.33935 5.30708C10.0116 5.30708 11.3715 6.66736 11.3715 8.33928C11.3715 8.75866 11.7113 9.09734 12.1296 9.09734C12.5482 9.09734 12.8876 8.75866 12.8876 8.33928C12.8876 6.66736 14.2475 5.30708 15.9198 5.30708C16.3385 5.30708 16.6779 4.9684 16.6779 4.54903C16.6779 4.13003 16.3385 3.79098 15.9198 3.79098C14.2475 3.79098 12.8876 2.43108 12.8876 0.758783C12.8876 0.339782 12.5482 0.000732422 12.1296 0.000732422C11.7113 0.000732422 11.3715 0.339782 11.3715 0.758783C11.3715 2.43108 10.0116 3.79098 8.33935 3.79098C7.92109 3.79098 7.5813 4.13003 7.5813 4.54903C7.5813 4.9684 7.92109 5.30708 8.33935 5.30708ZM12.1296 3.27019C12.4664 3.77655 12.9021 4.21257 13.4084 4.54903C12.9021 4.88586 12.4664 5.32152 12.1296 5.82787C11.7931 5.32152 11.3571 4.88586 10.8508 4.54903C11.3571 4.21257 11.7931 3.77655 12.1296 3.27019Z" fill="black" />
                        <path d="M11.3715 12.8877C11.7901 12.8877 12.1296 12.549 12.1296 12.1296C12.1296 11.7106 11.7901 11.3716 11.3715 11.3716C9.69921 11.3716 8.33931 10.0117 8.33931 8.33935C8.33931 7.92035 7.99989 7.5813 7.58126 7.5813C7.163 7.5813 6.82321 7.92035 6.82321 8.33935C6.82321 10.0117 5.46331 11.3716 3.79101 11.3716C3.37275 11.3716 3.03296 11.7106 3.03296 12.1296C3.03296 12.549 3.37275 12.8877 3.79101 12.8877C5.46331 12.8877 6.82321 14.2479 6.82321 15.9199C6.82321 16.3392 7.163 16.6779 7.58126 16.6779C7.99989 16.6779 8.33931 16.3392 8.33931 15.9199C8.33931 14.2479 9.69921 12.8877 11.3715 12.8877ZM7.58126 13.4084C7.2448 12.9021 6.80877 12.4664 6.30242 12.1296C6.80877 11.7931 7.24406 11.3571 7.58126 10.8508C7.91809 11.3571 8.35374 11.7924 8.8601 12.1296C8.35374 12.4664 7.91809 12.9021 7.58126 13.4084Z" fill="black" />
                    </svg>
                </Link>

            </div>
            <div>
                {
                    isAdmin && <div className="sidebar-item-div">
                        <div className="d-flex p-3 sidebar-item">
                            <div className="raju p-2">
                                <svg className="sidebar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.325 7.45L12.5417 1.88334C12.3338 1.46697 12.0139 1.11688 11.6178 0.872485C11.2218 0.628091 10.7654 0.49909 10.3 0.500005H5.70001C5.23464 0.49909 4.77825 0.628091 4.38221 0.872485C3.98617 1.11688 3.66621 1.46697 3.45835 1.88334L0.675013 7.45C0.558926 7.68291 0.498993 7.93977 0.500013 8.2V13C0.500013 13.663 0.763405 14.2989 1.23225 14.7678C1.70109 15.2366 2.33697 15.5 3.00001 15.5H13C13.6631 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13V8.2C15.501 7.93977 15.4411 7.68291 15.325 7.45ZM4.95001 2.625C5.0199 2.48631 5.12715 2.3699 5.25967 2.28892C5.39219 2.20793 5.54471 2.16559 5.70001 2.16667H10.3C10.4553 2.16559 10.6078 2.20793 10.7404 2.28892C10.8729 2.3699 10.9801 2.48631 11.05 2.625L13.3167 7.16667H2.68335L4.95001 2.625ZM13 13.8333H3.00001C2.779 13.8333 2.56704 13.7455 2.41076 13.5893C2.25448 13.433 2.16668 13.221 2.16668 13V8.83334H13.8333V13C13.8333 13.221 13.7455 13.433 13.5893 13.5893C13.433 13.7455 13.221 13.8333 13 13.8333Z" fill="black" />
                                    <path d="M11.3334 10.5H8.00002C7.77901 10.5 7.56705 10.5878 7.41076 10.7441C7.25448 10.9004 7.16669 11.1123 7.16669 11.3333C7.16669 11.5543 7.25448 11.7663 7.41076 11.9226C7.56705 12.0789 7.77901 12.1667 8.00002 12.1667H11.3334C11.5544 12.1667 11.7663 12.0789 11.9226 11.9226C12.0789 11.7663 12.1667 11.5543 12.1667 11.3333C12.1667 11.1123 12.0789 10.9004 11.9226 10.7441C11.7663 10.5878 11.5544 10.5 11.3334 10.5Z" fill="black" />
                                    <path d="M4.66668 12.1667C5.12691 12.1667 5.50001 11.7936 5.50001 11.3333C5.50001 10.8731 5.12691 10.5 4.66668 10.5C4.20644 10.5 3.83334 10.8731 3.83334 11.3333C3.83334 11.7936 4.20644 12.1667 4.66668 12.1667Z" fill="black" />
                                </svg>


                            </div>
                            <div className="raju p-2">
                                <Link className="text-decoration-none text-reset" to="/serviceList"><h5>Service list</h5></Link>
                            </div>
                        </div>
                        <div className="d-flex p-3   sidebar-item">
                            <div className="raju p-2">
                                <svg className="sidebar-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 1.54169V11.4584" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.54163 6.5H11.4583" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <div className="raju p-2">
                                <Link className="text-decoration-none text-reset" to="/addService"><h5 className="text-reset">Add Service</h5></Link>
                            </div>
                        </div>
                        <div className="d-flex p-3   sidebar-item">
                            <div className="raju p-2">
                                <svg className="sidebar-icon" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 2.99998H14.6667V2.16665C14.6667 1.94563 14.5789 1.73367 14.4226 1.57739C14.2664 1.42111 14.0544 1.33331 13.8334 1.33331C13.6124 1.33331 13.4004 1.42111 13.2441 1.57739C13.0878 1.73367 13 1.94563 13 2.16665V2.99998H12.1667C11.9457 2.99998 11.7337 3.08778 11.5775 3.24406C11.4212 3.40034 11.3334 3.6123 11.3334 3.83331C11.3334 4.05433 11.4212 4.26629 11.5775 4.42257C11.7337 4.57885 11.9457 4.66665 12.1667 4.66665H13V5.49998C13 5.72099 13.0878 5.93295 13.2441 6.08923C13.4004 6.24551 13.6124 6.33331 13.8334 6.33331C14.0544 6.33331 14.2664 6.24551 14.4226 6.08923C14.5789 5.93295 14.6667 5.72099 14.6667 5.49998V4.66665H15.5C15.7211 4.66665 15.933 4.57885 16.0893 4.42257C16.2456 4.26629 16.3334 4.05433 16.3334 3.83331C16.3334 3.6123 16.2456 3.40034 16.0893 3.24406C15.933 3.08778 15.7211 2.99998 15.5 2.99998Z" fill="black" />
                                    <path d="M6.33333 7.16667C6.9926 7.16667 7.63707 6.97117 8.18523 6.6049C8.7334 6.23863 9.16064 5.71803 9.41293 5.10895C9.66523 4.49986 9.73124 3.82964 9.60262 3.18303C9.474 2.53643 9.15653 1.94249 8.69036 1.47631C8.22418 1.01014 7.63024 0.692668 6.98363 0.564051C6.33703 0.435433 5.66681 0.501444 5.05772 0.753736C4.44863 1.00603 3.92804 1.43327 3.56177 1.98143C3.1955 2.5296 3 3.17406 3 3.83333C3 4.71739 3.35119 5.56524 3.97631 6.19036C4.60143 6.81548 5.44928 7.16667 6.33333 7.16667ZM6.33333 2.16667C6.66297 2.16667 6.9852 2.26442 7.25928 2.44755C7.53337 2.63069 7.74699 2.89099 7.87313 3.19553C7.99928 3.50007 8.03228 3.83518 7.96798 4.15849C7.90367 4.48179 7.74493 4.77876 7.51184 5.01185C7.27876 5.24493 6.98179 5.40367 6.65848 5.46798C6.33518 5.53229 6.00007 5.49928 5.69553 5.37313C5.39098 5.24699 5.13069 5.03337 4.94755 4.75928C4.76442 4.4852 4.66667 4.16297 4.66667 3.83333C4.66667 3.39131 4.84226 2.96738 5.15482 2.65482C5.46738 2.34226 5.89131 2.16667 6.33333 2.16667Z" fill="black" />
                                    <path d="M6.33333 8.83331C4.78624 8.83331 3.30251 9.44789 2.20854 10.5419C1.11458 11.6358 0.5 13.1195 0.5 14.6666C0.5 14.8877 0.587797 15.0996 0.744078 15.2559C0.900358 15.4122 1.11232 15.5 1.33333 15.5C1.55435 15.5 1.76631 15.4122 1.92259 15.2559C2.07887 15.0996 2.16667 14.8877 2.16667 14.6666C2.16667 13.5616 2.60565 12.5018 3.38705 11.7204C4.16846 10.939 5.22826 10.5 6.33333 10.5C7.4384 10.5 8.49821 10.939 9.27961 11.7204C10.061 12.5018 10.5 13.5616 10.5 14.6666C10.5 14.8877 10.5878 15.0996 10.7441 15.2559C10.9004 15.4122 11.1123 15.5 11.3333 15.5C11.5543 15.5 11.7663 15.4122 11.9226 15.2559C12.0789 15.0996 12.1667 14.8877 12.1667 14.6666C12.1667 13.1195 11.5521 11.6358 10.4581 10.5419C9.36416 9.44789 7.88043 8.83331 6.33333 8.83331Z" fill="black" />
                                </svg>

                            </div>
                            <div className="raju p-2">
                                <Link className="text-decoration-none text-reset" to="/makeAdmin"><h5>Make Admin</h5></Link>

                            </div>
                        </div>
                    </div>
                }
                {
                    !isAdmin && <div className="sidebar-item-div">
                        <div className="d-flex p-3   sidebar-item">
                            <div className="raju p-2">
                                <svg className="sidebar-icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.08 4.0001C18.9072 3.70072 18.6598 3.45123 18.3618 3.27597C18.0639 3.10071 17.7256 3.00566 17.38 3.0001H4.58L4 0.740098C3.9414 0.521936 3.81066 0.330042 3.62908 0.19567C3.44749 0.061298 3.22576 -0.00763504 3 9.81991e-05H1C0.734784 9.81991e-05 0.48043 0.105455 0.292893 0.292991C0.105357 0.480528 0 0.734882 0 1.0001C0 1.26531 0.105357 1.51967 0.292893 1.7072C0.48043 1.89474 0.734784 2.0001 1 2.0001H2.24L5 12.2601C5.0586 12.4783 5.18934 12.6702 5.37092 12.8045C5.55251 12.9389 5.77424 13.0078 6 13.0001H15C15.1847 12.9995 15.3656 12.9479 15.5227 12.8508C15.6798 12.7537 15.8069 12.615 15.89 12.4501L19.17 5.8901C19.3122 5.59211 19.3783 5.26357 19.3626 4.93378C19.3469 4.604 19.2498 4.28323 19.08 4.0001ZM14.38 11.0001H6.76L5.13 5.0001H17.38L14.38 11.0001Z" fill="#263238" />
                                    <path d="M5.5 18.0001C6.32843 18.0001 7 17.3285 7 16.5001C7 15.6717 6.32843 15.0001 5.5 15.0001C4.67157 15.0001 4 15.6717 4 16.5001C4 17.3285 4.67157 18.0001 5.5 18.0001Z" fill="#263238" />
                                    <path d="M15.5 18.0001C16.3284 18.0001 17 17.3285 17 16.5001C17 15.6717 16.3284 15.0001 15.5 15.0001C14.6716 15.0001 14 15.6717 14 16.5001C14 17.3285 14.6716 18.0001 15.5 18.0001Z" fill="#263238" />
                                </svg>

                            </div>
                            <div className="raju p-2">
                                <Link className="text-decoration-none text-reset" to="/order/form"><h5>Order</h5></Link>

                            </div>
                        </div>
                        <div className="d-flex p-3   sidebar-item">
                            <div className="raju p-2">
                                <svg className="sidebar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.325 7.45L12.5417 1.88334C12.3338 1.46697 12.0139 1.11688 11.6178 0.872485C11.2218 0.628091 10.7654 0.49909 10.3 0.500005H5.70001C5.23464 0.49909 4.77825 0.628091 4.38221 0.872485C3.98617 1.11688 3.66621 1.46697 3.45835 1.88334L0.675013 7.45C0.558926 7.68291 0.498993 7.93977 0.500013 8.2V13C0.500013 13.663 0.763405 14.2989 1.23225 14.7678C1.70109 15.2366 2.33697 15.5 3.00001 15.5H13C13.6631 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13V8.2C15.501 7.93977 15.4411 7.68291 15.325 7.45ZM4.95001 2.625C5.0199 2.48631 5.12715 2.3699 5.25967 2.28892C5.39219 2.20793 5.54471 2.16559 5.70001 2.16667H10.3C10.4553 2.16559 10.6078 2.20793 10.7404 2.28892C10.8729 2.3699 10.9801 2.48631 11.05 2.625L13.3167 7.16667H2.68335L4.95001 2.625ZM13 13.8333H3.00001C2.779 13.8333 2.56704 13.7455 2.41076 13.5893C2.25448 13.433 2.16668 13.221 2.16668 13V8.83334H13.8333V13C13.8333 13.221 13.7455 13.433 13.5893 13.5893C13.433 13.7455 13.221 13.8333 13 13.8333Z" fill="black" />
                                    <path d="M11.3334 10.5H8.00002C7.77901 10.5 7.56705 10.5878 7.41076 10.7441C7.25448 10.9004 7.16669 11.1123 7.16669 11.3333C7.16669 11.5543 7.25448 11.7663 7.41076 11.9226C7.56705 12.0789 7.77901 12.1667 8.00002 12.1667H11.3334C11.5544 12.1667 11.7663 12.0789 11.9226 11.9226C12.0789 11.7663 12.1667 11.5543 12.1667 11.3333C12.1667 11.1123 12.0789 10.9004 11.9226 10.7441C11.7663 10.5878 11.5544 10.5 11.3334 10.5Z" fill="black" />
                                    <path d="M4.66668 12.1667C5.12691 12.1667 5.50001 11.7936 5.50001 11.3333C5.50001 10.8731 5.12691 10.5 4.66668 10.5C4.20644 10.5 3.83334 10.8731 3.83334 11.3333C3.83334 11.7936 4.20644 12.1667 4.66668 12.1667Z" fill="black" />
                                </svg>
                            </div>
                            <div className="raju p-2">
                                <Link className="text-decoration-none text-reset" to="/myServices"><h5>Services</h5></Link>
                            </div>
                        </div>
                        <div className="d-flex p-3   sidebar-item">
                            <div className="raju p-2">
                                <svg className="sidebar-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99999 10C10.4602 10 10.8333 9.62694 10.8333 9.16671C10.8333 8.70647 10.4602 8.33337 9.99999 8.33337C9.53975 8.33337 9.16666 8.70647 9.16666 9.16671C9.16666 9.62694 9.53975 10 9.99999 10Z" fill="black" />
                                    <path d="M13.3333 10C13.7936 10 14.1667 9.62694 14.1667 9.16671C14.1667 8.70647 13.7936 8.33337 13.3333 8.33337C12.8731 8.33337 12.5 8.70647 12.5 9.16671C12.5 9.62694 12.8731 10 13.3333 10Z" fill="black" />
                                    <path d="M6.66665 10C7.12688 10 7.49998 9.62694 7.49998 9.16671C7.49998 8.70647 7.12688 8.33337 6.66665 8.33337C6.20641 8.33337 5.83331 8.70647 5.83331 9.16671C5.83331 9.62694 6.20641 10 6.66665 10Z" fill="black" />
                                    <path d="M15.8333 2.5H4.16666C3.50362 2.5 2.86773 2.76339 2.39889 3.23223C1.93005 3.70107 1.66666 4.33696 1.66666 5V17.5C1.66691 17.6477 1.7064 17.7926 1.78107 17.92C1.85575 18.0474 1.96293 18.1526 2.09166 18.225C2.2162 18.2956 2.35683 18.3329 2.49999 18.3333C2.64956 18.3333 2.79636 18.293 2.92499 18.2167L6.66666 15.95C6.80496 15.8677 6.96415 15.8271 7.12499 15.8333H15.8333C16.4964 15.8333 17.1322 15.5699 17.6011 15.1011C18.0699 14.6323 18.3333 13.9964 18.3333 13.3333V5C18.3333 4.33696 18.0699 3.70107 17.6011 3.23223C17.1322 2.76339 16.4964 2.5 15.8333 2.5ZM16.6667 13.3333C16.6667 13.5543 16.5789 13.7663 16.4226 13.9226C16.2663 14.0789 16.0543 14.1667 15.8333 14.1667H7.12499C6.66984 14.1663 6.22323 14.2902 5.83332 14.525L3.33332 16.025V5C3.33332 4.77899 3.42112 4.56702 3.5774 4.41074C3.73368 4.25446 3.94564 4.16667 4.16666 4.16667H15.8333C16.0543 4.16667 16.2663 4.25446 16.4226 4.41074C16.5789 4.56702 16.6667 4.77899 16.6667 5V13.3333Z" fill="black" />
                                </svg>

                            </div>
                            <div className="raju p-2">
                                <Link className="text-decoration-none text-reset" to="/review"><h5>Review</h5></Link>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Sidebar;